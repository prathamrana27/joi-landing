import { motion, useReducedMotion } from "framer-motion";
import RevealText from "../components/RevealText";
import PhoneDemo from "../components/PhoneDemo";
import DownloadButton from "../components/DownloadButton";
import Icon from "../components/Icon";
import { siteContent } from "../content/siteContent";

function PhoneSection() {
  const reduce = useReducedMotion();
  const { phone } = siteContent;

  return (
    <section id="phone" className="section phone-section">
      <div className="container phone-grid">
        <div className="phone-copy">
          <p className="eyebrow">
            <span className="new-tag">New in 1.1</span> {phone.eyebrow}
          </p>
          <RevealText text={phone.titleStart} accent={phone.titleAccent} />
          <p className="section-description">{phone.description}</p>

          <ol className="phone-steps">
            {phone.steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={reduce ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="phone-step-num">{i + 1}</span>
                <div>
                  <strong>{step.title}</strong>
                  <span>{step.body}</span>
                </div>
              </motion.li>
            ))}
          </ol>

          <ul className="phone-promises">
            {phone.promises.map((p) => (
              <li key={p}>
                <Icon name="shield" size={16} />
                {p}
              </li>
            ))}
          </ul>

          <div className="phone-cta">
            <DownloadButton />
            <span className="phone-cta-note">{phone.note}</span>
          </div>
        </div>

        <motion.div
          className="phone-visual"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="phone-glow" aria-hidden="true" />
          <PhoneDemo />
        </motion.div>
      </div>
    </section>
  );
}

export default PhoneSection;
