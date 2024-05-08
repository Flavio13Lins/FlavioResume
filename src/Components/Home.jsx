/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/self-photho.jpeg";

const imageAltText = "Flavio Lins da Mota Nascimento photo";
// const imageAltText = "I am passionate about technology, Cloud Computing, and building innovative solutions. I am a graduated B.Sc. in Computer Engineering, I have been working with software development for over 5 years. I am a IBM Certified: Artificial Intelligence Practitioner. I also help a students community to contribute in global hackathons events.";

const Home = ({ shortName, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="selfImage" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "30rem" }}>
        <h1 className="name-home">{shortName}</h1>
        <h2 className="title-home">{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
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
