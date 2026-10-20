import { useRef } from "react";
import type { PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Icon from "./Icon";
import { siteContent } from "../content/siteContent";

type DownloadButtonProps = {
  label?: string;
  size?: "md" | "lg";
  light?: boolean;
};

// The primary call to action. It leans slightly toward the cursor ("magnetic").
function DownloadButton({ label = "Download for Windows", size = "md", light = false }: DownloadButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });

  function onMove(e: PointerEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={siteContent.downloadUrl}
      rel="noopener"
      className={`btn btn-primary btn-${size} ${light ? "btn-on-clay" : ""}`}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      whileTap={{ scale: 0.97 }}
    >
      <Icon name="download" size={size === "lg" ? 20 : 18} strokeWidth={2.2} />
      <span>{label}</span>
    </motion.a>
  );
}

export default DownloadButton;
