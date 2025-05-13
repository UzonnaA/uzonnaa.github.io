import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            AI Discord Bot
          </h3>
          <p className="project__description project__body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic distinctio quod maxime iure neque magnam amet maiores officia id? Nihil similique pariatur vel ea, optio aut et non recusandae nam.
          </p>
          <p className="project__tech project__body">
            &gt; Python · Discord API · OpenAI
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/uzonnaa"
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
          src="/images/covid_bot_project_image_large.jpg"
          srcset="/images/covid_bot_project_image_small.jpg 750w, /images/covid_bot_project_image_large.jpg 1468w"
          sizes="50vw"
          alt="AI Bot (Unfinished)"
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
