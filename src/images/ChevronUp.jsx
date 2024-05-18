import React from "react";
import PropTypes from "prop-types";

const ChevronUp = ({ text = "#00f", className }) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" fill={text} viewBox="0 0 24 24">
        <title>chevron-up</title>
        <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
      </svg>
    </div>
  );
};

ChevronUp.propTypes = {
  bg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  tertiary: PropTypes.string.isRequired,
  quaternary: PropTypes.string.isRequired,
  quinary: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ChevronUp;
