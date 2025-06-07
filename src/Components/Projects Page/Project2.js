import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            Selenium Card Game
          </h3>
          <p className="project__description project__body">
            A <span className="project__specialText">browser-based multiplayer card game</span> built with Java. Players can either play manually through the UI or run <span className="project__specialText">automated Selenium tests</span> that simulate real gameplay. It includes custom rules, UI feedback, and full test coverage to ensure a smooth experience across sessions.
          </p>
          <p className="project__tech project__body">
            &gt; Java · Spring Boot · JUnit · Cucumber
          </p>

          <p className="project__tech project__body">
            &gt; HTML · CSS · JavaScript · Selenium
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/UzonnaA/Card-Game-Selenium"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
        <img
          className="project__image project__imageDark"
          src="/images/selenium_large.png"
          srcset="/images/selenium_small.png 763w, /images/selenium_large.png 1860w"
          sizes="50vw"
          alt="AI  (Unfinished)"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
