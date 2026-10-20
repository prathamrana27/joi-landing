import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "./Icon";

// A looping, scripted re-enactment of the JOI app: a question, tools running, a streamed
// answer, then a send that waits for approval. Sample data only; it's an illustration.

type Item =
  | { id: string; kind: "user"; text: string }
  | { id: string; kind: "tool"; label: string; done: boolean }
  | { id: string; kind: "joi"; text: string }
  | { id: string; kind: "approval"; state: "pending" | "pressing" | "approved" };

type Frame = { wait: number; apply: (items: Item[]) => Item[] };

const add = (item: Item) => (items: Item[]) => [...items, item];
const finish = (id: string) => (items: Item[]) =>
  items.map((it) => (it.id === id && it.kind === "tool" ? { ...it, done: true } : it));
const approval = (state: "pressing" | "approved") => (items: Item[]) =>
  items.map((it) => (it.kind === "approval" ? { ...it, state } : it));

const ANSWER_1 =
  "You have **3 meetings**: standup at 10, design review at 2, and a call with Rahul at 5. **2 emails** need a reply, including Priya's about the launch deck.";
const ANSWER_2 = "Done. Sent to Priya with the deck attached.";

const SCRIPT: Frame[] = [
  { wait: 700, apply: add({ id: "u1", kind: "user", text: "What's on my plate today?" }) },
  { wait: 900, apply: add({ id: "t1", kind: "tool", label: "Checking your calendar", done: false }) },
  { wait: 1100, apply: finish("t1") },
  { wait: 250, apply: add({ id: "t2", kind: "tool", label: "Reading your inbox", done: false }) },
  { wait: 1100, apply: finish("t2") },
  { wait: 350, apply: add({ id: "j1", kind: "joi", text: ANSWER_1 }) },
  { wait: 4600, apply: add({ id: "u2", kind: "user", text: "Send Priya the deck and say I'll join at 2." }) },
  { wait: 1100, apply: add({ id: "a1", kind: "approval", state: "pending" }) },
  { wait: 2000, apply: approval("pressing") },
  { wait: 380, apply: approval("approved") },
  { wait: 420, apply: add({ id: "t3", kind: "tool", label: "Sending email", done: false }) },
  { wait: 950, apply: finish("t3") },
  { wait: 300, apply: add({ id: "j2", kind: "joi", text: ANSWER_2 }) },
  { wait: 4200, apply: () => [] },
];

const STATIC_ITEMS: Item[] = [
  { id: "u1", kind: "user", text: "What's on my plate today?" },
  { id: "t1", kind: "tool", label: "Checking your calendar", done: true },
  { id: "t2", kind: "tool", label: "Reading your inbox", done: true },
  { id: "j1", kind: "joi", text: ANSWER_1 },
];

function ChatDemo() {
  const reduce = useReducedMotion();
  const [items, setItems] = useState<Item[]>(reduce ? STATIC_ITEMS : []);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const step = SCRIPT[frame];
    const timer = window.setTimeout(() => {
      setItems(step.apply);
      setFrame((f) => (f + 1) % SCRIPT.length);
    }, step.wait);
    return () => window.clearTimeout(timer);
  }, [frame, reduce]);

  const typing = !reduce && items.length > 0 && items[items.length - 1].kind === "user";

  return (
    <div className="demo-window" role="img" aria-label="Animated preview of a conversation with JOI">
      <div className="demo-titlebar">
        <span className="demo-dot" />
        <span className="demo-dot" />
        <span className="demo-dot" />
        <span className="demo-title">
          <img src="/joi-mark.svg" alt="" width={16} height={16} /> JOI
        </span>
      </div>
      <div className="demo-body">
        <AnimatePresence initial={false} mode="popLayout">
          {items.map((it) => (
            <motion.div
              key={it.id}
              layout
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className={`demo-row demo-row-${it.kind}`}
            >
              {it.kind === "user" && <div className="demo-bubble demo-user">{it.text}</div>}
              {it.kind === "tool" && (
                <div className={`demo-tool ${it.done ? "done" : ""}`}>
                  {it.done ? <Icon name="check" size={14} strokeWidth={2.6} /> : <span className="demo-spinner" />}
                  {it.label}
                </div>
              )}
              {it.kind === "joi" && (
                <div className="demo-joi">
                  <img src="/joi-mark.svg" alt="" width={26} height={26} />
                  <div className="demo-bubble demo-answer">
                    <Typed text={it.text} instant={Boolean(reduce)} />
                  </div>
                </div>
              )}
              {it.kind === "approval" && <ApprovalCard state={it.state} />}
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="demo-row"
            >
              <div className="demo-typing">
                <span />
                <span />
                <span />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="demo-composer">
        <span>Message JOI…</span>
        <span className="demo-send">
          <Icon name="arrow" size={15} strokeWidth={2.4} />
        </span>
      </div>
    </div>
  );
}

function ApprovalCard({ state }: { state: "pending" | "pressing" | "approved" }) {
  return (
    <div className={`demo-approval ${state}`}>
      <div className="demo-approval-title">
        <Icon name="shield" size={16} /> Allow JOI to send an email?
      </div>
      <div className="demo-approval-args">
        to: priya@acme.in
        <br />
        subject: Launch deck
      </div>
      {state === "approved" ? (
        <div className="demo-approval-ok">
          <Icon name="check" size={14} strokeWidth={2.6} /> Approved
        </div>
      ) : (
        <div className="demo-approval-actions">
          <span className={`demo-approve ${state === "pressing" ? "pressing" : ""}`}>Approve</span>
          <span className="demo-deny">Deny</span>
        </div>
      )}
    </div>
  );
}

// Streams the answer in character by character, keeping **bold** segments bold.
function Typed({ text, instant }: { text: string; instant: boolean }) {
  const visibleLength = text.replace(/\*\*/g, "").length;
  const [shown, setShown] = useState(instant ? visibleLength : 0);

  useEffect(() => {
    if (instant) return;
    const id = window.setInterval(() => {
      setShown((n) => {
        if (n >= visibleLength) {
          window.clearInterval(id);
          return n;
        }
        return n + 2;
      });
    }, 22);
    return () => window.clearInterval(id);
  }, [visibleLength, instant]);

  const segments = text.split(/(\*\*[^*]+\*\*)/).filter(Boolean);
  let budget = shown;
  return (
    <>
      {segments.map((seg, i) => {
        const bold = seg.startsWith("**");
        const raw = bold ? seg.slice(2, -2) : seg;
        const visible = raw.slice(0, Math.max(0, budget));
        budget -= raw.length;
        if (!visible) return null;
        return bold ? <strong key={i}>{visible}</strong> : <span key={i}>{visible}</span>;
      })}
      {shown < visibleLength && <span className="demo-caret" />}
    </>
  );
}

export default ChatDemo;
