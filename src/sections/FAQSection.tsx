import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";
import { siteContent } from "../content/siteContent";

function FAQSection() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Answers for teams evaluating JOI."
      className="section-faq"
    >
      <FAQAccordion items={siteContent.faqs} />
    </Section>
  );
}

export default FAQSection;
