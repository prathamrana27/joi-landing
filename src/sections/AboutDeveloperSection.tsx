import Section from "../components/Section";

const developerLinks = [
  { label: "GitHub", href: "https://github.com/prathamrana27" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prathamrana27/" },
];

function AboutDeveloperSection() {
  return (
    <Section
      id="about-developer"
      eyebrow="About the Developer"
      title="Pratham Rana"
      description="Builder-oriented full-stack AI developer focused on desktop + web product experiences backed by Python LLM systems."
    >
      <div className="about-minimal-card">
        <p>
          Builds end-to-end assistant products across interface, backend services, and deployment workflows.
        </p>
        <div className="about-minimal-links">
          {developerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-small"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default AboutDeveloperSection;
