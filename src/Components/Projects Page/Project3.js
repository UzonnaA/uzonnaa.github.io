import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/data_pipeline.png"
          // srcset="/images/flavour_flow_image_large.png 750w, /images/flavour_flow_image_large.png 1468w"
          // sizes="50vw"
          alt="Java Inventory (Unfinished)"
          width="45%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Job Market Data Pipeline 🛠️</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">Python-based</span> data engineering project that uses FastAPI, Airflow, PostgreSQL, and Kafka to collect, process, and 
            serve job market insights. It is being built to <span className="project__specialText">simulate real-world ETL workflows</span> and deploy on AWS. 
            The goal is to explore trends in job postings and skills across industries.
          </p>
          <p className="project__tech project__body">
            &gt; Work In Progress
          </p>

          <p className="project__tech project__body">
            &gt; Python · FastAPI · PostgreSQL · AWS · Airflow · Kafka
          </p>
          {/* <a
            className="project__sourceCode"
            href="https://github.com/uzonnaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a> */}
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project3;
