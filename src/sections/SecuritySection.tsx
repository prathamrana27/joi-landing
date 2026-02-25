import Section from "../components/Section";
import { siteContent } from "../content/siteContent";

function SecuritySection() {
  return (
    <Section
      id="security-governance"
      eyebrow="Security + Governance"
      title="High-trust execution with policy-enforced controls."
      description="Every action is checked against tool policies before execution, then tracked in an auditable timeline."
      className="section-security"
    >
      <div className="split-panel">
        <article className="glass-card">
          <h3>Governance Matrix</h3>
          <div className="matrix-grid" role="table" aria-label="Tool governance options">
            <p role="row">
              <span role="cell">System Info</span>
              <span role="cell">Allow</span>
            </p>
            <p role="row">
              <span role="cell">File Write</span>
              <span role="cell">Require Approval</span>
            </p>
            <p role="row">
              <span role="cell">Email Send</span>
              <span role="cell">Require Approval</span>
            </p>
            <p role="row">
              <span role="cell">WhatsApp Blast</span>
              <span role="cell">Deny</span>
            </p>
          </div>
        </article>

        <article className="glass-card">
          <h3>Built-In Safeguards</h3>
          <ul className="list-check">
            {siteContent.securityBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}

export default SecuritySection;
