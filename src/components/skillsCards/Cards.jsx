import React from "react";
import Fade from "react-reveal/Fade";
import { skillSet } from "../../data/data";
import "./cards.scss";

function Cards() {
  return (
    <div className="about-description-skills">
      {skillSet.map((item, index) => (
        <Fade bottom key={item + index}>
          <a
            href={item.url}
            className="skill-container"
            rel="noopener noreferrer"
            target="_blank"
          >
            {item.icon}
            <span className="skill__name">{item.spanText}</span>
          </a>
        </Fade>
      ))}
    </div>
  );
}

export default Cards;
