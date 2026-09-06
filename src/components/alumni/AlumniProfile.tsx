/**
 * A public alumni profile (SOW D-05, D-06, D-07).
 *
 * It shows only the fields §4.1 marks as public. Email address, phone number,
 * postal address, date of birth and roll number are not passed to this
 * component at all — they are not in the public data file — so there is no way
 * for them to leak into the page. Reaching the alumnus goes through the
 * connection request instead, and that button only appears where the record's
 * `openToConnect` flag is set.
 */

import { Button } from '@/components/ui/Button';
import { DEMO_BADGE, IS_DEMO_DATA, directoryCopy, type Alumnus } from '@/data/alumni';

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="sx-fact">
      <dt className="framer-text framer-styles-preset-1tfjym1" data-styles-preset="zbOnBKABb">{label}</dt>
      <dd className="framer-text framer-styles-preset-1s2szaz" data-styles-preset="iF_e_kz5u">{value}</dd>
    </div>
  );
}

export function AlumniProfile({ person }: { person: Alumnus }) {
  return (
    <section className="sx-section" data-framer-name="Alumni Profile">
      <div className="sx-container">
        <div className="sx-wrapper">
          <div className="sx-profile">
            <aside className="sx-profile__aside">
              <div className="sx-profile__photo">
                <img src={person.photo} width={400} height={400} alt="" decoding="async" />
              </div>
              <div className="sx-pills">
                {IS_DEMO_DATA && (
                  <span className="sx-pill sx-pill--demo">
                    <p className="framer-text framer-styles-preset-c29y5p" data-styles-preset="MIzrA6q79">{DEMO_BADGE} record</p>
                  </span>
                )}
                <span className="sx-pill">
                  <p className="framer-text framer-styles-preset-c29y5p" data-styles-preset="MIzrA6q79">Class of {person.graduationYear}</p>
                </span>
              </div>
              {person.openToConnect ? (
                <Button label="Connect with this Alumnus" href={`/alumni/${person.slug}/connect`} variant="default" />
              ) : (
                <p className="framer-text framer-styles-preset-1tfjym1" data-styles-preset="zbOnBKABb">
                  This Xaverian is not accepting connection requests at the moment.
                </p>
              )}
              {(person.linkedin || person.x) && (
                <div className="sx-links">
                  {person.linkedin && (
                    <a className="sx-pill" href={person.linkedin} target="_blank" rel="noreferrer">
                      <p className="framer-text framer-styles-preset-c29y5p" data-styles-preset="MIzrA6q79">LinkedIn</p>
                    </a>
                  )}
                  {person.x && (
                    <a className="sx-pill" href={person.x} target="_blank" rel="noreferrer">
                      <p className="framer-text framer-styles-preset-c29y5p" data-styles-preset="MIzrA6q79">X</p>
                    </a>
                  )}
                </div>
              )}
            </aside>

            <div className="sx-profile__main">
              <div className="sx-block">
                <h1 className="framer-text framer-styles-preset-bm56uh" data-styles-preset="nqEg573cg">{person.name}</h1>
                <p className="framer-text framer-styles-preset-18gc2kl" data-styles-preset="mM0cFQnf6">
                  {person.designation}, {person.company} · {person.city}, {person.country}
                </p>
              </div>

              <div className="sx-block">
                <h2 className="framer-text framer-styles-preset-11yr44y" data-styles-preset="FFs_zSJqj">About</h2>
                <p className="framer-text framer-styles-preset-1s2szaz" data-styles-preset="iF_e_kz5u">{person.bio}</p>
              </div>

              <dl className="sx-facts">
                <Fact label="Graduation year" value={String(person.graduationYear)} />
                <Fact label="Programme" value={person.programme} />
                <Fact label="Department" value={person.department} />
                <Fact label="Industry" value={person.industry} />
                <Fact label="Designation" value={person.designation} />
                <Fact label="Location" value={`${person.city}, ${person.country}`} />
              </dl>

              {person.helpsWith.length > 0 && (
                <div className="sx-block">
                  <h2 className="framer-text framer-styles-preset-11yr44y" data-styles-preset="FFs_zSJqj">Happy to help with</h2>
                  <div className="sx-pills">
                    {person.helpsWith.map((area) => (
                      <span key={area} className="sx-pill">
                        <p className="framer-text framer-styles-preset-c29y5p" data-styles-preset="MIzrA6q79">{area}</p>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="sx-notice">
                <p className="framer-text framer-styles-preset-1tfjym1" data-styles-preset="zbOnBKABb">{directoryCopy.privacyNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
