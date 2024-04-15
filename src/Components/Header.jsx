/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const { primaryColor } = props;

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: primaryColor,
        opacity: 0.5,
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a className="header-link" href="#home">
        Home
      </a>
      <a className="header-link" href="#about">
        About
      </a>
      <a className="header-link" href="#portfolio">
        Portfolio
      </a>
      <a className="header-link" href="#footer">
        Contact
      </a>
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
