/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import image from "../images/self-photho.jpeg";

const imageAltText = "Flavio Lins da Mota Nascimento photo";

const Home = ({ shortName, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="homeBackground" src={image} alt={imageAltText} />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "30rem" }}>
        <h1 className="name-home">{shortName}</h1>
        <h2 className="title-home">{title}</h2>
      </div>
      <a href="#about" style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="arrow-down" />
      </a>
    </section>
  );
};

Home.defaultProps = {
  shortName: "",
  title: "",
};

Home.propTypes = {
  shortName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
