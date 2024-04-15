/**
 * Awards component
 *
 * Space for you to describe more my Awards and Certifications.
 */

import React, { useState } from "react";

import iconCertification from "../images/certificate.svg";

const awardList = [
  {
    title: "Perform Foundational Data, ML, and AI Tasks in Google Cloud - Google",
    date: "Apr 2024",
    summary:
      "Validates expertise in foundational tasks related to data management, Machine Learning, and Artificial Intelligence, demonstrating proficiency in essential data-driven operations.",
    link: "",
  },
  {
    title: "Perform Foundational Infrastructure Tasks - Google",
    date: "Apr 2024",
    summary:
      "Certified in performing foundational infrastructure tasks in Google Cloud, showcasing expertise in cloud computing.",
    link: "",
  },
  {
    title: "Build and Secure Networks - Google",
    date: "Mar 2024",
    summary:
      "Acknowledged proficiency in building and securing networks using Google Cloud services.",
    link: "",
  },
  {
    title: "Create and Manage Cloud Resources - Google",
    date: "Mar 2024",
    summary:
      "Recognized for expertise in creating and managing cloud resources, demonstrating proficiency in leveraging Google Cloud technologies.",
    link: "",
  },
  {
    title: "Artificial Intelligence Practitioner - IBM",
    date: "Jan 2022",
    summary:
      "Demonstrates advanced proficiency in AI technologies, encompassing design, implementation, and optimization. Highlights a strong grasp of AI concepts and practical applications.",
    link: "",
  },
  {
    title: "Python for Natural Language Processing - ICMC USP",
    date: "Dec 2021",
    summary:
      "Recognized expertise in Python for Natural Language Processing (NLP). Showcasing proficiency in text analysis and language-related tasks.",
    link: "",
  },
  {
    title:
      "Concepts and Fundamentals: Programming Logic, Object Orientation, Swift, JavaScript and RESTful API - HACKATRUCK & MAKERSPACE",
    date: "Mar 2019",
    summary:
      "This certificate attests to a strong foundation in programming concepts and versatile application development skills gained through comprehensive training.",
    link: "",
  },
  {
    title: "Cloud Services Practices using Swift with an Emphasis on IoT - HACKATRUCK & MAKERSPACE",
    date: "May 2019",
    summary:
      "Proficient in cloud services with a focus on Swift for IoT applications. Hands-on experience, highlight practical skills in developing cloud-based solutions for Swift and IoT technologies.",
    link: "",
  },
];

const title = "My Awards";

const Awards = () => {
  const [openDialog, setOpenDialog] = useState(-1);

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
        <div>{openDialog}</div>
        <ul>
          {awardList.map((skill, index) => (
            <button
              className="unbuttonize"
              key={skill}
              onClick={() => {
                setOpenDialog(index);
              }}
            >
              <div>
                <div>{index}</div>
                <img className="iconCert" src={iconCertification} alt="CertificationIcon" />
                <h5>{skill.date}</h5>
              </div>
              <div>
                <h4>{skill.title}</h4>
                <p>{skill.summary}</p>
              </div>
            </button>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Awards;
