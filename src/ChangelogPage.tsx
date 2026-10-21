import Footer from "./components/Footer";
import Logo from "./components/Logo";
import DownloadButton from "./components/DownloadButton";
import ReleaseNotes from "./components/ReleaseNotes";
import { Aurora } from "./components/Ambient";
import { releases } from "./content/releases";

// Standalone /changelog page: every JOI version, newest first.
function ChangelogPage() {
  return (
    <div className="app-shell">
      <Aurora />
      <header className="changelog-bar">
        <div className="container changelog-bar-inner">
          <a href="/" aria-label="JOI home">
            <Logo size={30} />
          </a>
          <a href="/" className="btn btn-ghost btn-sm">
            Back to home
          </a>
        </div>
      </header>
      <main className="container changelog">
        <p className="eyebrow">Release notes</p>
        <h1 className="changelog-title">
          What's new in <span className="reveal-word accent">JOI</span>
        </h1>
        <p className="section-description">
          Every version, what we added and what we fixed. JOI updates itself, so you're always on the latest one.
        </p>
        <div className="changelog-cta">
          <DownloadButton />
        </div>
        <div className="changelog-list">
          {releases.map((r, i) => (
            <ReleaseNotes key={r.version} release={r} latest={i === 0} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ChangelogPage;
