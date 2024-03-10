/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
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
  shortName: "Flávio Nascimento",
  fullName: "Flávio Lins da Mota Nascimento",
  title: "Computer Engineer & Software Developer",
  email: "flavio13lins@gmail.com",
  gitHub: "Flavio13Lins",
  instagram: "Flavio13Lins",
  linkedIn: "flavio13lins",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#3CB371";
const secondaryColor = "#D2F1E4";


const App = () => {
  return (
    <div id="main">
      <Header />
      <Home shortName={siteProps.shortName} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
