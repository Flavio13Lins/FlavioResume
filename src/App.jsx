/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Awards from "./Components/Awards";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  nickName: "Flavio13Lins",
  shortName: "Flávio Nascimento",
  fullName: "Flávio Lins da Mota Nascimento",
  title: "Computer Engineer & Software Developer",
  email: "flavio13lins@gmail.com",
  discordId: "654752684884361265",
  gitHub: "Flavio13Lins",
  instagram: "Flavio13Lins",
  linkedIn: "flavio13lins",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#1c3112";
const secondaryColor = "#0C4B41";
const tertiaryColor = "#3CB371";
const quaternaryColor = "#CBD5A9";
const quinaryColor = "#29374D";

const App = () => {
  return (
    <div id="main">
      <Header
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        tertiaryColor={tertiaryColor}
        quaternaryColor={quaternaryColor}
        quinaryColor={quinaryColor}
      />
      <Home shortName={siteProps.shortName} title={siteProps.title} />
      <About />
      <Awards />
      <Portfolio />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        tertiaryColor={tertiaryColor}
        quaternaryColor={quaternaryColor}
        quinaryColor={quinaryColor}
      />
    </div>
  );
};

export default App;
