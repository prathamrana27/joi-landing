import type { Release } from "../content/releases";
import { formatReleaseDate } from "../content/releases";
import Icon from "./Icon";

const GROUPS: { key: "added" | "improved" | "fixed" | "security"; label: string }[] = [
  { key: "added", label: "New" },
  { key: "improved", label: "Improved" },
  { key: "fixed", label: "Fixed" },
  { key: "security", label: "Safety & security" },
];

type ReleaseNotesProps = {
  release: Release;
  latest?: boolean;
  limit?: number;
};

// One version's notes, grouped as New / Improved / Fixed / Safety. `limit` caps the
// items per group (used for the short "What's new" teaser on the home page).
function ReleaseNotes({ release, latest = false, limit }: ReleaseNotesProps) {
  return (
    <article className="release" id={`v${release.version}`}>
      <header className="release-head">
        <span className="release-version">v{release.version}</span>
        {latest && <span className="release-badge">Latest</span>}
        <time className="release-date" dateTime={release.date}>
          {formatReleaseDate(release.date)}
        </time>
      </header>
      <h3 className="release-title">{release.title}</h3>
      <p className="release-summary">{release.summary}</p>
      <div className="release-groups">
        {GROUPS.map(({ key, label }) => {
          const items = release[key];
          if (!items?.length) return null;
          return (
            <section key={key} className={`release-group group-${key}`}>
              <h4>{label}</h4>
              <ul>
                {(limit ? items.slice(0, limit) : items).map((item) => (
                  <li key={item}>
                    <Icon name="check" size={14} strokeWidth={2.4} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </article>
  );
}

export default ReleaseNotes;
