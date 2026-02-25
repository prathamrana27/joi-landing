import { motion, useReducedMotion } from "framer-motion";
import type { PricingTier } from "../content/siteContent";

type PricingCardProps = {
  tier: PricingTier;
};

function PricingCard({ tier }: PricingCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`pricing-card ${tier.featured ? "featured" : ""}`}
      whileHover={shouldReduceMotion ? undefined : { y: -10 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
    >
      {tier.featured && <span className="pricing-badge">Most Popular</span>}
      <h3>{tier.name}</h3>
      <p className="price">{tier.price}</p>
      <p className="pricing-summary">{tier.summary}</p>
      <ul>
        {tier.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button className="btn btn-outline" type="button">
        {tier.cta}
      </button>
    </motion.article>
  );
}

export default PricingCard;
