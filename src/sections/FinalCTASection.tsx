import { motion, useReducedMotion } from "framer-motion";
import DownloadButton from "../components/DownloadButton";
import { siteContent } from "../content/siteContent";

function FinalCTASection() {
  const reduce = useReducedMotion();

  return (
    <section id="download" className="section final-cta">
      <div className="container">
        <motion.div
          className="cta-band"
          initial={reduce ? false : { opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="cta-orb orb-1" aria-hidden="true" />
          <span className="cta-orb orb-2" aria-hidden="true" />
          <motion.img
            src="/joi-mark-light.svg"
            alt=""
            className="cta-mark"
            width={84}
            height={84}
            animate={reduce ? undefined : { y: [0, -10, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <h2>{siteContent.finalCta.title}</h2>
          <p>{siteContent.finalCta.description}</p>
          <DownloadButton size="lg" light />
          <p className="cta-meta">{siteContent.downloadMeta}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTASection;
