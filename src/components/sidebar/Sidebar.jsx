import React, { useReducer } from "react";
import { Link, NavLink } from "react-router-dom";
import { sideBarMenu, socialIcons } from "../../data/data";
import { reducer } from "../../hooks/useReducer";

import { BsXLg, BsListNested } from "react-icons/bs";
import "./sidebar.scss";

const defaultOptions = {
  showAside1: false,
  openCloseNav1: false,
};

const Sidebar = React.memo(() => {
  const [state, dispatch] = useReducer(reducer, defaultOptions);
  return (
    <>
      <BsListNested
        className="menu-icon switch__color"
        onClick={() => dispatch({ type: "OPEN_NAVBAR" })}
      />
      <aside
        className={`${state.openCloseNav1 ? "aside open-sidebar" : "aside"} ${
          state.showAside1 ? "aside show-asideBar" : "aside"
        }`}
      >
        <div className="aside-wrapper">
          <BsXLg
            onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
            className="close-btn switch__color"
          />
          <Link
            to="/"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="logo-section"
          >
            <div className="logo">
              <span className="switch__color-brand">y</span>
            </div>
            <span className="switch__color">
              YASAMAN
              <br />
              WEB DEVELOPER
            </span>
          </Link>
          <ul className="side-link">
            {sideBarMenu.map((link, index) => {
              const { text, icon, url } = link;
              return (
                <li key={index}>
                  <NavLink
                    onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
                    to={url}
                    className={({ isActive }) => {
                      return isActive
                        ? " nav__links active-links"
                        : "nav__links";
                    }}
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="social-icon">
            {socialIcons.map((icons, index) => {
              const { icon, url } = icons;
              return (
                <a href={url} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
});

export default Sidebar;
