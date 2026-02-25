import Section from "../components/Section";
import { siteContent } from "../content/siteContent";

function FinalCTASection() {
  const isExternalLink = (href: string) => /^https?:\/\//.test(href);

  return (
    <Section id="final-cta" className="final-cta-section">
      <div className="final-cta-band">
        <div>
          <p className="section-eyebrow">Final CTA</p>
          <h2>{siteContent.finalCta.title}</h2>
          <p className="section-description">{siteContent.finalCta.description}</p>
          <div className="inline-cta">
            <a
              href={siteContent.finalCta.primaryCta.href}
              className="btn btn-primary"
              target={isExternalLink(siteContent.finalCta.primaryCta.href) ? "_blank" : undefined}
              rel={
                isExternalLink(siteContent.finalCta.primaryCta.href)
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {siteContent.finalCta.primaryCta.label}
            </a>
            <a
              href={siteContent.finalCta.secondaryCta.href}
              className="btn btn-outline"
              target={
                isExternalLink(siteContent.finalCta.secondaryCta.href) ? "_blank" : undefined
              }
              rel={
                isExternalLink(siteContent.finalCta.secondaryCta.href)
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {siteContent.finalCta.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="release-card">
          <h3>JOI Desktop v1.0.0</h3>
          <p>Windows x64 build is live and ready to install.</p>
          <ul>
            <li>Installer: EXE</li>
            <li>Architecture: x64</li>
            <li>Release channel: Stable</li>
          </ul>
          <a
            href={siteContent.downloadUrl}
            className="btn btn-primary"
            target={isExternalLink(siteContent.downloadUrl) ? "_blank" : undefined}
            rel={isExternalLink(siteContent.downloadUrl) ? "noopener noreferrer" : undefined}
          >
            Download Installer
          </a>
        </div>
      </div>
    </Section>
  );
}

export default FinalCTASection;
