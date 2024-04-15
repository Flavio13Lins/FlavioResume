/**
 * Awards component
 *
 * Space for you to describe more my Awards and Certifications.
 */

import React from "react";

const awardList = [];

const title = "My Awards";

const Awards = () => {
  return (
    <section className="padding" id="awards">
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>{title}</h2>
        <p className="large">{title}</p>
        <hr />
        <ul >
          {awardList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Awards;
