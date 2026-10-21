import RevealText from "../components/RevealText";

// Three keycaps that press themselves in sequence, on a loop.
function ShortcutSection() {
  return (
    <section className="section shortcut-section" aria-label="Keyboard shortcut">
      <div className="container shortcut-inner">
        <div className="keys" aria-hidden="true">
          <span className="key key-1">Ctrl</span>
          <span className="key-plus">+</span>
          <span className="key key-2">Alt</span>
          <span className="key-plus">+</span>
          <span className="key key-3 key-accent">J</span>
        </div>
        <RevealText text="JOI is always" accent="one shortcut away." />
        <p className="section-description center">
          Press it from any app and JOI pops up as a small assistant in the corner of your screen. Ask by voice or text, then get back to what you were doing.
        </p>
      </div>
    </section>
  );
}

export default ShortcutSection;
