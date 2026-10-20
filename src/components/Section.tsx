import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import RevealText from "./RevealText";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  titleAccent?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

function Section({ id, eyebrow, title, titleAccent, description, className = "", children }: SectionProps) {
  const reduce = useReducedMotion();

  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {(eyebrow || title || description) && (
          <div className="section-head">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <RevealText text={title} accent={titleAccent} />}
            {description && (
              <motion.p
                className="section-description"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {description}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
