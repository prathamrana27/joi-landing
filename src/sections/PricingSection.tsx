import Section from "../components/Section";
import PricingCard from "../components/PricingCard";
import { siteContent } from "../content/siteContent";

function PricingSection() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing Preview"
      title="Simple plans for operators, power users, and teams."
      description="Choose the starting point that matches your workflow depth, then scale controls and automation as usage expands."
      className="section-pricing"
    >
      <div className="pricing-grid">
        {siteContent.pricing.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>
    </Section>
  );
}

export default PricingSection;
