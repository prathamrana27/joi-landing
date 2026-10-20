import { motion, useReducedMotion } from "framer-motion";
import Icon from "../components/Icon";
import RevealText from "../components/RevealText";
import { siteContent } from "../content/siteContent";

const POINT_ICONS = ["cpu", "key", "lock"] as const;

function PrivacySection() {
  const reduce = useReducedMotion();
  const { privacy } = siteContent;

  return (
    <section id="privacy" className="section section-ink">
      <div className="container privacy-grid">
        <div>
          <p className="eyebrow eyebrow-on-ink">Privacy</p>
          <RevealText text="Private" accent="by design." />
          <p className="section-description on-ink">{privacy.description}</p>

          <div className="privacy-points">
            {privacy.points.map((p, i) => (
              <motion.div
                key={p.title}
                className="privacy-point"
                initial={reduce ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="privacy-icon">
                  <Icon name={POINT_ICONS[i]} size={20} />
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="privacy-footnote">{privacy.footnote}</p>
        </div>

        <div className="device" aria-hidden="true">
          <div className="device-screen">
            <div className="device-chip">
              <span className="chip-core">
                <Icon name="cpu" size={34} strokeWidth={1.5} />
              </span>
              <span className="chip-ring ring-1" />
              <span className="chip-ring ring-2" />
              <span className="chip-ring ring-3" />
            </div>
            <div className="device-label">
              <span className="dot-sage" /> JOI model · running on this PC
            </div>
            <div className="device-bars">
              {Array.from({ length: 18 }).map((_, i) => (
                <span key={i} style={{ animationDelay: `${(i % 6) * 0.15}s` }} />
              ))}
            </div>
          </div>
          <div className="device-base" />
        </div>
      </div>
    </section>
  );
}

export default PrivacySection;
