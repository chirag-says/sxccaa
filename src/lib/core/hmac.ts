/**
 * Blind indexes and token hashes.
 *
 * Two different problems, two different tools:
 *
 *   - An email address has to be *matched* at login but never displayed from
 *     the allowlist, so `access_grant` stores an HMAC and nothing else. Even
 *     with a full database dump, an attacker cannot read the membership list,
 *     and cannot test a guess against it without the pepper — which lives in
 *     the host's secret store, not the database.
 *
 *   - A session token or magic-link token is 256 bits of our own randomness.
 *     There is no dictionary to guess from, so a plain SHA-256 is enough and a
 *     secret would add nothing. Storing only the hash means a leaked database
 *     yields no usable sessions.
 *
 * Every HMAC here is domain-separated by a fixed tag, so the hash of an email
 * can never collide with the hash of an IP address that happens to be the same
 * string. One secret, several non-overlapping uses.
 */

import { createHash, createHmac } from 'node:crypto';
import { getEmailPepper } from './keys.ts';
import { normaliseEmail } from './email.ts';

type Domain = 'email' | 'ip' | 'ua';

/** Bump this if a domain's input format ever changes; old and new hashes stay distinct. */
const SCHEME = 'sxccaa.v1';

function keyedHash(domain: Domain, value: string, pepper: Buffer): Buffer {
  return createHmac('sha256', pepper).update(`${SCHEME}:${domain}:${value}`, 'utf8').digest();
}

/**
 * The allowlist index for an already-normalised address.
 *
 * Prefer {@link emailBlindIndex}, which normalises first. This lower-level form
 * exists for callers that have normalised once and are hashing in a loop.
 */
export function blindIndexOfNormalised(normalised: string, pepper: Buffer = getEmailPepper()): Buffer {
  if (typeof normalised !== 'string' || normalised === '') {
    throw new TypeError('blindIndexOfNormalised requires a non-empty normalised address.');
  }
  return keyedHash('email', normalised, pepper);
}

export type BlindIndexResult =
  | { ok: true; hmac: Buffer; normalised: string }
  | { ok: false; reason: string };

/**
 * Normalise an address and hash it. This is the only function the login route
 * and the ingest tool should call, so the two can never drift apart.
 */
export function emailBlindIndex(raw: unknown, pepper: Buffer = getEmailPepper()): BlindIndexResult {
  const normalised = normaliseEmail(raw);
  if (!normalised.ok) return normalised;
  return { ok: true, hmac: blindIndexOfNormalised(normalised.value, pepper), normalised: normalised.value };
}

/**
 * Hash an IP for rate limiting and audit rows. An IP is personal data under the
 * DPDP Act, and we need to compare them, not read them — exactly the blind
 * index case again.
 */
export function ipBlindIndex(ip: string, pepper: Buffer = getEmailPepper()): Buffer {
  return keyedHash('ip', ip.trim().toLowerCase(), pepper);
}

/** Hash a user-agent string, so a session can notice it has been moved without storing a fingerprint. */
export function uaBlindIndex(userAgent: string, pepper: Buffer = getEmailPepper()): Buffer {
  return keyedHash('ua', userAgent.slice(0, 512), pepper);
}

/**
 * Hash a token we generated ourselves. Unkeyed by design: the input already has
 * 256 bits of entropy, so there is no guessing attack for a pepper to prevent,
 * and an unkeyed hash keeps token verification working through a pepper
 * rotation.
 */
export function tokenHash(rawToken: string): Buffer {
  if (typeof rawToken !== 'string' || rawToken === '') {
    throw new TypeError('tokenHash requires a non-empty token.');
  }
  return createHash('sha256').update(rawToken, 'utf8').digest();
}
