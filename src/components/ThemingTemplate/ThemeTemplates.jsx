import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsMoonStars, BsFillSunFill } from "react-icons/bs";
import { GlobalContext } from "../../hooks/contextAPI";

import { BsXLg } from "react-icons/bs";
import "./themeTemplate.scss";

const ThemeTemplates = React.memo(() => {
  const {
    isTemplateOpen,
    openTemplate,
    handleMode,
    closeTemplate,
    changeTemp,
    handleTemp,
    colorMode,
  } = GlobalContext();

  return (
    <>
      {/* FiSettings wrapper */}
      <div className="theme-icon-wrapper" onClick={openTemplate}>
        <FiSettings className="theme-icon switch__color" />
      </div>
      {/* theme wrapper*/}
      <div
        className={`${
          isTemplateOpen
            ? "theme-wrapper show-template"
            : "theme-wrapper hide-template"
        }`}
      >
        {/* theme header */}
        <div className="theme-header">
          <span>Theme Template</span>
          <span>
            <BsXLg
              onClick={closeTemplate}
              className="close-template switch__color"
            />
          </span>
        </div>
        {/* mode */}
        <div className="mode">
          <div
            className={`${colorMode === "light-mode" ? "active-mode" : ""}`}
            onClick={() => handleMode("light-mode")}
          >
            <BsFillSunFill className="icon switch__color" />
          </div>
          <div
            className={`${colorMode === "dark-mode" ? "active-mode" : ""}`}
            onClick={() => handleMode("dark-mode")}
          >
            <BsMoonStars className="icon switch__color " />
          </div>
        </div>
        {/* template wrapper */}
        <div className="template-wrapper">
          {/* template 1 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-1" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-1")}
          >
            <div className="template-1"></div>
          </div>
          {/* template 2 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-2" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-2")}
          >
            <div className="template-2"></div>
          </div>
          {/* template 3 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-3" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-3")}
          >
            <div className="template-3"></div>
          </div>
          {/* template 4 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-4" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-4")}
          >
            <div className="template-4"></div>
          </div>
          {/* template 5 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-5" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-5")}
          >
            <div className="template-5"></div>
          </div>
          {/* template 6 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-6" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-6")}
          >
            <div className="template-6"></div>
          </div>
          {/* template 7 wrapper */}
          <div
            className={`template ${
              changeTemp === "template-7" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-7")}
          >
            <div className="template-7"></div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ThemeTemplates;
