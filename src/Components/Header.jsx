/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const { quaternaryColor } = props;

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: quaternaryColor,
        opacity: 0.76,
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

Header.propTypes = {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  tertiaryColor: PropTypes.string,
  quaternaryColor: PropTypes.string,
  quinaryColor: PropTypes.string,
};

export default Header;
