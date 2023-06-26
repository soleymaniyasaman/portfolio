import React from "react";
import { Link, NavLink } from "react-router-dom";

import { sideBarMenu, socialIcons } from "../../data/data";

import "./sidebar.scss";

function Sidebar() {
  return (
    <aside className="aside">
      <div className="aside-wrapper">
        <Link to="/" className="logo-section">
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
                  to={url}
                  className={({ isActive }) => {
                    return isActive ? " nav__links active-links" : "nav__links";
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
  );
}

export default Sidebar;
