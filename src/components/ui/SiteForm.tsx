'use client';

/**
 * The site's forms (contact page and the "Get in touch" CTA). Framer posted
 * these to its own form service, which a self-hosted rebuild does not have:
 * give `action` an endpoint that accepts a multipart POST and the form sends
 * there; without one, submitting only validates and shows the sent state so
 * the UI can be exercised.
 *
 * `SubmitButton` renders Framer's submit pill (`framer-LUWvx`) and reads the
 * form state from context to swap its label while sending and after.
 */

import { createContext, useContext, useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import { tokens } from '@/lib/tokens';

export type FormState = 'idle' | 'sending' | 'sent' | 'error';

const FormStateContext = createContext<FormState>('idle');

export interface FormLabels {
  submit: string;
  sending: string;
  sent: string;
  error: string;
}

export function SiteForm({ className, action, children }: { className: string; action?: string; children: ReactNode }) {
  const [state, setState] = useState<FormState>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!action) {
      setState('sent');
      form.reset();
      return;
    }
    setState('sending');
    try {
      const response = await fetch(action, { method: 'POST', body: new FormData(form) });
      if (!response.ok) throw new Error(`${response.status}`);
      setState('sent');
      form.reset();
    } catch {
      setState('error');
    }
  }

  return (
    <FormStateContext.Provider value={state}>
      <form className={className} data-state={state} onSubmit={onSubmit}>
        {children}
      </form>
    </FormStateContext.Provider>
  );
}

const BUTTON_VARIANT = {
  default: { cls: 'framer-v-hq3rky', name: 'Default', padding: '17px 32px 17px 32px', focusable: true },
  phone: { cls: 'framer-v-1xh1r0', name: 'Phone', padding: '12.5px 24px 12.5px 24px', focusable: false },
} as const;

const TEXT = { '--extracted-r6o4lv': tokens.white, '--framer-paragraph-spacing': '0px', transform: 'none' } as CSSProperties;
const P = { '--framer-text-color': `var(--extracted-r6o4lv, ${tokens.white})` } as CSSProperties;

export function SubmitButton({ labels, variant, containerClass }: { labels: FormLabels; variant: keyof typeof BUTTON_VARIANT; containerClass: string }) {
  const state = useContext(FormStateContext);
  const v = BUTTON_VARIANT[variant];
  const label = state === 'idle' ? labels.submit : labels[state];
  return (
    <div className={containerClass}>
      <button
        type="submit"
        className={`framer-LUWvx framer-yylGA framer-hq3rky ${v.cls}`}
        data-framer-name={v.name}
        data-reset="button"
        tabIndex={v.focusable ? 0 : undefined}
        disabled={state === 'sending'}
        style={{ '--575tb': v.padding, backgroundColor: tokens.ink, width: '100%', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px', opacity: 1 } as CSSProperties}
      >
        <div className="framer-1k8ult7" data-framer-name="Text Wrapper" style={{ opacity: 1 }}>
          <div className="framer-mzvlr6" data-framer-name="Default Text" data-framer-component-type="RichTextContainer" style={TEXT}>
            <p className="framer-text framer-styles-preset-c29y5p" data-styles-preset="MIzrA6q79" style={P}>
              {label}
            </p>
          </div>
          <div className="framer-rkzbrv" data-framer-name="Hover Text" data-framer-component-type="RichTextContainer" style={TEXT}>
            <p className="framer-text framer-styles-preset-c29y5p" data-styles-preset="MIzrA6q79" style={P}>
              {label}
            </p>
          </div>
        </div>
        <div className="framer-1lp5hs3" data-framer-name="Arrow Wrap" style={{ opacity: 1 }}>
          <div data-framer-name="Defualt Icon" className="framer-utBpC framer-w7iu64" style={{ '--imrg1o': tokens.white } as CSSProperties} />
          <div data-framer-name="Hover Icon" className="framer-utBpC framer-824uir" style={{ '--imrg1o': tokens.white, transform: 'translate(-50%, -50%)' } as CSSProperties} />
        </div>
      </button>
    </div>
  );
}
