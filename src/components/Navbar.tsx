import { useEffect, useState } from "react";
import { siteContent } from "../content/siteContent";
import Logo from "./Logo";
import Icon from "./Icon";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-brand" aria-label="JOI home" onClick={closeMenu}>
          <Logo size={30} />
        </a>

        <nav id="primary-nav" className="nav-links" aria-label="Primary">
          {siteContent.navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href={siteContent.downloadUrl} rel="noopener" className="btn btn-primary btn-sm nav-download" onClick={closeMenu}>
            <Icon name="download" size={16} strokeWidth={2.2} />
            Download
          </a>
        </nav>

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
      </div>
    </header>
  );
}

export default Navbar;
