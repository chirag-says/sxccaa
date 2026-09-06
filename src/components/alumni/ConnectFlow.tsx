'use client';

/**
 * The connection-request journey (SOW C-01 – C-06), as a visual prototype:
 *
 *     Request form → Email verification → Request submitted
 *
 * Nothing is sent anywhere. There is no backend in this build, so the steps
 * advance in the browser and the screen says so — the point is to let SXCCAA
 * approve the journey, the fields and the wording before Phase 3 builds it.
 *
 * The parts that carry the safety promise are shown, not implied: the request
 * goes to the Association for moderation first, the alumnus decides, and the
 * alumnus's contact details are released only on acceptance.
 */

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import type { Alumnus } from '@/data/alumni';

/** SOW C-01: mentorship / career guidance / referral / research / other. */
const PURPOSES = ['Mentorship', 'Career guidance', 'Referral', 'Research', 'Other'];
const MESSAGE_LIMIT = 600;
const STEPS = ['Your request', 'Verify your email', 'Request submitted'];

function Steps({ current }: { current: number }) {
  return (
    <div className="sx-steps">
      {STEPS.map((label, i) => (
        <div key={label} className="sx-step" data-state={i < current ? 'done' : i === current ? 'current' : 'todo'}>
          <span className="sx-step__dot" aria-hidden="true" />
          <p className="framer-text framer-styles-preset-1tfjym1" data-styles-preset="zbOnBKABb">{label}</p>
          {i < STEPS.length - 1 && <span className="sx-step__rule" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

export function ConnectFlow({ person }: { person: Alumnus }) {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(1);
  };
  const submitCode = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(2);
  };

  return (
    <section className="sx-section" data-framer-name="Connection Request">
      <div className="sx-container">
        <div className="sx-wrapper">
          <div className="sx-head">
            <h1 className="framer-text framer-styles-preset-bm56uh" data-styles-preset="nqEg573cg">
              Connect with {person.name}
            </h1>
            <p className="framer-text framer-styles-preset-18gc2kl" data-styles-preset="mM0cFQnf6">
              Your request goes to the Association first. If it is approved, {person.name} decides whether to accept it — and only then are contact details shared, with you and with them.
            </p>
          </div>

          <Steps current={step} />

          <div className="sx-notice">
            <p className="framer-text framer-styles-preset-1tfjym1" data-styles-preset="zbOnBKABb">
              Prototype: this journey is for review only. Nothing is sent, no code is emailed, and no data is stored.
            </p>
          </div>

          {step === 0 && (
            <form className="sx-form" onSubmit={submitRequest}>
              <div className="sx-field">
                <label className="framer-text framer-styles-preset-1dfqlr0" data-styles-preset="r3nvaFHNq" htmlFor="requester-name">Your name*</label>
                <input id="requester-name" name="name" type="text" required placeholder="Your full name" />
              </div>
              <div className="sx-field">
                <label className="framer-text framer-styles-preset-1dfqlr0" data-styles-preset="r3nvaFHNq" htmlFor="requester-roll">College roll / ID*</label>
                <input id="requester-roll" name="roll" type="text" required placeholder="Your roll or student ID number" />
              </div>
              <div className="sx-field">
                <label className="framer-text framer-styles-preset-1dfqlr0" data-styles-preset="r3nvaFHNq" htmlFor="requester-year">Graduation year*</label>
                <input id="requester-year" name="year" type="text" inputMode="numeric" required placeholder="e.g. 2027" />
              </div>
              <div className="sx-field">
                <label className="framer-text framer-styles-preset-1dfqlr0" data-styles-preset="r3nvaFHNq" htmlFor="requester-email">Email*</label>
                <input id="requester-email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                <p className="framer-text framer-styles-preset-1tfjym1 sx-field__hint" data-styles-preset="zbOnBKABb">
                  We send a one-time code here to check the address is yours.
                </p>
              </div>
              <div className="sx-field">
                <label className="framer-text framer-styles-preset-1dfqlr0" data-styles-preset="r3nvaFHNq" htmlFor="requester-purpose">Purpose*</label>
                <select id="requester-purpose" name="purpose" required defaultValue="">
                  <option value="" disabled>Choose a purpose</option>
                  {PURPOSES.map((purpose) => <option key={purpose} value={purpose}>{purpose}</option>)}
                </select>
              </div>
              <div className="sx-field">
                <label className="framer-text framer-styles-preset-1dfqlr0" data-styles-preset="r3nvaFHNq" htmlFor="requester-message">Message</label>
                <textarea
                  id="requester-message"
                  name="message"
                  maxLength={MESSAGE_LIMIT}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Say who you are and what you would like to ask."
                />
                <p className="framer-text framer-styles-preset-1tfjym1 sx-field__hint" data-styles-preset="zbOnBKABb">
                  {MESSAGE_LIMIT - message.length} characters left
                </p>
              </div>
              <div className="sx-actions">
                <Button label="Send connection request" variant="default" submit />
              </div>
            </form>
          )}

          {step === 1 && (
            <form className="sx-form" onSubmit={submitCode}>
              <div className="sx-field">
                <label className="framer-text framer-styles-preset-1dfqlr0" data-styles-preset="r3nvaFHNq" htmlFor="otp">Enter the six-digit code</label>
                <input id="otp" name="otp" className="sx-otp" type="text" inputMode="numeric" maxLength={6} placeholder="––––––" required />
                <p className="framer-text framer-styles-preset-1tfjym1 sx-field__hint" data-styles-preset="zbOnBKABb">
                  In the live platform this code goes to {email || 'your email address'} and expires shortly. Here, any six characters will do.
                </p>
              </div>
              <div className="sx-actions">
                <Button label="Verify and submit" variant="default" submit />
                <button type="button" className="sx-reset" onClick={() => setStep(0)}>Back to the form</button>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="sx-block" style={{ maxWidth: 620 }}>
              <h2 className="framer-text framer-styles-preset-11yr44y" data-styles-preset="FFs_zSJqj">Your request has been submitted</h2>
              <p className="framer-text framer-styles-preset-1s2szaz" data-styles-preset="iF_e_kz5u">
                The Association reviews every request before it goes any further. If it is approved, {person.name} receives your message and can accept or decline it.
              </p>
              <p className="framer-text framer-styles-preset-1s2szaz" data-styles-preset="iF_e_kz5u">
                If they accept, we email you their chosen way of getting in touch. If they decline, or the request expires, nothing is shared and you are told either way.
              </p>
              <div className="sx-actions" style={{ marginTop: 12 }}>
                <Button label="Back to the directory" href="/alumni" variant="default" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
