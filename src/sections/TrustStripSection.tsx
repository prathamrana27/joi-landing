import Section from "../components/Section";
import { siteContent } from "../content/siteContent";

function TrustStripSection() {
  return (
    <Section id="trust-strip" className="trust-strip-section">
      <div className="trust-strip" role="list" aria-label="Trust signals">
        {siteContent.trustStrip.map((item) => (
          <p key={item} role="listitem">
            {item}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default TrustStripSection;
