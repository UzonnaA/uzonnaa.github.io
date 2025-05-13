import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
          👋 Hello! My name is Uzonna Alexander and I am a Computer Science graduate from {" "}
          <span className="about__specialText">Carleton University</span>.

          <br />
          <br />

          Fill 

          <br /> 
          <br />

          Fill
          
          <br /> 
          <br />
          
          Fill
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </div>
      <img
        className="about__headshot"
        src="/images/jack_parsons_headshot.jpg"
        alt="Brand Logo"
        width="300"
        height="300"
      />
      <LightWave />
    </section>
  );
}

export default About;
