import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteContent } from "../content/siteContent";
import ChatDemo from "../components/ChatDemo";
import DownloadButton from "../components/DownloadButton";
import RevealText from "../components/RevealText";

const ease = [0.22, 1, 0.36, 1] as const;

function HeroSection() {
  const reduce = useReducedMotion();
  const { hero } = siteContent;
  const [phrase, setPhrase] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setPhrase((p) => (p + 1) % hero.rotating.length), 2400);
    return () => window.clearInterval(id);
  }, [reduce, hero.rotating.length]);

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow hero-eyebrow" {...fade(0)}>
            <span className="pulse-dot" /> {hero.eyebrow}
          </motion.p>

          <RevealText
            as="h1"
            text={hero.headlineStart}
            accent={hero.headlineAccent}
            after={hero.headlineEnd}
            className="hero-title"
          />

          <motion.div className="hero-rotator" aria-live="polite" {...fade(0.35)}>
            <AnimatePresence mode="wait">
              <motion.span
                key={phrase}
                initial={reduce ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease }}
              >
                {hero.rotating[phrase]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p className="hero-sub" {...fade(0.45)}>
            {hero.subheadline}
          </motion.p>

          <motion.div className="hero-cta" {...fade(0.55)}>
            <DownloadButton size="lg" />
            <a className="btn btn-ghost btn-lg" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.p className="hero-meta" {...fade(0.65)}>
            {siteContent.downloadMeta}
          </motion.p>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduce ? false : { opacity: 0, y: 40, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          <div className="hero-visual-glow" aria-hidden="true" />
          <ChatDemo />
          <motion.div
            className="float-chip chip-a"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="kbd-mini">Ctrl</span>+<span className="kbd-mini">Alt</span>+<span className="kbd-mini">J</span>
          </motion.div>
          <motion.div
            className="float-chip chip-b"
            animate={reduce ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <span className="dot-sage" /> Running on this PC
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
