import { motion, useReducedMotion } from "framer-motion";

type FeatureCardProps = {
  tag?: string;
  title: string;
  description: string;
};

function FeatureCard({ tag, title, description }: FeatureCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="feature-card"
      whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      {tag && <span className="feature-tag">{tag}</span>}
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
}

export default FeatureCard;
