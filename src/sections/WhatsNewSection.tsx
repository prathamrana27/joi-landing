import Section from "../components/Section";
import ReleaseNotes from "../components/ReleaseNotes";
import Icon from "../components/Icon";
import { latestRelease } from "../content/releases";

function WhatsNewSection() {
  return (
    <Section id="whats-new" eyebrow="What's new" title="Fresh in" titleAccent={`version ${latestRelease.version}.`}>
      <div className="whats-new">
        <ReleaseNotes release={latestRelease} latest limit={4} />
        <a className="btn btn-ghost whats-new-link" href="/changelog">
          All release notes
          <Icon name="arrow" size={16} strokeWidth={2.2} />
        </a>
      </div>
    </Section>
  );
}

export default WhatsNewSection;
