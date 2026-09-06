'use client';

/**
 * Premium alumni directory with search, filters, and card grid.
 * All filter/search logic is preserved exactly from the original AlumniDirectory.
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

const haystack = (person: Alumnus) =>
  [person.name, person.company, person.designation, person.city, person.country].join(' ').toLowerCase();

export function AlumniDiscover() {
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
    <section className="al-discover" id="directory">
      <div className="al-shell">
        <div className="al-discover__head">
          <p className="al-eyebrow">Directory</p>
          <h2 className="al-discover__title">Discover the Xaverian Network</h2>
          <p className="al-discover__subtitle">{directoryCopy.intro}</p>
        </div>

        {/* Search */}
        <div className="al-search">
          <svg className="al-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={directoryCopy.searchPlaceholder}
            aria-label={directoryCopy.searchPlaceholder}
          />
        </div>

        {/* Filters */}
        <div className="al-filters">
          {(Object.keys(filterLabels) as FilterKey[]).map((key) => (
            <select
              key={key}
              value={filters[key]}
              aria-label={filterLabels[key]}
              onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
            >
              <option value="">{filterLabels[key]}</option>
              {filterOptions[key].map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ))}

          <label className="al-toggle" data-on={openOnly}>
            <input type="checkbox" checked={openOnly} onChange={(e) => setOpenOnly(e.target.checked)} />
            {directoryCopy.openToConnectLabel}
          </label>

          {dirty && (
            <button type="button" className="al-reset" onClick={reset}>{directoryCopy.clearLabel}</button>
          )}
        </div>

        <p className="al-count" aria-live="polite">
          {results.length} {results.length === 1 ? 'Xaverian' : 'Xaverians'}
        </p>

        {/* Grid */}
        {results.length > 0 ? (
          <div className="al-grid">
            {results.map((person) => (
              <AlumniCard key={person.slug} person={person} />
            ))}
          </div>
        ) : (
          <div className="al-empty">
            <h3>{directoryCopy.emptyTitle}</h3>
            <p>{directoryCopy.emptyBody}</p>
          </div>
        )}
      </div>
    </section>
  );
}
