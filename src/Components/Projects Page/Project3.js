import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/bug_tracker.png"
          // srcset="/images/flavour_flow_image_large.png 750w, /images/flavour_flow_image_large.png 1468w"
          // sizes="50vw"
          alt="Java Inventory (Unfinished)"
          width="45%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Bug Tracking System 🛠️</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">full-stack bug tracking app</span> built with <span className="project__specialText">C# and Angular</span>, 
            designed to mimic a real QA workflow. The backend handles validation and 
            clean API design, while the Angular frontend focuses on reporting and 
            tracking issues. The project simulates how real bugs move through a dev team, 
            blending both QA and development workflows.
          </p>
          <p className="project__tech project__body">
            &gt; Work In Progress
          </p>

          <p className="project__tech project__body">
            &gt; C# · Python · .NET 9.0 · PostgreSQL · xUnit · Swagger
          </p>
          <p className="project__tech project__body">
            &gt; Angular · TypeScript · Cypress · Playwright · Tailwind
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/UzonnaA/bug-tracker"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">(WIP) Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project3;
