'use client';

/**
 * Contact page hero — two-column layout:
 *   Left:  heading, description, contact details, socials
 *   Right: the contact form card
 */

import { useState, type FormEvent } from 'react';
import { contactPage } from '@/data/pages/contact';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const SOCIALS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: LinkedInIcon },
  { name: 'X', href: 'https://x.com/', Icon: XIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/', Icon: InstagramIcon },
];

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export function ContactBanner() {
  const [state, setState] = useState<FormState>('idle');
  const [notice, setNotice] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const body = new FormData(form);
    body.set('source', '/contact');

    setState('sending');
    setNotice('');

    try {
      const response = await fetch(contactPage.form.action, { method: 'POST', body });
      const data = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        setState('error');
        setNotice(data.message ?? 'We could not send that. Please email the Association directly.');
        return;
      }

      setState('sent');
      setNotice(data.message ?? 'Thank you — your message is with the Association.');
      form.reset();
    } catch {
      setState('error');
      setNotice('We could not reach the server. Check your connection, or email the Association directly.');
    }
  }

  const label = state === 'idle' ? contactPage.form.submit
    : state === 'sending' ? contactPage.form.sending
    : state === 'sent' ? contactPage.form.sent
    : contactPage.form.error;

  return (
    <section className="ct-hero">
      <div className="ct-hero__inner">
        {/* ── Left column ── */}
        <div className="ct-hero__left">
          <p className="ct-hero__eyebrow">Contact Us</p>
          <h1 className="ct-hero__title">
            Let&rsquo;s start a<br />
            <em>conversation</em>
          </h1>
          <p className="ct-hero__desc">{contactPage.intro}</p>

          <div className="ct-hero__details">
            <a href={contactPage.phoneHref} className="ct-hero__detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {contactPage.phone}
            </a>
            <a href={contactPage.emailHref} className="ct-hero__detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {contactPage.email}
            </a>
          </div>

          <div className="ct-hero__socials">
            {SOCIALS.map(({ name, href, Icon }) => (
              <a key={name} className="ct-hero__social" href={href} target="_blank" rel="noreferrer" aria-label={name}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* ── Right column — contact form ── */}
        <div className="ct-hero__right">
          <div className="ct-form__card">
            <form onSubmit={onSubmit}>
              <div className="ct-form__row">
                <div className="ct-form__field">
                  <label className="ct-form__label" htmlFor="ct-name">{contactPage.form.nameLabel}</label>
                  <input className="ct-form__input" id="ct-name" type="text" name="Name" placeholder={contactPage.form.namePlaceholder} required />
                </div>
                <div className="ct-form__field">
                  <label className="ct-form__label" htmlFor="ct-email">{contactPage.form.emailLabel}</label>
                  <input className="ct-form__input" id="ct-email" type="email" name="Email" placeholder={contactPage.form.emailPlaceholder} required />
                </div>
              </div>

              <div className="ct-form__field">
                <label className="ct-form__label" htmlFor="ct-message">{contactPage.form.messageLabel}</label>
                <textarea className="ct-form__textarea" id="ct-message" name="Message" placeholder={contactPage.form.messagePlaceholder} rows={4} />
              </div>

              <label className="ct-form__consent">
                <input className="ct-form__checkbox" type="checkbox" name="Consent" required />
                <span className="ct-form__consent-text">{contactPage.form.consent}</span>
              </label>

              <button className="ct-form__submit" type="submit" disabled={state === 'sending'}>
                {label}
                <ArrowIcon />
              </button>

              {/* Honeypots */}
              <input type="text" name="website" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: 'absolute', transform: 'scale(0)' }} />
              <input type="text" name="company" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: 'absolute', transform: 'scale(0)' }} />

              {notice && (
                <p className={`ct-form__notice${state === 'error' ? ' ct-form__notice--error' : ''}`} role="status" aria-live="polite">
                  {notice}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div aria-label="Scroll Trigger" className="framer-c3vasr" data-framer-name="Scroll Triger" id="scroll-trigger" />
    </section>
  );
}
