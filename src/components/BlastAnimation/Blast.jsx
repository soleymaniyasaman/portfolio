import React from "react";
import "./blast.scss";

function Blast({ letterClass, arrayStr, letterIndex }) {
  return (
    <span>
      {arrayStr.map((letter, index) => {
        return (
          <span
            key={index + letter}
            className={`${letterClass} _${index + letterIndex}`}
          >
            {console.log(index + letterIndex)}
            {letter}
          </span>
        );
      })}
    </span>
  );
}

export default Blast;
