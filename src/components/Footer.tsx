import { siteContent } from "../content/siteContent";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={30} />
          <p>Your personal AI, on your desktop.</p>
        </div>
        <nav aria-label="Footer links" className="footer-links">
          {siteContent.footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} JOI. All rights reserved.</span>
        <span>Made in India</span>
      </div>
    </footer>
  );
}

export default Footer;
