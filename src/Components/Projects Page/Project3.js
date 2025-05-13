import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/flavour_flow_image_large.png"
          srcset="/images/flavour_flow_image_large.png 750w, /images/flavour_flow_image_large.png 1468w"
          sizes="50vw"
          alt="Java Inventory (Unfinished)"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Java Inventory System</h3>
          <p className="project__description project__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse illo, tempore beatae ipsam consectetur, provident rem excepturi placeat accusantium qui fugit, reiciendis ad at corrupti deleniti eveniet? Laudantium, nostrum cupiditate!
          </p>
          <p className="project__tech project__body">
            &gt; Java · IntelliJ
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/uzonnaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project3;
