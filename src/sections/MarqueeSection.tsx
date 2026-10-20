import { siteContent } from "../content/siteContent";

// Two endless rows of things people ask JOI, drifting in opposite directions.
function MarqueeSection() {
  const items = siteContent.marquee;
  const half = Math.ceil(items.length / 2);
  const rows = [items.slice(0, half), items.slice(half)];

  return (
    <section className="marquee-section" aria-label="Things you can ask JOI">
      {rows.map((row, r) => (
        <div key={r} className={`marquee ${r === 1 ? "reverse" : ""}`}>
          <div className="marquee-track">
            {[...row, ...row, ...row, ...row].map((text, i) => (
              <span key={`${text}-${i}`} className="marquee-chip" aria-hidden={i >= row.length}>
                <span className="quote-mark">“</span>
                {text}
                <span className="quote-mark">”</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default MarqueeSection;
