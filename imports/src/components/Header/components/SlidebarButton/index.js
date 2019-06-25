import React, { Component } from "react";
import PropTypes from "prop-types";
import className from "classnames";
import _ from "underscore";

const noSlidebarPath = ["/"];

const SlidebarButton = ({ toggleSidebar, isSidebarActive, toggleMenu, pathname }) => {
  return (
    <div
      onClick={() => {
        toggleSidebar(!isSidebarActive);
        toggleMenu(false);
      }}
      onKeyDown={() => {
        toggleSidebar(!isSidebarActive);
        toggleMenu(false);
      }}
      role="button"
      tabIndex="0"
      className={className(
        "navbar-burger navbar-item",
        // _.contains(noSlidebarPath, pathname) ? "is-hidden" : ""
      )}
      data-target="DesktopHeader"
      style={{ marginLeft: 0, justifyContent: "center" }}
    >
      <div className="icon">
        <i className="fas fa-align-left" />
      </div>
    </div>
  );
};

SlidebarButton.propTypes = {};

export default SlidebarButton;
