import React from "react";
import PropTypes from "prop-types";

const ChevronDown = ({
  //   bg = "#00f",
  text = "#00f",
  //   primary = "#00f",
  //   secondary = "#00f",
  //   tertiary = "#00f",
  //   quaternary = "#00f",
  //   quinary = "#00f",
  className,
}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" fill={text} viewBox="0 0 24 24">
        <title>chevron-down</title>
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </svg>
    </div>
  );
};

ChevronDown.propTypes = {
  bg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  tertiary: PropTypes.string.isRequired,
  quaternary: PropTypes.string.isRequired,
  quinary: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ChevronDown;
