import Section from "../components/Section";
import { siteContent } from "../content/siteContent";

function AutomationSection() {
  return (
    <Section
      id="automation"
      eyebrow="Automation Engine"
      title="Routines, reminders, and jobs that keep running after you close the tab."
      description="Set autonomous workflows with policy checks, retry logic, and proactive notifications."
      className="section-automation"
    >
      <div className="automation-panel">
        <ul className="list-check">
          {siteContent.automationBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="job-stream" aria-label="Automation job stream">
          <p>
            <strong>08:10</strong> Daily metric digest generated
          </p>
          <p>
            <strong>09:05</strong> Client follow-up drafts queued for approval
          </p>
          <p>
            <strong>10:30</strong> Security alert routed to on-call channel
          </p>
        </div>
      </div>
    </Section>
  );
}

export default AutomationSection;
