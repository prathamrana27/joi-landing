import Section from "../components/Section";
import { siteContent } from "../content/siteContent";

function VoiceDesktopSection() {
  return (
    <Section
      id="voice-desktop-context"
      eyebrow="Voice + Desktop Context"
      title="Operate by speaking, typing, or firing hotkeys."
      description="JOI captures desktop context, transcribes requests, and responds in voice while preserving policy boundaries."
      className="section-voice"
    >
      <div className="split-panel">
        <article className="glass-card">
          <h3>Operator Flow</h3>
          <p className="muted-line">
            Hotkey trigger {"->"} Intent parse {"->"} Tool plan {"->"} Approval {"->"} Action log
          </p>
          <ul className="list-check">
            {siteContent.voiceDesktopBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="glass-card">
          <h3>Live Session Snapshot</h3>
          <div className="mini-chat" aria-label="Voice and context demo">
            <p>
              <span>User:</span> "Schedule a follow-up and draft summary from today&apos;s notes."
            </p>
            <p>
              <span>JOI:</span> "Draft complete. Calendar invite staged. Approval required before send."
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}

export default VoiceDesktopSection;
