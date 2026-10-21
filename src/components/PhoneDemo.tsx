import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "./Icon";

// Looping re-enactment of the phone channel: ask from the phone, JOI answers, a send waits
// for approval on the PC (the floating PC card), then the phone confirms. Sample data only.

type Msg = { id: string; from: "me" | "joi"; text: string; tone?: "wait" | "ok" };
type PcState = "hidden" | "pending" | "pressing" | "approved";
type Frame = { wait: number; msgs?: (m: Msg[]) => Msg[]; pc?: PcState; typing?: boolean };

const add = (m: Msg) => (list: Msg[]) => [...list, m];

const SCRIPT: Frame[] = [
  { wait: 800, msgs: add({ id: "a", from: "me", text: "Any new emails?" }), typing: true },
  { wait: 1500, msgs: add({ id: "b", from: "joi", text: "3 new: Priya sent the launch deck, your HDFC statement is in, and Rahul asks \"lunch at 1?\"" }), typing: false },
  { wait: 2600, msgs: add({ id: "c", from: "me", text: "Reply to Rahul: yes, see you at 1" }), typing: true },
  { wait: 1400, msgs: add({ id: "d", from: "joi", text: "That sends an email, so I need your OK on your PC.", tone: "wait" }), typing: false, pc: "pending" },
  { wait: 2200, pc: "pressing" },
  { wait: 400, pc: "approved" },
  { wait: 900, msgs: add({ id: "e", from: "joi", text: "Sent ✓ Rahul knows you'll be there.", tone: "ok" }) },
  { wait: 3400, msgs: () => [], pc: "hidden" },
];

const STATIC: Msg[] = [
  { id: "a", from: "me", text: "Any new emails?" },
  { id: "b", from: "joi", text: "3 new: Priya sent the launch deck, your HDFC statement is in, and Rahul asks \"lunch at 1?\"" },
];

function PhoneDemo() {
  const reduce = useReducedMotion();
  const [msgs, setMsgs] = useState<Msg[]>(reduce ? STATIC : []);
  const [pc, setPc] = useState<PcState>("hidden");
  const [typing, setTyping] = useState(false);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const f = SCRIPT[frame];
    const t = window.setTimeout(() => {
      if (f.msgs) setMsgs(f.msgs);
      if (f.pc) setPc(f.pc);
      if (f.typing !== undefined) setTyping(f.typing);
      setFrame((i) => (i + 1) % SCRIPT.length);
    }, f.wait);
    return () => window.clearTimeout(t);
  }, [frame, reduce]);

  return (
    <div className="phone-stage" role="img" aria-label="Animated preview: chatting with JOI from a phone, with approval on the PC">
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-header">
          <span className="phone-avatar">
            <img src="/joi-mark.svg" alt="" width={30} height={30} />
          </span>
          <div>
            <div className="phone-name">JOI</div>
            <div className="phone-status">{typing ? "typing…" : "online · your PC"}</div>
          </div>
        </div>
        <div className="phone-chat">
          <AnimatePresence initial={false} mode="popLayout">
            {msgs.map((m) => (
              <motion.div
                key={m.id}
                layout
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className={`phone-msg ${m.from === "me" ? "from-me" : "from-joi"} ${m.tone ? `tone-${m.tone}` : ""}`}
              >
                {m.text}
              </motion.div>
            ))}
            {typing && (
              <motion.div key="typing" layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="phone-msg from-joi phone-typing">
                <span />
                <span />
                <span />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="phone-input">
          <span>Message JOI</span>
          <span className="phone-send">
            <Icon name="arrow" size={14} strokeWidth={2.4} />
          </span>
        </div>
      </div>

      <AnimatePresence>
        {pc !== "hidden" && (
          <motion.div
            key="pc"
            className={`pc-card ${pc}`}
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, transition: { duration: 0.3 } }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <div className="pc-card-top">
              <Icon name="monitor" size={15} /> On your PC
            </div>
            <div className="demo-approval-title">
              <Icon name="shield" size={16} /> Allow JOI to send an email?
            </div>
            <div className="demo-approval-args">to: rahul@… · "Yes, see you at 1"</div>
            {pc === "approved" ? (
              <div className="demo-approval-ok">
                <Icon name="check" size={14} strokeWidth={2.6} /> Approved
              </div>
            ) : (
              <div className="demo-approval-actions">
                <span className={`demo-approve ${pc === "pressing" ? "pressing" : ""}`}>Approve</span>
                <span className="demo-deny">Deny</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PhoneDemo;
