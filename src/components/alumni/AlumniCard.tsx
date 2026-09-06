/**
 * Premium alumni card with photo-reveal hover overlay.
 * Shows photo, tags, name, and programme by default.
 * On hover: overlay slides in with role, location, and "View profile →".
 */

import { DEMO_BADGE, IS_DEMO_DATA, type Alumnus } from '@/data/alumni';

export function AlumniCard({ person }: { person: Alumnus }) {
  return (
    <a className="al-card" href={`/alumni/${person.slug}`}>
      <div className="al-card__photo">
        <img
          src={person.photo}
          width={400}
          height={533}
          alt=""
          decoding="async"
        />
        <div className="al-card__tags">
          {IS_DEMO_DATA && (
            <span className="al-card__tag al-card__tag--demo">{DEMO_BADGE}</span>
          )}
          <span className="al-card__tag">
            Class of {person.graduationYear}
          </span>
          {person.openToConnect && (
            <span className="al-card__tag al-card__tag--connect">Open</span>
          )}
        </div>
        <div className="al-card__overlay">
          <p className="al-card__overlay-role">
            {person.designation}, {person.company}
          </p>
          <p className="al-card__overlay-location">
            {person.city}, {person.country}
          </p>
          <span className="al-card__overlay-cta">
            View profile <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
      <div className="al-card__body">
        <h3 className="al-card__name">{person.name}</h3>
        <p className="al-card__meta">
          {person.programme} · {person.department}
        </p>
      </div>
    </a>
  );
}
