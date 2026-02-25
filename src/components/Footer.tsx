import { siteContent } from "../content/siteContent";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <a href="#hero" className="brand footer-brand" aria-label="JOI home">
            <img src="/joi-logo-wide.png" alt={siteContent.brand} className="brand-logo brand-logo-footer" />
          </a>
          <p className="footer-copy">
            JOI is the desktop AI operator for teams that need execution speed with governance.
          </p>
        </div>
        <nav aria-label="Footer links" className="footer-links">
          {siteContent.footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
