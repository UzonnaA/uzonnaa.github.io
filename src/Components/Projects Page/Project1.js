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
          src="/images/search_page.png"
          alt="Search_Page_Java"
          // This changes how far the title and text will slide in. Less means it slides in more. (Was 15%)
          width="45%"
          height="auto"
          loading="lazy"
        />
        {/* {isDesktopOrLaptop && (
          <>
            <img
              className="project__image"
              src="/images/search_page.png"
              alt="Search_Page_Java"
              width="15%"
              height="auto"
              loading="lazy"
            />
            <img
              className="project__image"
              src="/images/stats_page.png"
              alt="Stats_Page_Java"
              width="15%"
              height="auto"
              loading="lazy"
            />
          </>
        )} */}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Job Application Tracker</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">fullstack web app</span> built to simplify the job search. Users can <span className="project__specialText">track applications</span>, update their status, and filter by company or tags. 
            A <span className="project__specialText">built-in dashboard</span> shows helpful stats, like how many applications are in progress or have been rejected. 
            Everything is protected by <span className="project__specialText">secure JWT login</span>, 
            and the clean layout makes it easy to manage and review your progress over time.
          
          
          </p>


            
          <p className="project__tech project__body">
            &gt; Java · Spring Boot · JUnit ·  PostgreSQL
          </p>

          <p className="project__tech project__body">
            &gt; Next.js · TypeScript · Tailwind CSS · Jest
          </p>

          <p className="project__tech project__body">
            Deployed on Railway · Render · Vercel
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/UzonnaA/job-tracker-fullstack"
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
