'use client';

/**
 * The searchable directory (SOW D-01 – D-04, D-08).
 *
 * Free-text search across name, company, designation and location, five
 * dropdown filters and an "open to connect" toggle, all applied together.
 * Filtering happens in the browser because the prototype holds a dozen sample
 * records; against the real dataset the same controls become query parameters.
 */

import { useMemo, useState } from 'react';
import { AlumniCard } from './AlumniCard';
import {
  alumni,
  directoryCopy,
  filterLabels,
  filterOptions,
  type Alumnus,
  type FilterKey,
} from '@/data/alumni';

const EMPTY: Record<FilterKey, string> = {
  graduationYear: '',
  programme: '',
  department: '',
  industry: '',
  location: '',
};

const valueOf = (person: Alumnus, key: FilterKey) =>
  key === 'graduationYear' ? String(person.graduationYear)
  : key === 'location' ? `${person.city}, ${person.country}`
  : person[key];

/** The fields keyword search scores against, per SOW D-02. */
const haystack = (person: Alumnus) =>
  [person.name, person.company, person.designation, person.city, person.country].join(' ').toLowerCase();

export function AlumniDirectory() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState(EMPTY);
  const [openOnly, setOpenOnly] = useState(false);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return alumni.filter((person) => {
      if (needle && !haystack(person).includes(needle)) return false;
      if (openOnly && !person.openToConnect) return false;
      return (Object.keys(filters) as FilterKey[]).every(
        (key) => !filters[key] || valueOf(person, key) === filters[key],
      );
    });
  }, [query, filters, openOnly]);

  const dirty = query !== '' || openOnly || Object.values(filters).some(Boolean);
  const reset = () => {
    setQuery('');
    setFilters(EMPTY);
    setOpenOnly(false);
  };

  return (
    <div className="sx-wrapper">
      <div className="sx-head">
        <h2 className="framer-text framer-styles-preset-1tiwwlt" data-styles-preset="WXi_OMzDz">{directoryCopy.title}</h2>
        <p className="framer-text framer-styles-preset-18gc2kl" data-styles-preset="mM0cFQnf6">{directoryCopy.intro}</p>
      </div>

      <div className="sx-controls">
        <div className="sx-search">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={directoryCopy.searchPlaceholder}
            aria-label={directoryCopy.searchPlaceholder}
          />
        </div>

        <div className="sx-filters">
          {(Object.keys(filterLabels) as FilterKey[]).map((key) => (
            <select
              key={key}
              value={filters[key]}
              aria-label={filterLabels[key]}
              onChange={(event) => setFilters({ ...filters, [key]: event.target.value })}
            >
              <option value="">{filterLabels[key]}</option>
              {filterOptions[key].map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ))}

          <label className="sx-toggle" data-on={openOnly}>
            <input type="checkbox" checked={openOnly} onChange={(event) => setOpenOnly(event.target.checked)} />
            <p className="framer-text framer-styles-preset-1tfjym1" data-styles-preset="zbOnBKABb">{directoryCopy.openToConnectLabel}</p>
          </label>

          {dirty && (
            <button type="button" className="sx-reset" onClick={reset}>{directoryCopy.clearLabel}</button>
          )}
        </div>

        <p className="framer-text framer-styles-preset-1tfjym1 sx-count" data-styles-preset="zbOnBKABb" aria-live="polite">
          {results.length} {results.length === 1 ? 'Xaverian' : 'Xaverians'}
        </p>
      </div>

      {results.length > 0 ? (
        <div className="sx-grid">
          {results.map((person) => <AlumniCard key={person.slug} person={person} />)}
        </div>
      ) : (
        <div className="sx-empty">
          <h3 className="framer-text framer-styles-preset-b008ll" data-styles-preset="wv4_2UBIZ">{directoryCopy.emptyTitle}</h3>
          <p className="framer-text framer-styles-preset-1s2szaz" data-styles-preset="iF_e_kz5u">{directoryCopy.emptyBody}</p>
        </div>
      )}
    </div>
  );
}
