import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blast from "../BlastAnimation/Blast";

import "./header.scss";
import CharacterCanvas from "../characterCanvas/characterCanvas";

const nameArray = ["a", "s", "a", "m", "a", "n", ","];
const jobArray = [
  "F",
  "r",
  "o",
  "n",
  "t",
  "E",
  "n",
  "d",
  " ",
  "D",
  "e",
  "v",
  "e",
  "l",
  "o",
  "p",
  "e",
  "r",
];
function Header() {
  const [letterClass, setLetterClass] = useState("text-animation");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animation-hover");
    }, 4500);
  }, []);

  return (
    <section className="section-1 header__container section__padding">
      <main className="intro-page">
        <h1>
          <span className={`${letterClass} _10`}>H</span>
          <span className={`${letterClass} _11`}>i</span>
          <span className={`${letterClass} _12`}>,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'</span>
          <span className={`${letterClass} _15 `}>m</span>{" "}
          <div className="home-logo">
            <div className="logo switch__color-logo">
              <span className="switch__color-span">y</span>
            </div>
          </div>
          <Blast
            letterClass={letterClass}
            arrayStr={nameArray}
            letterIndex={15}
          />
          <br />
          <Blast
            letterClass={letterClass}
            arrayStr={jobArray}
            letterIndex={22}
          />
        </h1>
        <Link to={"/portfolio/contact"} className="contact-button">
          <div>
            <span className="bg switch__bg"></span>
            <span className="base switch__border-color"></span>
            <span className="text">Contact me</span>
          </div>
        </Link>
      </main>
      <CharacterCanvas />
    </section>
  );
}

export default Header;
