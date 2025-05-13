import LightWave from "../Waves/LightWave";
import "./Contact.css";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div data-aos="fade-right" className="contact__body">
        <h2 className="contact__heading">Contact Me</h2>
        {/* <p className="contact__p">
          Currently I am looking for a summer 2022 Software Development
          Internship
        </p> */}
        <div className="contact__option">
          <FaMailBulk className="contact__logo" size={45} />
          <a href="mailto: uzonna101@outlook.com">
            <span className="contact__text">uzonna101@outlook.com</span>
          </a>
        </div>
        <div className="contact__option">
          <FaLinkedin className="contact__logo" size={45} />
          <a
            href="https://linkedin.com/in/uzonna-alexander/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
          >
            <span className="contact__text">uzonna-alexander</span>
          </a>
        </div>
      </div>
      <LightWave />
    </section>
  );
}

export default Contact;
