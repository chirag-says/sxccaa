/**
 * Generated from the Framer site's server-rendered contact page by _extract/jsx.mjs.
 * Selector: #main > div > div:nth-child(3) --children=1:1
 *
 * Markup and class names are reproduced verbatim so the extracted Framer CSS
 * styles it exactly as the original.
 */

import { SiteForm, SubmitButton } from '@/components/ui/SiteForm';
import { SocialLinks } from './SocialLinks';
import { contactPage } from '@/data/pages/contact';

export function ContactBanner() {
  return (
    <>
      <section className={"framer-m2d69s"} data-framer-name={"Banner Section"}>
        <div className={"framer-1md3kse"} data-framer-name={"Container"}>
          <div className={"framer-18yu3z"} data-framer-name={"Content Wrapper"}>
            <div className={"ssr-variant hidden-5echh6"}>
              <div className={"framer-e0drya"} data-framer-appear-id={"e0drya"} data-framer-name={"Contact Info"} style={{ opacity: "0.001", transform: "translateX(-40px)" } as React.CSSProperties}>
                <div className={"framer-1r4j60"} data-framer-name={"Title text"}>
                  <div className={"framer-5kmsq2"} data-framer-name={"Title"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                    <h2 className={"framer-text framer-styles-preset-bm56uh"} data-styles-preset={"nqEg573cg"}>
                      {contactPage.title}
                    </h2>
                  </div>
                  <div className={"framer-p7unex"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                    <p className={"framer-text framer-styles-preset-1s2szaz"} data-styles-preset={"iF_e_kz5u"}>
                      {contactPage.intro}
                    </p>
                  </div>
                </div>
                <div className={"framer-nrpjqr"} data-framer-name={"Phone & Mail"}>
                  <div className={"ssr-variant hidden-19nkl0n"}>
                    <div className={"framer-txmvun"} data-framer-name={"Phone"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                      <p className={"framer-text framer-styles-preset-1o6hdtu"} data-styles-preset={"FeMIB3FmW"}>
                        <a className={"framer-text framer-styles-preset-1l1b9t0"} data-styles-preset={"Hc8nRCIht"} href={contactPage.phoneHref} target={"_blank"} rel={""}>
                          {contactPage.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className={"ssr-variant hidden-4ozm6q"}>
                    <div className={"framer-txmvun"} data-framer-name={"Phone"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                      <p className={"framer-text framer-styles-preset-1o6hdtu"} data-styles-preset={"FeMIB3FmW"}>
                        <a className={"framer-text framer-styles-preset-b4f9gh"} data-styles-preset={"AjgMvdFPo"} href={contactPage.phoneHref} target={"_blank"} rel={""}>
                          {contactPage.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className={"ssr-variant hidden-19nkl0n"}>
                    <div className={"framer-lfw7l7"} data-framer-name={"email"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                      <p className={"framer-text framer-styles-preset-1o6hdtu"} data-styles-preset={"FeMIB3FmW"}>
                        <a className={"framer-text framer-styles-preset-1l1b9t0"} data-styles-preset={"Hc8nRCIht"} href={contactPage.emailHref} target={"_blank"} rel={""}>
                          {contactPage.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className={"ssr-variant hidden-4ozm6q"}>
                    <div className={"framer-lfw7l7"} data-framer-name={"email"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                      <p className={"framer-text framer-styles-preset-1o6hdtu"} data-styles-preset={"FeMIB3FmW"}>
                        <a className={"framer-text framer-styles-preset-b4f9gh"} data-styles-preset={"AjgMvdFPo"} href={contactPage.emailHref} target={"_blank"} rel={""}>
                          {contactPage.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"framer-1fbw8u0"} data-framer-name={"Bottom Wrapper"}>
                  <div className={"framer-1am67ah"} data-framer-name={contactPage.followLabel} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                    <p className={"framer-text framer-styles-preset-1o91uer"} data-styles-preset={"mUynNyA4W"}>
                      {contactPage.followLabel}
                    </p>
                  </div>
                  <div className={"framer-ah26w4"} data-framer-name={"Socials"}>
<SocialLinks socials={contactPage.socials} split={true} />
</div>
                </div>
              </div>
            </div>
            <div className={"ssr-variant hidden-19nkl0n hidden-4ozm6q"}>
              <div className={"framer-e0drya"} data-framer-appear-id={"e0drya"} data-framer-name={"Contact Info"} style={{ opacity: "0.001", transform: "translateY(40px)" } as React.CSSProperties}>
                <div className={"framer-1r4j60"} data-framer-name={"Title text"}>
                  <div className={"framer-5kmsq2"} data-framer-name={"Title"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                    <h2 className={"framer-text framer-styles-preset-bm56uh"} data-styles-preset={"nqEg573cg"} style={{ '--framer-text-alignment': "left" } as React.CSSProperties}>
                      {contactPage.title}
                    </h2>
                  </div>
                  <div className={"framer-p7unex"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                    <p className={"framer-text framer-styles-preset-1s2szaz"} data-styles-preset={"iF_e_kz5u"}>
                      {contactPage.intro}
                    </p>
                  </div>
                </div>
                <div className={"framer-nrpjqr"} data-framer-name={"Phone & Mail"}>
                  <div className={"framer-txmvun"} data-framer-name={"Phone"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                    <p className={"framer-text framer-styles-preset-1o6hdtu"} data-styles-preset={"FeMIB3FmW"}>
                      <a className={"framer-text framer-styles-preset-b4f9gh"} data-styles-preset={"AjgMvdFPo"} href={contactPage.phoneHref} target={"_blank"} rel={""}>
                        {contactPage.phone}
                      </a>
                    </p>
                  </div>
                  <div className={"framer-lfw7l7"} data-framer-name={"email"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                    <p className={"framer-text framer-styles-preset-1o6hdtu"} data-styles-preset={"FeMIB3FmW"}>
                      <a className={"framer-text framer-styles-preset-b4f9gh"} data-styles-preset={"AjgMvdFPo"} href={contactPage.emailHref} target={"_blank"} rel={""}>
                        {contactPage.email}
                      </a>
                    </p>
                  </div>
                </div>
                <div className={"framer-1fbw8u0"} data-framer-name={"Bottom Wrapper"}>
                  <div className={"framer-1am67ah"} data-framer-name={contactPage.followLabel} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                    <p className={"framer-text framer-styles-preset-1o91uer"} data-styles-preset={"mUynNyA4W"}>
                      {contactPage.followLabel}
                    </p>
                  </div>
                  <div className={"framer-ah26w4"} data-framer-name={"Socials"}>
<SocialLinks socials={contactPage.socials} split={false} />
</div>
                </div>
              </div>
            </div>
            <div className={"ssr-variant hidden-5echh6"}>
              <div className={"framer-sohjjt"} data-framer-appear-id={"sohjjt"} data-framer-name={"Contact Form"} style={{ opacity: "0.001", transform: "translateX(40px)" } as React.CSSProperties}>
                <SiteForm className="framer-1o1b9ue" action={contactPage.form.action}>
                  <label className={"framer-13fm82l"} data-framer-name={"Input Block"}>
                    <div className={"framer-1wv47pz"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                      <p className={"framer-text framer-styles-preset-11yinn6"} data-styles-preset={"qjDP8QLu4"}>
                        {contactPage.form.nameLabel}
                      </p>
                    </div>
                    <div className={"framer-form-text-input framer-form-input-wrapper framer-r1xp5z framer-form-text-input-type"}>
                      <input type={"text"} required={true} name={"Name"} placeholder={contactPage.form.namePlaceholder} className={"framer-form-input framer-form-input-empty"} defaultValue={""} />
                    </div>
                  </label>
                  <label className={"framer-1vzon4h"} data-framer-name={"Input Block"}>
                    <div className={"framer-glftiq"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                      <p className={"framer-text framer-styles-preset-11yinn6"} data-styles-preset={"qjDP8QLu4"}>
                        {contactPage.form.emailLabel}
                      </p>
                    </div>
                    <div className={"framer-form-text-input framer-form-input-wrapper framer-1bhlt8g"}>
                      <input type={"email"} required={true} name={"Email"} placeholder={contactPage.form.emailPlaceholder} className={"framer-form-input framer-form-input-empty"} defaultValue={""} />
                    </div>
                  </label>
                  <label className={"framer-9ah8dc"} data-framer-name={"Input Block"}>
                    <div className={"framer-h2se9w"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                      <p className={"framer-text framer-styles-preset-11yinn6"} data-styles-preset={"qjDP8QLu4"}>
                        {contactPage.form.messageLabel}
                      </p>
                    </div>
                    <div className={"framer-form-text-input framer-form-input-wrapper framer-1q3fhw8 framer-form-textarea-input-type"}>
                      <textarea name={"Message"} placeholder={contactPage.form.messagePlaceholder} className={"framer-form-input"} />
                    </div>
                  </label>
                  <label className={"framer-1yijxfq"} data-framer-name={"Terms & Conditions"}>
                    <input className={"framer-form-boolean-input framer-1n6923x"} type={"checkbox"} name={"Consent"} required={true} />
                    <div className={"framer-1kdgpb6"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                      <p className={"framer-text framer-styles-preset-1dfqlr0"} data-styles-preset={"r3nvaFHNq"}>
                        {contactPage.form.consent}
                      </p>
                    </div>
                  </label>
                  <div className={"ssr-variant hidden-19nkl0n"}>
                    <SubmitButton labels={contactPage.form} variant="default" containerClass="framer-szbiu3-container" />
                  </div>
                  <div className={"ssr-variant hidden-4ozm6q"}>
                    <SubmitButton labels={contactPage.form} variant="phone" containerClass="framer-szbiu3-container" />
                  </div>
                  <input type={"text"} name={"website"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"company"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"message"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"subject"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"title"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"description"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"feedback"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"notes"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"details"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"remarks"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"comments"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                </SiteForm>
              </div>
            </div>
            <div className={"ssr-variant hidden-19nkl0n hidden-4ozm6q"}>
              <div className={"framer-sohjjt"} data-framer-appear-id={"sohjjt"} data-framer-name={"Contact Form"} style={{ opacity: "0.001", transform: "translateY(40px)" } as React.CSSProperties}>
                <SiteForm className="framer-1o1b9ue" action={contactPage.form.action}>
                  <label className={"framer-13fm82l"} data-framer-name={"Input Block"}>
                    <div className={"framer-1wv47pz"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                      <p className={"framer-text framer-styles-preset-11yinn6"} data-styles-preset={"qjDP8QLu4"}>
                        {contactPage.form.nameLabel}
                      </p>
                    </div>
                    <div className={"framer-form-text-input framer-form-input-wrapper framer-r1xp5z framer-form-text-input-type"}>
                      <input type={"text"} required={true} name={"Name"} placeholder={contactPage.form.namePlaceholder} className={"framer-form-input framer-form-input-empty"} defaultValue={""} />
                    </div>
                  </label>
                  <label className={"framer-1vzon4h"} data-framer-name={"Input Block"}>
                    <div className={"framer-glftiq"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                      <p className={"framer-text framer-styles-preset-11yinn6"} data-styles-preset={"qjDP8QLu4"}>
                        {contactPage.form.emailLabel}
                      </p>
                    </div>
                    <div className={"framer-form-text-input framer-form-input-wrapper framer-1bhlt8g"}>
                      <input type={"email"} required={true} name={"Email"} placeholder={contactPage.form.emailPlaceholder} className={"framer-form-input framer-form-input-empty"} defaultValue={""} />
                    </div>
                  </label>
                  <label className={"framer-9ah8dc"} data-framer-name={"Input Block"}>
                    <div className={"framer-h2se9w"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                      <p className={"framer-text framer-styles-preset-11yinn6"} data-styles-preset={"qjDP8QLu4"}>
                        {contactPage.form.messageLabel}
                      </p>
                    </div>
                    <div className={"framer-form-text-input framer-form-input-wrapper framer-1q3fhw8 framer-form-textarea-input-type"}>
                      <textarea name={"Message"} placeholder={contactPage.form.messagePlaceholder} className={"framer-form-input"} />
                    </div>
                  </label>
                  <label className={"framer-1yijxfq"} data-framer-name={"Terms & Conditions"}>
                    <input className={"framer-form-boolean-input framer-1n6923x"} type={"checkbox"} name={"Consent"} required={true} />
                    <div className={"framer-1kdgpb6"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ transform: "none" } as React.CSSProperties}>
                      <p className={"framer-text framer-styles-preset-1dfqlr0"} data-styles-preset={"r3nvaFHNq"}>
                        {contactPage.form.consent}
                      </p>
                    </div>
                  </label>
                  <SubmitButton labels={contactPage.form} variant="phone" containerClass="framer-szbiu3-container" />
                  <input type={"text"} name={"website"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"company"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"message"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"subject"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"title"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"description"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"feedback"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"notes"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"details"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"remarks"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                  <input type={"text"} name={"comments"} tabIndex={-1} autoComplete={"one-time-code"} aria-hidden={"true"} style={{ position: "absolute", transform: "scale(0)" } as React.CSSProperties} data-1p-ignore={"true"} data-lpignore={"true"} data-form-type={"other"} data-bwignore={"true"} defaultValue={""} />
                </SiteForm>
              </div>
            </div>
          </div>
        </div>
        <div aria-label={"Scroll Trigger"} className={"framer-c3vasr"} data-framer-name={"Scroll Triger"} id={"scroll-trigger"} />
      </section>
    </>
  );
}
