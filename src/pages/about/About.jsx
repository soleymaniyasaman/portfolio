import React, { useEffect, useState } from "react";
import myCV from "../../assets/myCV.pdf";
import Blast from "../../components/BlastAnimation/Blast";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import "./about.scss";
import Cards from "../../components/skillsCards/Cards";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    "A",
    "b",
    "o",
    "u",
    "t",
    " ",
    "&",
    " ",
    "S",
    "k",
    "i",
    "l",
    "l",
    "s",
  ];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animation-hover");
    }, 4500);
  }, []);

  return (
    <>
      <Reveal>
        <div className="fake-big">About</div>
      </Reveal>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h2 aria-label="About & Skills">
              <Blast
                letterClass={letterClass}
                arrayStr={nameArray}
                letterIndex={15}
              />
            </h2>
            <Fade bottom>
              <p>
                Developer with 3 years of experience implementing React,
                JavaScript, HTML/CSS to improve Front-end development technology
                in UI of single-page sites. Interested in developing complex
                solutions, creating responsive designs possessing creative
                thinking. Prepared companies to develop goals and increased
                usage of projects by 70%
              </p>
            </Fade>
            <Fade bottom>
              <p>
                Developer with 3 years of experience implementing React,
                JavaScript, HTML/CSS to improve Front-end development technology
                in UI of single-page sites. Interested in developing complex
                solutions, creating responsive designs possessing creative
                thinking. Prepared companies to develop goals and increased
                usage of projects by 70%
              </p>
            </Fade>
            <Fade bottom>
              <p>
                Developer with 3 years of experience implementing React,
                JavaScript, HTML/CSS to improve Front-end development technology
                in UI of single-page sites. Interested in developing complex
                solutions, creating responsive designs possessing creative
                thinking. Prepared companies to develop goals and increased
                usage of projects by 70%
              </p>
            </Fade>
            <Fade left>
              <a href={myCV} download className="contact-button submit-button">
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download CV</span>
                </div>
              </a>
            </Fade>
          </div>
        </article>
        <Cards />
      </div>
    </>
  );
}

export default About;
