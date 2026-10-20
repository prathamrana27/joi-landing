import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

// Slow-drifting warm light behind the page, plus a fine grain so flat areas feel printed.
export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="blob blob-a" />
      <span className="blob blob-b" />
      <span className="blob blob-c" />
      <span className="grain" />
    </div>
  );
}

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });
  if (reduce) return null;
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
