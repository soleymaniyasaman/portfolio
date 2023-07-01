import React, { useEffect, useState } from "react";
import myCV from "../../assets/myCV.pdf";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import "./about.scss";
import { Cards, Blast } from "../../components";

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
    }, 3000);
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
                I’m an ambitious Front-End Developer who's passionate about
                coding and looking for a role in the established IT company with
                the opportunity to work with the latest technologies on
                challenging and diverse projects.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                I’m from Iran but currently living in Turkey. I’m a freelancer
                who loves building cool UI effects, dynamic webpages with
                amazing animations and creating intuitive, dynamic user
                experiences. I also love to reach out to new opportunities
                across the globe that will enhance my skills and get the
                opportunity to work with other programmers as well
              </p>
            </Fade>
            <Fade bottom>
              <p>
                If I could say one of the most interesting things about me, it's
                the fact that I'm always ready for any challenges that comes to
                my way. Here's my CV below for more details.
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
