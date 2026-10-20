import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Section from "../components/Section";
import { siteContent } from "../content/siteContent";

function HowItWorksSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  // The connecting line draws itself as the steps scroll through the viewport.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="how-it-works" eyebrow="How it works" title="Up and running" titleAccent="in minutes.">
      <ol className="steps" ref={ref}>
        <motion.span className="steps-line" style={reduce ? undefined : { scaleX }} aria-hidden="true" />
        {siteContent.steps.map((step, i) => (
          <motion.li
            key={step.title}
            className="step"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

export default HowItWorksSection;
