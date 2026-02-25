import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "../content/siteContent";

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const isExternalLink = (href: string) => /^https?:\/\//.test(href);

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid hero-copy-only">
        <motion.div
          className="hero-copy"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-mainline">
            <div className="hero-brand-chip">
              <img src="/joi-logo-icon.png" alt="" aria-hidden="true" className="hero-chip-logo" />
              <p className="hero-badge">{siteContent.hero.badge}</p>
            </div>
            <h1>{siteContent.hero.headline}</h1>
            <p className="hero-subheadline">{siteContent.hero.subheadline}</p>
            <p className="hero-positioning">{siteContent.hero.positioning}</p>
          </div>

          <div className="hero-detail-grid">
            <ul className="hero-highlights" aria-label="JOI differentiators">
              {siteContent.hero.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="hero-cta">
              <a
                className="btn btn-primary"
                href={siteContent.hero.primaryCta.href}
                target={isExternalLink(siteContent.hero.primaryCta.href) ? "_blank" : undefined}
                rel={
                  isExternalLink(siteContent.hero.primaryCta.href)
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {siteContent.hero.primaryCta.label}
              </a>
              <a
                className="btn btn-outline"
                href={siteContent.hero.secondaryCta.href}
                target={isExternalLink(siteContent.hero.secondaryCta.href) ? "_blank" : undefined}
                rel={
                  isExternalLink(siteContent.hero.secondaryCta.href)
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {siteContent.hero.secondaryCta.label}
              </a>
            </div>

            <div className="hero-stats" role="list" aria-label="Key product metrics">
              {siteContent.hero.statTiles.map((tile) => (
                <div className="stat-card" key={tile.label} role="listitem">
                  <p>{tile.value}</p>
                  <span>{tile.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
