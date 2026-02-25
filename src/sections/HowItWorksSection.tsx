import Section from "../components/Section";
import { siteContent } from "../content/siteContent";

function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How It Works"
      title="Designed for controlled autonomy in three steps."
      description="JOI balances speed and trust by combining policy checks, contextual planning, and auditable execution."
    >
      <div className="steps-grid">
        {siteContent.howItWorks.map((step) => (
          <article key={step.title} className="step-card">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default HowItWorksSection;
