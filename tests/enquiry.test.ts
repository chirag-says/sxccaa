/**
 * The general enquiry form.
 *
 * Two things here are worth more than the rest: that the email template escapes
 * what a stranger typed, and that the field-name casing is right. The second
 * sounds trivial and is not — the Framer markup ships a lowercase `message`
 * honeypot next to the real capitalised `Message`, so reading the wrong one
 * drops every genuine enquiry and accepts every bot.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import { enquiryEmail } from '../src/lib/email.ts';
import { LIMITS } from '../src/lib/rate-limit.ts';

describe('enquiryEmail', () => {
  const base = { name: 'Asha Menon', email: 'asha@example.org', message: 'Is there a Delhi chapter?', source: '/contact' };

  it('carries the enquiry, unlike every other template in the file', () => {
    // The no-PII rule exists because the other templates are about alumni in the
    // directory. An enquiry is the sender's own message to the people who can
    // answer it, so forwarding it is the entire point.
    const mail = enquiryEmail(base);
    assert.ok(mail.text.includes('Is there a Delhi chapter?'));
    assert.ok(mail.html.includes('Is there a Delhi chapter?'));
    assert.ok(mail.subject.includes('Asha Menon'));
  });

  it('sets reply-to so the Association can just hit reply', () => {
    assert.equal(enquiryEmail(base).replyTo, 'asha@example.org');
  });

  it('says the reply-to address is unverified', () => {
    // Anyone can type anyone's address into a public form. Escaping does not fix
    // impersonation; saying so does.
    const mail = enquiryEmail(base);
    assert.match(mail.text, /NOT been verified/);
    assert.match(mail.html, /not<\/strong> been verified/);
  });

  it('escapes the message, which is free text from a stranger', () => {
    const nasty = enquiryEmail({
      ...base,
      message: '<img src=x onerror="alert(1)"> & <script>steal()</script>',
    });
    assert.ok(!nasty.html.includes('<script>'), 'a script tag survived into the HTML body');
    assert.ok(!nasty.html.includes('onerror="'), 'an event handler survived into the HTML body');
    assert.ok(nasty.html.includes('&lt;script&gt;'), 'the text should still be readable, escaped');
    assert.ok(nasty.html.includes('&amp;'), 'ampersands should be escaped');
  });

  it('escapes the name too, including in a quoted attribute position', () => {
    const nasty = enquiryEmail({ ...base, name: '"><script>x()</script>' });
    assert.ok(!nasty.html.includes('<script>'));
    assert.ok(nasty.html.includes('&quot;'));
  });

  it('handles an empty message without rendering a hole', () => {
    const mail = enquiryEmail({ ...base, message: '' });
    assert.ok(mail.text.includes('(no message)'));
    assert.ok(mail.html.includes('(no message)'));
  });
});

describe('the form field names match the markup', () => {
  /**
   * Read from the components themselves rather than restated here. A test that
   * asserts its own copy of the names would pass while the form broke.
   */
  const banner = readFileSync('src/components/contact/ContactBanner.tsx', 'utf8');
  const cta = readFileSync('src/components/shared/ContactCta.tsx', 'utf8');
  const route = readFileSync('src/app/api/enquiry/route.ts', 'utf8');

  it('the real fields are capitalised in both forms', () => {
    for (const [label, markup] of [['ContactBanner', banner], ['ContactCta', cta]] as const) {
      for (const field of ['Name', 'Email', 'Message', 'Consent']) {
        assert.ok(markup.includes(`name={"${field}"}`), `${label} is missing the ${field} field`);
      }
    }
  });

  it('the route reads the capitalised names, not the honeypots', () => {
    for (const field of ['Name', 'Email', 'Message', 'Consent']) {
      assert.ok(route.includes(`form.get('${field}')`), `the route does not read ${field}`);
    }
  });

  it('lowercase `message` is a honeypot and is never read as content', () => {
    // The trap. `message` and `Message` are both in the markup and only one is real.
    assert.ok(banner.includes('name={"message"} tabIndex={-1}'), 'the lowercase decoy should still be there');
    assert.ok(!route.includes("form.get('message')"), 'the route must not read the lowercase decoy as content');
    assert.ok(route.includes("'message'"), 'but it should list it as a honeypot');
  });

  it('every invisible decoy in the markup is on the honeypot list', () => {
    const decoys = [...banner.matchAll(/name=\{"([a-z]+)"\} tabIndex=\{-1\}/g)].map((m) => m[1]!);
    assert.ok(decoys.length >= 10, `expected the full set of decoys, found ${decoys.length}`);
    for (const decoy of decoys) {
      assert.ok(route.includes(`'${decoy}'`), `the route does not check the "${decoy}" honeypot`);
    }
  });
});

describe('the form can no longer report a success it did not have', () => {
  const form = readFileSync('src/components/ui/SiteForm.tsx', 'utf8');
  const contact = readFileSync('src/data/pages/contact.ts', 'utf8');
  const site = readFileSync('src/data/site.ts', 'utf8');

  it('action is a required prop', () => {
    // The bug was an optional action whose absence meant "pretend it worked".
    // Making it required deletes that branch and stops it coming back.
    assert.ok(form.includes('action: string;'), 'action should be a required string');
    assert.ok(!form.includes('action?: string'), 'action must not be optional again');
  });

  it('both call sites point at the endpoint', () => {
    assert.ok(contact.includes("action: '/api/enquiry'"));
    assert.ok(site.includes("action: '/api/enquiry'"));
  });

  it('the sent state is only set on a successful response', () => {
    // Crude, but it catches the shape of the old bug: a setState('sent') that is
    // not downstream of a response check.
    const sentCalls = [...form.matchAll(/setState\('sent'\)/g)];
    assert.equal(sentCalls.length, 1, 'there should be exactly one place that claims success');
    const before = form.slice(0, sentCalls[0]!.index);
    assert.ok(before.includes('if (!response.ok)'), 'success must come after the response is checked');
  });
});

describe('the enquiry rate limit', () => {
  it('is five a day per connection', () => {
    assert.equal(LIMITS.enquiryIpDay.capacity, 5);
    assert.equal(LIMITS.enquiryIpDay.bucket, 'enquiry:ip:d');
  });

  it('is looser than an access request, which asks more of the Association', () => {
    assert.ok(LIMITS.enquiryIpDay.capacity > LIMITS.accessRequestIpDay.capacity);
  });
});
