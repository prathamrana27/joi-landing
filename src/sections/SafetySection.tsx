import { motion, useReducedMotion } from "framer-motion";
import Section from "../components/Section";
import Icon from "../components/Icon";
import { siteContent } from "../content/siteContent";

const LOG = [
  { tool: "Read inbox", status: "Done" },
  { tool: "Create calendar event", status: "Approved" },
  { tool: "Send email", status: "Approved" },
  { tool: "Delete files", status: "Denied" },
];

function SafetySection() {
  const reduce = useReducedMotion();
  const { safety } = siteContent;

  return (
    <Section id="safety" eyebrow="Safety" title="It asks" titleAccent="before it acts." description={safety.description}>
      <div className="safety-grid">
        <ul className="safety-list">
          {safety.points.map((p, i) => (
            <motion.li
              key={p}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="check-badge">
                <Icon name="check" size={14} strokeWidth={2.6} />
              </span>
              {p}
            </motion.li>
          ))}
        </ul>

        <div className="safety-visual" aria-hidden="true">
          <motion.div
            className="safety-card approval-showcase"
            initial={reduce ? false : { opacity: 0, rotate: -3, y: 30 }}
            whileInView={{ opacity: 1, rotate: -2, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="demo-approval-title">
              <Icon name="shield" size={16} /> Allow JOI to create an event?
            </div>
            <div className="demo-approval-args">
              title: Design review
              <br />
              when: Thu, 2:00 pm · 45 min
            </div>
            <div className="demo-approval-actions">
              <span className="demo-approve breathing">Approve</span>
              <span className="demo-deny">Deny</span>
            </div>
          </motion.div>

          <motion.div
            className="safety-card log-card"
            initial={reduce ? false : { opacity: 0, rotate: 3, y: 40 }}
            whileInView={{ opacity: 1, rotate: 2, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="log-title">Activity log</div>
            {LOG.map((row, i) => (
              <motion.div
                key={row.tool}
                className="log-row"
                initial={reduce ? false : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <span>{row.tool}</span>
                <span className={`log-status ${row.status.toLowerCase()}`}>{row.status}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export default SafetySection;
