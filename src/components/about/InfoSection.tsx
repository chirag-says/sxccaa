/**
 * Generated from the Framer site's server-rendered about page by _extract/jsx.mjs.
 * Selector: #main > div > div:nth-child(3) > .framer-1dyyrpu --children=2:2
 *
 * Markup and class names are reproduced verbatim so the extracted Framer CSS
 * styles it exactly as the original.
 */

import { PartnerTicker } from './PartnerTicker';
import { aboutCard, partnerLogos, statLines } from '@/data/pages/about';
import { StatLine } from './StatLine';

export function InfoSection() {
  return (
    <>
      <section className={"framer-z9n5fr"} data-framer-name={"Info Section"} id={"info-section"}>
        <div className={"framer-16xgyu9"} data-framer-name={"Container"}>
          <div className={"framer-1uwh6jg"} data-framer-name={"Info Content Wrapper"}>
            <div className={"framer-m1g674"} data-framer-name={"Fact Card"}>
              <div className={"framer-1o9s1hq"} data-framer-name={"Image Wrap"}>
                <div className={"ssr-variant hidden-1ppn25y"}>
                  <div className={"framer-1ye3mgd"} data-framer-name={"Image"} style={{ willChange: "transform", opacity: "0", transform: "scale(1.1)" } as React.CSSProperties}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                      <img decoding={"async"} width={"2320"} height={"2400"} sizes={"(min-width: 1200px) min(min(min(100vw, 1800px) - 40px, 1296px) * 0.4475, 580px), (min-width: 810px) and (max-width: 1199.98px) min(min(min(100vw, 990px) - 40px, 1296px) * 0.4792, 580px), (max-width: 809.98px) min(min(min(100vw, 620px) - 40px, 1296px), 580px)"} srcSet={"/images/about/facts-image-1024.png 989w, /images/about/facts-image-2048.png 1979w, /images/about/facts-image.png 2320w"} src={"/images/about/facts-image.png"} alt={"User Image"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" } as React.CSSProperties} />
                    </div>
                  </div>
                </div>
                <div className={"ssr-variant hidden-r0yflc hidden-4h95au"}>
                  <div className={"framer-1ye3mgd"} data-framer-name={"Image"} style={{ willChange: "transform", opacity: "0", transform: "translateY(40px) scale(1.1)" } as React.CSSProperties}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                      <img decoding={"async"} width={"2320"} height={"2400"} sizes={"(min-width: 1200px) min(min(min(100vw, 1800px) - 40px, 1296px) * 0.4475, 580px), (min-width: 810px) and (max-width: 1199.98px) min(min(min(100vw, 990px) - 40px, 1296px) * 0.4792, 580px), (max-width: 809.98px) min(min(min(100vw, 620px) - 40px, 1296px), 580px)"} srcSet={"/images/about/facts-image-1024.png 989w, /images/about/facts-image-2048.png 1979w, /images/about/facts-image.png 2320w"} src={"/images/about/facts-image.png"} alt={"User Image"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center top", objectFit: "cover" } as React.CSSProperties} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"framer-2cxw8f"} data-framer-name={"Facts"}>
                <div className={"ssr-variant hidden-1ppn25y"}>
                  <StatLine stat={statLines[0]} index={0} variant="desktop" containerClass="framer-1bpv1fj-container" />
                </div>
                <div className={"ssr-variant hidden-r0yflc hidden-4h95au"}>
                  <StatLine stat={statLines[0]} index={0} variant="tablet" containerClass="framer-1bpv1fj-container" />
                </div>
                <div className={"ssr-variant hidden-1ppn25y"}>
                  <StatLine stat={statLines[1]} index={1} variant="desktop" containerClass="framer-1r3i20p-container" />
                </div>
                <div className={"ssr-variant hidden-r0yflc hidden-4h95au"}>
                  <StatLine stat={statLines[1]} index={1} variant="tablet" containerClass="framer-1r3i20p-container" />
                </div>
              </div>
            </div>
            <div className={"framer-1otqp0t"} data-framer-name={"About Card"}>
              <div className={"framer-ae78ne"} data-framer-name={"Text Block"}>
                <div className={"framer-827vqi"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ willChange: "transform", opacity: "0", transform: "none" } as React.CSSProperties}>
                  <p className={"framer-text framer-styles-preset-1o91uer"} data-styles-preset={"mUynNyA4W"} style={{ '--framer-text-color': "var(--token-5cace45c-5aeb-4596-8405-46748e8b644b, rgb(255, 255, 255))" } as React.CSSProperties}>
                    {aboutCard.eyebrow}
                  </p>
                </div>
                <div className={"framer-pu95g6"} data-framer-name={"Title"} data-framer-component-type={"RichTextContainer"} style={{ willChange: "transform", opacity: "0", transform: "none" } as React.CSSProperties}>
                  <h2 className={"framer-text framer-styles-preset-11yr44y"} data-styles-preset={"FFs_zSJqj"} style={{ '--framer-text-color': "var(--token-5cace45c-5aeb-4596-8405-46748e8b644b, rgb(255, 255, 255))" } as React.CSSProperties}>
                    {aboutCard.title}
                  </h2>
                </div>
                <div className={"framer-1pscora"} data-framer-name={"Paragraph"} data-framer-component-type={"RichTextContainer"} style={{ willChange: "transform", opacity: "0", transform: "none" } as React.CSSProperties}>
                  <p className={"framer-text framer-styles-preset-1s2szaz"} data-styles-preset={"iF_e_kz5u"} style={{ '--framer-text-color': "var(--token-5cace45c-5aeb-4596-8405-46748e8b644b, rgb(255, 255, 255))" } as React.CSSProperties}>
                    {aboutCard.text}
                  </p>
                </div>
              </div>
              <div className={"framer-twn53m"} data-framer-name={"Image Wrap"}>
                <div className={"ssr-variant hidden-1ppn25y"}>
                  <div className={"framer-19s4tb"} data-framer-name={"Image"} style={{ willChange: "transform", opacity: "0", transform: "scale(1.1)" } as React.CSSProperties}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                      <img decoding={"async"} width={"5616"} height={"3744"} sizes={"(min-width: 1200px) min(min(min(100vw, 1800px) - 40px, 1296px) * 0.4475, 580px), (min-width: 810px) and (max-width: 1199.98px) min(min(min(100vw, 990px) - 40px, 1296px) * 0.4753, 580px), (max-width: 809.98px) min(min(min(100vw, 620px) - 40px, 1296px), 580px)"} srcSet={"/images/about/since-1960-image-512.jpg 512w, /images/about/since-1960-image-1024.jpg 1024w, /images/about/since-1960-image-2048.jpg 2048w, /images/about/since-1960-image-4096.jpg 4096w, /images/about/since-1960-image.jpg 5616w"} src={"/images/about/since-1960-image.jpg"} alt={"User Image"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" } as React.CSSProperties} />
                    </div>
                    <div className={"framer-vdgpqe-container"} style={{ willChange: "transform", opacity: "0", transform: "none" } as React.CSSProperties}>
                      <div className={"framer-61iNq framer-FuTU5 framer-ShxJM framer-gjjc3n framer-v-gjjc3n"} data-border={"true"} data-framer-name={"Desktop"} style={{ '--border-bottom-width': "1px", '--border-color': "var(--token-7d23561c-8e41-40bd-aa1c-c6efa74680d3, rgba(255, 255, 255, 0.3))", '--border-left-width': "1px", '--border-right-width': "1px", '--border-style': "solid", '--border-top-width': "1px", backdropFilter: "blur(50px)", backgroundColor: "rgba(255, 255, 255, 0.02)", WebkitBackdropFilter: "blur(50px)", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" } as React.CSSProperties}>
                        <div className={"framer-1sntjfd-container"} data-framer-name={"Agents"}>
                          <div className={"framer-TMOkX framer-6fporj framer-v-6fporj"} data-framer-name={"Desktop"}>
                            <div className={"framer-1w3ebrk"} data-framer-name={"Agent Avatar Wrap"}>
                              <div className={"framer-b4aqkd"} data-framer-name={"Agent Avatar"} style={{ borderBottomLeftRadius: "999px", borderBottomRightRadius: "999px", borderTopLeftRadius: "999px", borderTopRightRadius: "999px", transform: "translate(-50%, -50%)" } as React.CSSProperties}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                                  <img decoding={"async"} width={"3648"} height={"3648"} sizes={"(min-width: 1200px) 50px, (min-width: 810px) and (max-width: 1199.98px) 50px, (max-width: 809.98px) 40px"} srcSet={"/images/about/reviewer-1-512.jpg 512w, /images/about/reviewer-1-1024.jpg 1024w, /images/about/reviewer-1-2048.jpg 2048w, /images/about/reviewer-1.jpg 3648w"} src={"/images/about/reviewer-1.jpg"} alt={"User Image"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" } as React.CSSProperties} />
                                </div>
                              </div>
                            </div>
                            <div className={"framer-5cacks"} data-framer-name={"Agent Avatar Wrap"}>
                              <div className={"framer-1v6ls93"} data-framer-name={"Agent Avatar"} style={{ borderBottomLeftRadius: "999px", borderBottomRightRadius: "999px", borderTopLeftRadius: "999px", borderTopRightRadius: "999px", transform: "translate(-50%, -50%)" } as React.CSSProperties}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                                  <img decoding={"async"} width={"3315"} height={"4144"} sizes={"(min-width: 1200px) 50px, (min-width: 810px) and (max-width: 1199.98px) 50px, (max-width: 809.98px) 40px"} srcSet={"/images/about/reviewer-2-1024.jpg 819w, /images/about/reviewer-2-2048.jpg 1638w, /images/about/reviewer-2-4096.jpg 3276w, /images/about/reviewer-2.jpg 3315w"} src={"/images/about/reviewer-2.jpg"} alt={"User Image"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" } as React.CSSProperties} />
                                </div>
                              </div>
                            </div>
                            <div className={"framer-n8uikm"} data-framer-name={"Agent Avatar Wrap"}>
                              <div className={"framer-13vzyh0"} data-framer-name={"Agent Avatar"} style={{ borderBottomLeftRadius: "999px", borderBottomRightRadius: "999px", borderTopLeftRadius: "999px", borderTopRightRadius: "999px", transform: "translate(-50%, -50%)" } as React.CSSProperties}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                                  <img decoding={"async"} width={"2634"} height={"3292"} sizes={"(min-width: 1200px) 50px, (min-width: 810px) and (max-width: 1199.98px) 50px, (max-width: 809.98px) 40px"} srcSet={"/images/about/reviewer-3-1024.jpg 819w, /images/about/reviewer-3-2048.jpg 1638w, /images/about/reviewer-3.jpg 2634w"} src={"/images/about/reviewer-3.jpg"} alt={"User Image"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" } as React.CSSProperties} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"framer-17zmoga"} data-framer-name={"Text Wrapper"}>
                          <div className={"framer-1iiofx3"} data-framer-name={"Number"} data-framer-component-type={"RichTextContainer"} style={{ '--extracted-r6o4lv': "var(--token-5cace45c-5aeb-4596-8405-46748e8b644b, rgb(255, 255, 255))", '--framer-link-text-color': "rgb(0, 153, 255)", '--framer-link-text-decoration': "underline", transform: "none" } as React.CSSProperties}>
                            <p className={"framer-text framer-styles-preset-1x4tk8l"} data-styles-preset={"pDck0CifI"} style={{ '--framer-text-color': "var(--extracted-r6o4lv, var(--token-5cace45c-5aeb-4596-8405-46748e8b644b, rgb(255, 255, 255)))" } as React.CSSProperties}>
                              {aboutCard.reviewsCount}
                            </p>
                          </div>
                          <div className={"framer-1vd5znj"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ '--extracted-r6o4lv': "var(--token-204f7229-3b68-4e56-a616-0e681fbd01e7, rgba(255, 255, 255, 0.75))", '--framer-link-text-color': "rgb(0, 153, 255)", '--framer-link-text-decoration': "underline", transform: "none" } as React.CSSProperties}>
                            <p className={"framer-text framer-styles-preset-1dfqlr0"} data-styles-preset={"r3nvaFHNq"} style={{ '--framer-text-color': "var(--extracted-r6o4lv, var(--token-204f7229-3b68-4e56-a616-0e681fbd01e7, rgba(255, 255, 255, 0.75)))" } as React.CSSProperties}>
                              {aboutCard.reviewsLabel}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"ssr-variant hidden-r0yflc hidden-4h95au"}>
                  <div className={"framer-19s4tb"} data-framer-name={"Image"} style={{ willChange: "transform", opacity: "0", transform: "scale(1.1)" } as React.CSSProperties}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                      <img decoding={"async"} width={"5616"} height={"3744"} sizes={"(min-width: 1200px) min(min(min(100vw, 1800px) - 40px, 1296px) * 0.4475, 580px), (min-width: 810px) and (max-width: 1199.98px) min(min(min(100vw, 990px) - 40px, 1296px) * 0.4753, 580px), (max-width: 809.98px) min(min(min(100vw, 620px) - 40px, 1296px), 580px)"} srcSet={"/images/about/since-1960-image-512.jpg 512w, /images/about/since-1960-image-1024.jpg 1024w, /images/about/since-1960-image-2048.jpg 2048w, /images/about/since-1960-image-4096.jpg 4096w, /images/about/since-1960-image.jpg 5616w"} src={"/images/about/since-1960-image.jpg"} alt={"User Image"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center top", objectFit: "cover" } as React.CSSProperties} />
                    </div>
                    <div className={"framer-vdgpqe-container"} style={{ willChange: "transform", opacity: "0", transform: "none" } as React.CSSProperties}>
                      <div className={"framer-61iNq framer-FuTU5 framer-ShxJM framer-gjjc3n framer-v-1x4p64k"} data-border={"true"} data-framer-name={"Small"} style={{ '--border-bottom-width': "1px", '--border-color': "var(--token-7d23561c-8e41-40bd-aa1c-c6efa74680d3, rgba(255, 255, 255, 0.3))", '--border-left-width': "1px", '--border-right-width': "1px", '--border-style': "solid", '--border-top-width': "1px", backdropFilter: "blur(50px)", backgroundColor: "rgba(255, 255, 255, 0.02)", WebkitBackdropFilter: "blur(50px)", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" } as React.CSSProperties}>
                        <div className={"framer-1sntjfd-container"} data-framer-name={"Agents"}>
                          <div className={"framer-TMOkX framer-6fporj framer-v-70dm96"} data-framer-name={"Phone"}>
                            <div className={"framer-1w3ebrk"} data-framer-name={"Agent Avatar Wrap"}>
                              <div className={"framer-b4aqkd"} data-framer-name={"Agent Avatar"} style={{ borderBottomLeftRadius: "999px", borderBottomRightRadius: "999px", borderTopLeftRadius: "999px", borderTopRightRadius: "999px", transform: "translate(-50%, -50%)" } as React.CSSProperties}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                                  <img decoding={"async"} width={"3648"} height={"3648"} sizes={"(min-width: 1200px) 50px, (min-width: 810px) and (max-width: 1199.98px) 50px, (max-width: 809.98px) 40px"} srcSet={"/images/about/reviewer-1-512.jpg 512w, /images/about/reviewer-1-1024.jpg 1024w, /images/about/reviewer-1-2048.jpg 2048w, /images/about/reviewer-1.jpg 3648w"} src={"/images/about/reviewer-1.jpg"} alt={"User Image"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" } as React.CSSProperties} />
                                </div>
                              </div>
                            </div>
                            <div className={"framer-5cacks"} data-framer-name={"Agent Avatar Wrap"}>
                              <div className={"framer-1v6ls93"} data-framer-name={"Agent Avatar"} style={{ borderBottomLeftRadius: "999px", borderBottomRightRadius: "999px", borderTopLeftRadius: "999px", borderTopRightRadius: "999px", transform: "translate(-50%, -50%)" } as React.CSSProperties}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                                  <img decoding={"async"} width={"3315"} height={"4144"} sizes={"(min-width: 1200px) 50px, (min-width: 810px) and (max-width: 1199.98px) 50px, (max-width: 809.98px) 40px"} srcSet={"/images/about/reviewer-2-1024.jpg 819w, /images/about/reviewer-2-2048.jpg 1638w, /images/about/reviewer-2-4096.jpg 3276w, /images/about/reviewer-2.jpg 3315w"} src={"/images/about/reviewer-2.jpg"} alt={"User Image"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" } as React.CSSProperties} />
                                </div>
                              </div>
                            </div>
                            <div className={"framer-n8uikm"} data-framer-name={"Agent Avatar Wrap"}>
                              <div className={"framer-13vzyh0"} data-framer-name={"Agent Avatar"} style={{ borderBottomLeftRadius: "999px", borderBottomRightRadius: "999px", borderTopLeftRadius: "999px", borderTopRightRadius: "999px", transform: "translate(-50%, -50%)" } as React.CSSProperties}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                                  <img decoding={"async"} width={"2634"} height={"3292"} sizes={"(min-width: 1200px) 50px, (min-width: 810px) and (max-width: 1199.98px) 50px, (max-width: 809.98px) 40px"} srcSet={"/images/about/reviewer-3-1024.jpg 819w, /images/about/reviewer-3-2048.jpg 1638w, /images/about/reviewer-3.jpg 2634w"} src={"/images/about/reviewer-3.jpg"} alt={"User Image"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" } as React.CSSProperties} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"framer-17zmoga"} data-framer-name={"Text Wrapper"}>
                          <div className={"framer-1iiofx3"} data-framer-name={"Number"} data-framer-component-type={"RichTextContainer"} style={{ '--extracted-r6o4lv': "var(--token-5cace45c-5aeb-4596-8405-46748e8b644b, rgb(255, 255, 255))", '--framer-link-text-color': "rgb(0, 153, 255)", '--framer-link-text-decoration': "underline", transform: "none" } as React.CSSProperties}>
                            <p className={"framer-text framer-styles-preset-1x4tk8l"} data-styles-preset={"pDck0CifI"} style={{ '--framer-text-color': "var(--extracted-r6o4lv, var(--token-5cace45c-5aeb-4596-8405-46748e8b644b, rgb(255, 255, 255)))" } as React.CSSProperties}>
                              {aboutCard.reviewsCount}
                            </p>
                          </div>
                          <div className={"framer-1vd5znj"} data-framer-name={"Text"} data-framer-component-type={"RichTextContainer"} style={{ '--extracted-r6o4lv': "var(--token-204f7229-3b68-4e56-a616-0e681fbd01e7, rgba(255, 255, 255, 0.75))", '--framer-link-text-color': "rgb(0, 153, 255)", '--framer-link-text-decoration': "underline", transform: "none" } as React.CSSProperties}>
                            <p className={"framer-text framer-styles-preset-1dfqlr0"} data-styles-preset={"r3nvaFHNq"} style={{ '--framer-text-color': "var(--extracted-r6o4lv, var(--token-204f7229-3b68-4e56-a616-0e681fbd01e7, rgba(255, 255, 255, 0.75)))" } as React.CSSProperties}>
                              {aboutCard.reviewsLabel}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"ssr-variant hidden-4h95au hidden-1ppn25y"}>
          <div className={"framer-17l1m40-container"} data-framer-name={"Ticker"}>
            <div className={"framer-maDoQ framer-1ofkmq9 framer-v-1ofkmq9"} data-framer-name={"Defualt"} style={{ width: "100%" } as React.CSSProperties}>
              <div className={"framer-uukqrn-container"}>
<PartnerTicker logos={partnerLogos} />
</div>
            </div>
          </div>
        </div>
        <div className={"ssr-variant hidden-r0yflc hidden-1ppn25y"}>
          <div className={"framer-17l1m40-container"} data-framer-name={"Ticker"}>
            <div className={"framer-maDoQ framer-1ofkmq9 framer-v-1b0t1uz"} data-framer-name={"Small"} style={{ width: "100%" } as React.CSSProperties}>
              <div className={"framer-tx7ooz-container"} data-framer-name={"Small"}>
                <section style={{ display: "flex", width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", placeItems: "center", margin: "0", padding: "0px", listStyleType: "none", textIndent: "none", opacity: "0", WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)", maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)", overflow: "hidden" } as React.CSSProperties}>
                  <ul style={{ display: "flex", width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", placeItems: "center", margin: "0", padding: "0", listStyleType: "none", textIndent: "none", gap: "40px", position: "relative", flexDirection: "row", willChange: "auto", transform: "translateX(0px)" } as React.CSSProperties}>
                    <li aria-hidden={"true"}>
                      <div className={"framer-1sc5fsm"} data-framer-name={"Small Logo 1"} style={{ flexShrink: "0" } as React.CSSProperties}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                          <img decoding={"async"} width={"150"} height={"30"} src={"/svg/about/partner-logo-1.svg"} alt={"Company Logo"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" } as React.CSSProperties} />
                        </div>
                      </div>
                    </li>
                    <li aria-hidden={"true"}>
                      <div className={"framer-o5ssve"} data-framer-name={"Small Logo 2"} style={{ flexShrink: "0" } as React.CSSProperties}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                          <img decoding={"async"} width={"78"} height={"30"} src={"/svg/about/partner-logo-2.svg"} alt={"Company Logo"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" } as React.CSSProperties} />
                        </div>
                      </div>
                    </li>
                    <li aria-hidden={"true"}>
                      <div className={"framer-qavawl"} data-framer-name={"Small Logo 3"} style={{ flexShrink: "0" } as React.CSSProperties}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                          <img decoding={"async"} width={"146"} height={"28"} src={"/svg/about/partner-logo-3.svg"} alt={"Company Logo"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" } as React.CSSProperties} />
                        </div>
                      </div>
                    </li>
                    <li aria-hidden={"true"}>
                      <div className={"framer-99ipwq"} data-framer-name={"Small Logo 4"} style={{ flexShrink: "0" } as React.CSSProperties}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                          <img decoding={"async"} width={"170"} height={"40"} src={"/svg/about/partner-logo-4.svg"} alt={"Company Logo"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" } as React.CSSProperties} />
                        </div>
                      </div>
                    </li>
                    <li aria-hidden={"true"}>
                      <div className={"framer-16q6oz8"} data-framer-name={"Small Logo 5"} style={{ flexShrink: "0" } as React.CSSProperties}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                          <img decoding={"async"} width={"65"} height={"52"} src={"/svg/about/partner-logo-5.svg"} alt={"Company Logo"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" } as React.CSSProperties} />
                        </div>
                      </div>
                    </li>
                    <li aria-hidden={"true"}>
                      <div className={"framer-hyh06x"} data-framer-name={"Small Logo 6"} style={{ flexShrink: "0" } as React.CSSProperties}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                          <img decoding={"async"} width={"170"} height={"32"} src={"/svg/about/partner-logo-6.svg"} alt={"Company Logo"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" } as React.CSSProperties} />
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className={"ssr-variant hidden-r0yflc hidden-4h95au"}>
          <div className={"framer-17l1m40-container"} data-framer-name={"Ticker"}>
            <div className={"framer-maDoQ framer-1ofkmq9 framer-v-1b0t1uz"} data-framer-name={"Small"} style={{ width: "100%" } as React.CSSProperties}>
              <div className={"framer-tx7ooz-container"} data-framer-name={"Small"}>
                <section style={{ display: "flex", width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", placeItems: "center", margin: "0", padding: "0px", listStyleType: "none", textIndent: "none", opacity: "0", WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)", maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)", overflow: "hidden" } as React.CSSProperties}>
                  <ul style={{ display: "flex", width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", placeItems: "center", margin: "0", padding: "0", listStyleType: "none", textIndent: "none", gap: "24px", position: "relative", flexDirection: "row", willChange: "auto", transform: "translateX(0px)" } as React.CSSProperties}>
                    <li aria-hidden={"true"}>
                      <div className={"framer-1sc5fsm"} data-framer-name={"Small Logo 1"} style={{ flexShrink: "0" } as React.CSSProperties}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                          <img decoding={"async"} width={"150"} height={"30"} src={"/svg/about/partner-logo-1.svg"} alt={"Company Logo"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" } as React.CSSProperties} />
                        </div>
                      </div>
                    </li>
                    <li aria-hidden={"true"}>
                      <div className={"framer-o5ssve"} data-framer-name={"Small Logo 2"} style={{ flexShrink: "0" } as React.CSSProperties}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                          <img decoding={"async"} width={"78"} height={"30"} src={"/svg/about/partner-logo-2.svg"} alt={"Company Logo"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" } as React.CSSProperties} />
                        </div>
                      </div>
                    </li>
                    <li aria-hidden={"true"}>
                      <div className={"framer-qavawl"} data-framer-name={"Small Logo 3"} style={{ flexShrink: "0" } as React.CSSProperties}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                          <img decoding={"async"} width={"146"} height={"28"} src={"/svg/about/partner-logo-3.svg"} alt={"Company Logo"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" } as React.CSSProperties} />
                        </div>
                      </div>
                    </li>
                    <li aria-hidden={"true"}>
                      <div className={"framer-99ipwq"} data-framer-name={"Small Logo 4"} style={{ flexShrink: "0" } as React.CSSProperties}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                          <img decoding={"async"} width={"170"} height={"40"} src={"/svg/about/partner-logo-4.svg"} alt={"Company Logo"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" } as React.CSSProperties} />
                        </div>
                      </div>
                    </li>
                    <li aria-hidden={"true"}>
                      <div className={"framer-16q6oz8"} data-framer-name={"Small Logo 5"} style={{ flexShrink: "0" } as React.CSSProperties}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                          <img decoding={"async"} width={"65"} height={"52"} src={"/svg/about/partner-logo-5.svg"} alt={"Company Logo"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" } as React.CSSProperties} />
                        </div>
                      </div>
                    </li>
                    <li aria-hidden={"true"}>
                      <div className={"framer-hyh06x"} data-framer-name={"Small Logo 6"} style={{ flexShrink: "0" } as React.CSSProperties}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties} data-framer-background-image-wrapper={"true"}>
                          <img decoding={"async"} width={"170"} height={"32"} src={"/svg/about/partner-logo-6.svg"} alt={"Company Logo"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" } as React.CSSProperties} />
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
