import Section from "../components/Section";
import FeatureCard from "../components/FeatureCard";
import { siteContent } from "../content/siteContent";

function CapabilitiesSection() {
  return (
    <Section
      id="capabilities"
      eyebrow="Core Capabilities"
      title="Execution-grade AI that actually operates your desktop stack."
      description="From auth and governance to memory and local retrieval, JOI gives power users an operator layer instead of another chat interface."
    >
      <div className="capabilities-grid">
        {siteContent.capabilities.map((item) => (
          <FeatureCard
            key={item.title}
            tag={item.tag}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
}

export default CapabilitiesSection;
