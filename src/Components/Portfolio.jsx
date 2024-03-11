/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

import image from "../images/projects-collage.png";

const imageAltText = "Images of my developed projects.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "XGBoost analysis in stock market 📈",
    description:
      "In my course completion thesis I wrote about data analysis using XGBoost with Python in the stock market. The technique is used with the intention of improving results in a Day Trading system. Data from the last 5 or more days of any stock are used as input to the system to find the accuracy of the predicted maximum and minimum values.",
    url: "https://repositorio.ufpe.br/handle/123456789/52689",
  },
  {
    title: "Deep Fit 🏋️‍♂️",
    description:
      "DeepFIT is a mobile platform that helps Personal Trainers to improve their students' performance through insights generated from the data of their Wearables. The main proposal is to help personal trainers to increase their clients' satisfaction through personalised training recommendations created from their students' wearable data.",
    url: "https://deep-fit.netlify.app/",
  },
  {
    title: "Climate Change Analysis 🌦",
    description:
      "This a data analysis project using Kaggle's database as source. Checking from 1750 to 2013 the average temperatures around the world, we can say that there is a sufficient sample of data for real concerns about global warming.",
    url: "https://github.com/Flavio13Lins/Kaggle-ClimateChange",
  },
  {
    title: "Tic Tac Toe Game 🎮",
    description:
      "This is a project to put into practice some of my abilities and training while having fun. The main idea here is to recognize the best pattern in a tic-tac-toe game. Making it impossible to win. I mapped the player's possible moves, finding the solution with reflect or rotations functions to the table if necessary.",
    url: "https://flavio13lins-tic-tac-toe.netlify.app/",
  },
  {
    title: "Initial Value Problem 🧮",
    description:
      "This is a problem solver prompt using Python. It was developed with the objective of implementing a list of numerical methods (eg Inverse Euler, Runge-Kutta, Adam-Multon) to solve a differential equation. The project has a documentation for better understanding.",
    url: "https://github.com/Flavio13Lins/Numerical-Methods",
  },
  {
    title: "Busca Aí 🌎",
    description:
      "Busca Aí is a simple application created in Vue.js with the essence of PWA, just as a practical test of development. The main objective was to create a website where people share their experiences anonymously when visiting places in the world.",
    url: "https://busca-ai-web-hosting.firebaseapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="portfolio-container">
        <div style={{ maxWidth: "60%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "20px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
