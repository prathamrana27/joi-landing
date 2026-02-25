import { useEffect, useState } from "react";
import { siteContent } from "../content/siteContent";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth > 1080) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#hero" className="brand" aria-label="JOI home">
          <img src="/joi-logo-wide.png" alt={siteContent.brand} className="brand-logo" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-nav"
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Primary"
        >
          {siteContent.navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#final-cta" className="btn btn-small btn-primary" onClick={closeMenu}>
            Join Waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
