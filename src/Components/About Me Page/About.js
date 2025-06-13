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

            I recently built a <span className="about__specialText">job application tracker</span> that helps organize and manage the job hunt in a simple way. 
            I also created a <span className="about__specialText">3D horror game</span> in C++, where I had fun experimenting with movement, lighting, and gameplay elements.


          <br /> 
          <br />

          I'm big on clean architecture, testing, and automation. Right now, 
          I'm especially focused on <span className="about__specialText">backend development and QA automation</span>, and 
          I'm learning more about testing frameworks and CI tools to build more reliable systems.

          
          <br /> 
          <br />
          {/* Fill */}
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
        src="/images/self_image.jpg"
        alt="Brand Logo"
        width="375"
        height="300"
      />
      <LightWave />
    </section>
  );
}

export default About;
