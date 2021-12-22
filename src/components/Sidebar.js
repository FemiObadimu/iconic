import React from "react";
import navbarItems from "./Navbaritems";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ isopen, toggle }) => {
  let opacityClasses = ["sidebar-container"];
  if (isopen) {
    opacityClasses.push("opacity-on");
  } else {
    opacityClasses.push("opacity-off");
  }

  return (
    <div
      className={opacityClasses.join(" ")}
      isopen={isopen.toString()}
      onClick={toggle}
    >
      <div className="icon">
        <FontAwesomeIcon
          icon={faTimes}
          className="close-icon"
          onClick={toggle}
        />
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          {navbarItems.map((item, index) => (
            <a
              key={index}
              className="sidebar-links"
              href="https://www.twitter.com/FemiObadimu3"
              rel="noreferrer"
              target="_blank"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
