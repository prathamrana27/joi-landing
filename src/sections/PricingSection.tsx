import { motion, useReducedMotion } from "framer-motion";
import Section from "../components/Section";
import Icon from "../components/Icon";
import { siteContent } from "../content/siteContent";

function PricingSection() {
  const reduce = useReducedMotion();

  return (
    <Section id="pricing" eyebrow="Pricing" title="Free while we" titleAccent="build it with you.">
      <div className="plans">
        {siteContent.plans.map((plan, i) => (
          <motion.article
            key={plan.name}
            className={`plan ${plan.featured ? "plan-featured" : ""}`}
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            {plan.featured && <span className="plan-badge">Available now</span>}
            <h3>{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-note">{plan.note}</p>
            <ul>
              {plan.features.map((f) => (
                <li key={f}>
                  <Icon name="check" size={15} strokeWidth={2.4} />
                  {f}
                </li>
              ))}
            </ul>
            {plan.disabled ? (
              <span className="btn btn-ghost btn-block is-disabled" aria-disabled="true">
                {plan.cta}
              </span>
            ) : (
              <a className="btn btn-primary btn-block" href={plan.ctaHref} rel="noopener">
                <Icon name="download" size={17} strokeWidth={2.2} />
                {plan.cta}
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

export default PricingSection;
