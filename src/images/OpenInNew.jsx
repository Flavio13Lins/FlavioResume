import React from "react";
import PropTypes from "prop-types";

const Background1 = ({
  //   bg = "#00f",
  text = "#00f",
  //   primary = "#00f",
  //   secondary = "#00f",
  //   tertiary = "#00f",
  //   quaternary = "#00f",
  //   quinary = "#00f",
  className,
}) => (
  <div className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>open-in-new</title>
      <path
        fill={text}
        d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
      />
    </svg>
  </div>
);

Background1.propTypes = {
  bg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  tertiary: PropTypes.string.isRequired,
  quaternary: PropTypes.string.isRequired,
  quinary: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Background1;
