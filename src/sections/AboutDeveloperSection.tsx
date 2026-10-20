import Section from "../components/Section";

const developerLinks = [
  { label: "GitHub", href: "https://github.com/prathamrana27" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prathamrana27/" },
];

function AboutDeveloperSection() {
  return (
    <Section id="about-developer" eyebrow="Who builds JOI" className="section-tight">
      <div className="about-card">
        <div className="about-avatar" aria-hidden="true">
          PR
        </div>
        <div className="about-copy">
          <h3>Pratham Rana</h3>
          <p>
            Full-stack AI developer building JOI end to end, from the desktop app to the AI that runs it.
          </p>
        </div>
        <div className="about-links">
          {developerLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default AboutDeveloperSection;
