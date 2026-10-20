import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";
import { siteContent } from "../content/siteContent";

function FAQSection() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions," titleAccent="answered.">
      <FAQAccordion items={siteContent.faqs} />
    </Section>
  );
}

export default FAQSection;
