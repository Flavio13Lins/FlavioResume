/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import image from "../images/background2.svg";
import Background2 from "../images/Background2";

const imageAltText = "Green, blue and yello abstract background";

const description =
  "I am a graduated B.Sc. in Computer Engineering, I have been working with software development for over 5 years. I am a IBM Certified: Artificial Intelligence Practitioner.";

const skillsList = [
  "Analytical Thinking",
  "Detail-Oriented",
  "Empathy",
  "Adaptable",
  "Quickly Grasp New Concepts",
  "Easygoing",
];

const detailOrQuote =
  "I am passionate about technology, Cloud Computing, and building innovative solutions. I also help a students community to contribute in global hackathons events.";

const About = () => {
  return (
    <section className="padding" id="about">
      <Background2
        bg="var(--background-color)"
        primary="var(--primary-color)"
        secondary="var(--secondary-color)"
        tertiary="var(--tertiary-color)"
        quaternary="var(--quaternary-color)"
        quinary="var(--quinary-color)"
      />
      <img className="background" src={image} alt={imageAltText} />
      <div className="aboutContainer">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="skills-container">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="text-detail">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
