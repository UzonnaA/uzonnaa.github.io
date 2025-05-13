import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <img
          className="project__image project__specialMobileImage"
          src="/images/health_fusion_home.png"
          alt="NES Emulator (Unfinished)"
          // This changes how far the title and text will slide in. Less means it slides in more. (Was 15%)
          width="45%"
          height="auto"
          loading="lazy"
        />
        {/* {isDesktopOrLaptop && (
          <>
            <img
              className="project__image"
              src="/images/health_fusion_add.png"
              alt="Health Fusion Map Page"
              width="15%"
              height="auto"
              loading="lazy"
            />
            <img
              className="project__image"
              src="/images/health_fusion_map.png"
              alt="Health Fusion Project Add Page"
              width="15%"
              height="auto"
              loading="lazy"
            />
          </>
        )} */}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">NES Emulator</h3>
          <p className="project__description project__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim beatae officiis recusandae voluptate corrupti, libero harum nam molestiae delectus minima, porro maxime sed consequatur ullam in commodi nemo velit.
          </p>
          <p className="project__tech project__body">
            &gt; C++ · Github · Etc
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

export default Project1;
