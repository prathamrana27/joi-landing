import type { PointerEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../components/Section";
import Icon from "../components/Icon";
import { siteContent } from "../content/siteContent";
import type { Feature } from "../content/siteContent";

function FeaturesSection() {
  return (
    <Section
      id="features"
      eyebrow="What JOI does"
      title="One assistant for"
      titleAccent="your whole day."
      description="Ask the way you'd ask a person. JOI works across your email, calendar, files, apps and computer."
    >
      <div className="bento">
        {siteContent.features.map((f, i) => (
          <FeatureCard key={f.title} feature={f} index={i} />
        ))}
      </div>
    </Section>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const reduce = useReducedMotion();

  // Feeds the cursor position to CSS for the soft spotlight that follows the pointer.
  function onMove(e: PointerEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <motion.article
      className={`bento-card ${feature.size ? `bento-${feature.size}` : ""}`}
      onPointerMove={onMove}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6 }}
    >
      <span className="bento-icon">
        <Icon name={feature.icon} size={22} />
      </span>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </motion.article>
  );
}

export default FeaturesSection;
