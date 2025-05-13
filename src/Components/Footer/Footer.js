import Logo from "../NavBar/Logo";
import "./Footer.css";
import SocialMediaIcons from "./SocialMediaIcons";
import SourceCodeLink from "./SourceCodeLink";

function Footer() {
  return (
    <footer className="footer">
      <SocialMediaIcons />
      <div className="footer-logo">
        <Logo />
      </div>
      
      <p className="footer__copyright">Copyright © 2025 Uzonna Alexander.</p>
      <SourceCodeLink />
    </footer>
  );
}

export default Footer;
