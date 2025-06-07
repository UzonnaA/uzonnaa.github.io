import "./LeftSocialMediaIcons.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function LeftSocialMediaIcons() {
  return (
    <div className="leftSocialMediaIcons">
      <hr className="leftSocialMediaIcons__mobileLeftBar mobile__hr" />
      <a
        href="https://github.com/uzonnaa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my GitHub"
      >
        <FaGithub className="leftSocialMediaIcons__github icon" size={30} />
      </a>
      <a
        href="https://linkedin.com/in/uzonna-alexander/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Linkedin"
      >
        <FaLinkedin className="leftSocialMediaIcons__linkedin icon" size={30} />
      </a>
      <div className="leftSocialMediaIcons__verticalBar" />
      <hr className="leftSocialMediaIcons__mobileRightBar mobile__hr" />
    </div>
  );
}

export default LeftSocialMediaIcons;
