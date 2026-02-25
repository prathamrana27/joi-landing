import Section from "../components/Section";
import { siteContent } from "../content/siteContent";

function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="Teams choose JOI when speed and control both matter."
      className="section-testimonials"
    >
      <div className="testimonials-grid">
        {siteContent.testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <p className="quote">"{item.quote}"</p>
            <p className="person">{item.name}</p>
            <p className="role">
              {item.role}, {item.company}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default TestimonialsSection;
