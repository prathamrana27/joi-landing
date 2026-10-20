import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealTextProps = {
  text: string;
  accent?: string;
  after?: string;
  as?: "h1" | "h2";
  className?: string;
};

// A heading whose words rise into place one after another when it scrolls into view.
// `accent` is set in clay italics between `text` and `after`.
function RevealText({ text, accent, after, as = "h2", className }: RevealTextProps) {
  const reduce = useReducedMotion();
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  const words = [
    ...text.split(" ").map((w) => ({ w, accent: false })),
    ...(accent ? accent.split(" ").map((w) => ({ w, accent: true })) : []),
    ...(after ? after.split(" ").map((w) => ({ w, accent: false })) : []),
  ].filter((x) => x.w);

  return (
    <Tag
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: 0.06 }}
      aria-label={[text, accent, after].filter(Boolean).join(" ")}
    >
      {words.map(({ w, accent: isAccent }, i) => (
        // The space must sit outside the inline-block wrapper, or the browser drops it.
        <Fragment key={`${w}-${i}`}>
          <span className="reveal-word-wrap" aria-hidden="true">
            <motion.span
              className={`reveal-word ${isAccent ? "accent" : ""}`}
              variants={{
                hidden: { y: "110%", opacity: 0 },
                shown: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {w}
            </motion.span>
          </span>{" "}
        </Fragment>
      ))}
    </Tag>
  );
}

export default RevealText;
