import Section from "../components/Section";
import { siteContent } from "../content/siteContent";

function IntegrationsSection() {
  return (
    <Section
      id="integrations-tools"
      eyebrow="Integrations + Tools"
      title="One operator layer across your workspace systems."
      description="Connect apps, web, local system context, files, communication channels, and scheduling tools in one governed runtime."
      className="section-integrations"
    >
      <div className="integrations-layout">
        <article className="glass-card integrations-copy">
          <h3>Included Tool Surface</h3>
          <div className="tool-grid" role="list" aria-label="JOI tools">
            {siteContent.integrationTools.map((tool) => (
              <p key={tool} role="listitem">
                {tool}
              </p>
            ))}
          </div>
        </article>
        <article className="glass-card integrations-copy integrations-detail">
          <h3>Orchestrated, Not Isolated</h3>
          <p>
            JOI coordinates tools in sequence with approvals, memory context, and execution logs so
            teams can trust autonomous actions.
          </p>
          <ul className="list-check">
            <li>Cross-tool workflow planning from one intent</li>
            <li>Policy checks before every sensitive action</li>
            <li>Shared context between chat, voice, and background jobs</li>
            <li>Full traceability from request to outcome</li>
          </ul>
        </article>
      </div>
    </Section>
  );
}

export default IntegrationsSection;
