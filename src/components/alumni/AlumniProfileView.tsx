/**
 * Premium alumni profile view — no hero image.
 * Clean editorial layout with sticky sidebar photo and fact grid.
 */

import { DEMO_BADGE, IS_DEMO_DATA, directoryCopy, type Alumnus } from '@/data/alumni';

export function AlumniProfileView({ person }: { person: Alumnus }) {
  return (
    <section className="al-profile-page">
      <div className="al-shell">
        <div className="al-profile">
          {/* Sidebar */}
          <aside className="al-profile__aside">
            <div className="al-profile__photo">
              <img src={person.photo} width={400} height={400} alt="" decoding="async" />
            </div>
            <div className="al-profile__pills">
              {IS_DEMO_DATA && (
                <span className="al-profile__pill al-profile__pill--demo">{DEMO_BADGE} record</span>
              )}
              <span className="al-profile__pill">Class of {person.graduationYear}</span>
              {person.openToConnect && (
                <span className="al-profile__pill al-profile__pill--green">Open to connect</span>
              )}
            </div>
            {person.openToConnect ? (
              <a className="al-profile__connect-btn" href={`/alumni/${person.slug}/connect`}>
                Connect with this Alumnus
              </a>
            ) : (
              <p style={{ fontSize: 14, color: 'var(--al-muted)', margin: 0 }}>
                This Xaverian is not accepting connection requests at the moment.
              </p>
            )}
            {(person.linkedin || person.x) && (
              <div className="al-profile__links">
                {person.linkedin && (
                  <a className="al-profile__link" href={person.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                )}
                {person.x && (
                  <a className="al-profile__link" href={person.x} target="_blank" rel="noreferrer">
                    X
                  </a>
                )}
              </div>
            )}
          </aside>

          {/* Main content */}
          <div className="al-profile__main">
            <div>
              <h1 className="al-profile__name">{person.name}</h1>
              <p className="al-profile__role">
                {person.designation}, {person.company} · {person.city}, {person.country}
              </p>
            </div>

            <div>
              <h2 className="al-profile__section-title">About</h2>
              <p className="al-profile__bio">{person.bio}</p>
            </div>

            <div>
              <h2 className="al-profile__section-title">Details</h2>
              <dl className="al-profile__facts">
                <div className="al-profile__fact">
                  <dt>Graduation Year</dt>
                  <dd>{person.graduationYear}</dd>
                </div>
                <div className="al-profile__fact">
                  <dt>Programme</dt>
                  <dd>{person.programme}</dd>
                </div>
                <div className="al-profile__fact">
                  <dt>Department</dt>
                  <dd>{person.department}</dd>
                </div>
                <div className="al-profile__fact">
                  <dt>Industry</dt>
                  <dd>{person.industry}</dd>
                </div>
                <div className="al-profile__fact">
                  <dt>Designation</dt>
                  <dd>{person.designation}</dd>
                </div>
                <div className="al-profile__fact">
                  <dt>Location</dt>
                  <dd>{person.city}, {person.country}</dd>
                </div>
              </dl>
            </div>

            {person.helpsWith.length > 0 && (
              <div>
                <h2 className="al-profile__section-title">Happy to help with</h2>
                <div className="al-profile__helps">
                  {person.helpsWith.map((area) => (
                    <span key={area} className="al-profile__help-tag">{area}</span>
                  ))}
                </div>
              </div>
            )}

            <p className="al-profile__privacy">{directoryCopy.privacyNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
