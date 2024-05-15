/**
 * Awards component
 *
 * Space for you to describe more my Awards and Certifications.
 */

import React, { useState } from "react";

// import iconCertification from "../images/certificate.svg";
// import iconChevronUp from "../images/chevron-up.svg";
// import iconChevronDown from "../images/chevron-down.svg";
// import iconOpenNew from "../images/open-in-new.svg";
import OpenInNew from "../images/OpenInNew";
import ChevronUp from "../images/ChevronUp";
import ChevronDown from "../images/ChevronDown";

import Certificate from "../images/Certificate";

// import Background1 from "../images/Background1";
// import image from "../images/background1.svg";
// const imageAltText = "Green, blue and yello abstract background";

const awardList = [
  {
    title: "Perform Foundational Data, ML, and AI Tasks in Google Cloud - Google",
    date: "Apr 2024",
    summary:
      "Skill Badge - Validates expertise in foundational tasks related to data management, Machine Learning, and Artificial Intelligence, demonstrating proficiency in essential data-driven operations.",
    link: "https://www.cloudskillsboost.google/public_profiles/16c2a5bc-194f-4858-a1c8-89e15649a600/badges/8610697",
  },
  {
    title: "Build and Secure Networks - Google",
    date: "Mar 2024",
    summary:
      "Skill Badge - Acknowledged proficiency in building and securing networks using Google Cloud services.",
    link: "https://www.cloudskillsboost.google/public_profiles/16c2a5bc-194f-4858-a1c8-89e15649a600/badges/8499981",
  },
  {
    title: "Perform Foundational Infrastructure Tasks - Google",
    date: "Mar 2024",
    summary:
      "Skill Badge - Certified in performing foundational infrastructure tasks in Google Cloud, showcasing expertise in cloud computing.",
    link: "https://www.cloudskillsboost.google/public_profiles/16c2a5bc-194f-4858-a1c8-89e15649a600/badges/8450280",
  },
  {
    title: "Create and Manage Cloud Resources - Google",
    date: "Mar 2024",
    summary:
      "Skill Badge - Recognized for expertise in creating and managing cloud resources, demonstrating proficiency in leveraging Google Cloud technologies.",
    link: "https://www.cloudskillsboost.google/public_profiles/16c2a5bc-194f-4858-a1c8-89e15649a600/badges/8365802",
  },
  {
    title: "Artificial Intelligence Practitioner - IBM",
    date: "Jan 2022",
    summary:
      "Skill Badge - Demonstrates advanced proficiency in AI technologies, encompassing design, implementation, and optimization. Highlights a strong grasp of AI concepts and practical applications.",
    link: "https://www.credly.com/badges/33c14190-e66a-41bf-9c23-40cd801c7388",
  },
  {
    title: "Python for Natural Language Processing - ICMC USP",
    date: "Dec 2021",
    summary:
      "Recognized expertise in Python for Natural Language Processing (NLP). Showcasing proficiency in text analysis and language-related tasks.",
    link: "https://drive.google.com/file/d/190Wxb1V1V7EejaNolCrFDutTw8kNK3D9/view",
  },
  {
    title:
      "Concepts and Fundamentals: Programming Logic, Object Orientation, Swift, JavaScript and RESTful API - HACKATRUCK & MAKERSPACE",
    date: "Mar 2019",
    summary:
      "This certificate attests to a strong foundation in programming concepts and versatile application development skills gained through comprehensive training.",
    link: "https://drive.google.com/file/d/1Fsvd56qMkYZXfRZArewXqx3VW6OMG4Nn/view",
  },
  {
    title: "Cloud Services Practices using Swift with an Emphasis on IoT - HACKATRUCK & MAKERSPACE",
    date: "May 2019",
    summary:
      "Proficient in cloud services with a focus on Swift for IoT applications. Hands-on experience, highlight practical skills in developing cloud-based solutions for Swift and IoT technologies.",
    link: "https://drive.google.com/file/d/1Dl0k4WAXyr2CMZeQiRHIevjJ0bqWOuzh/view",
  },
];

const title = "My Awards";

const Awards = () => {
  const [openDialog, setOpenDialog] = useState(-1);
  const [hoverBtn, setHover] = useState(false);

  return (
    <section className="background padding" id="awards">
      {/* <Background1
        className="background"
        bg="var(--background-color)"
        primary="var(--primary-color)"
        secondary="var(--secondary-color)"
        tertiary="var(--tertiary-color)"
        quaternary="var(--quaternary-color)"
        quinary="var(--quinary-color)"
      /> */}
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      <div className="myAwardsContent">
        <h2>{title}</h2>
        <div className="awardList">
          {awardList.map((skill, index) => {
            return openDialog !== index ? (
              <button
                key={skill}
                className="unbuttonize awardCardClosed"
                onClick={() => {
                  setOpenDialog(index);
                }}
              >
                {openDialog !== index && (
                  <>
                    <div className="awardIconDate">
                      {/* <img className="iconCert" src={iconCertification} alt="CertificationIcon" /> */}
                      <Certificate className="iconCert" text="var(--text-color)" />
                      <h5>{skill.date}</h5>
                    </div>
                    <div style={{ alignSelf: "center" }}>
                      <h4 className="awardTitle">{skill.title}</h4>
                    </div>
                    <div>
                      <ChevronDown className="iconChevron" text="var(--text-color)" />
                      {/* <img className="iconChevron" src={iconChevronDown} alt="ChevronDown" /> */}
                    </div>
                  </>
                )}
              </button>
            ) : (
              <div key={skill}>
                {openDialog === index && (
                  <div className="awardCardOpened">
                    <button
                      className="unbuttonize awardIconDate"
                      onClick={() => {
                        setOpenDialog(-1);
                      }}
                    >
                      {/* <img className="iconCert" src={iconCertification} alt="CertificationIcon" /> */}
                      <Certificate className="iconCert" text="var(--text-color)" />
                      <h5>{skill.date}</h5>
                      {openDialog !== index && (
                        <OpenInNew className="iconOpenNewTab" text={hoverBtn ? "black" : "var(--text-color)"} />
                        // <img className="iconChevron" src={iconChevronDown} alt="ChevronDown" />
                      )}
                    </button>
                    <div className="awardContent">
                      <button
                        className="unbuttonize"
                        onClick={() => {
                          setOpenDialog(-1);
                        }}
                      >
                        <h4 className="awardTitle">{skill.title}</h4>
                      </button>
                      <div>
                        <p>{skill.summary}</p>
                        <button
                          className="unbuttonize"
                          onClick={() => window.open(skill.link, "_blank")}
                          onMouseOver={() => setHover(true)}
                          onMouseLeave={() => setHover(false)}
                          onFocus={() => setHover(true)}
                        >
                          <div className="btnIconTitle">
                            <span>{hoverBtn}</span>
                            <OpenInNew className="iconOpenNewTab" text={hoverBtn ? "black" : "var(--text-color)"} />
                            {/* <img className="iconOpenNewTab" src={iconOpenNew} alt="OpenNewTab" /> */}
                            View Certificate
                          </div>
                        </button>
                      </div>
                    </div>
                    <button
                      className="unbuttonize chevronUpOnSide"
                      onClick={() => {
                        setOpenDialog(-1);
                      }}
                    >
                      {/* <img className="iconChevron" src={iconChevronUp} alt="ChevronUp" /> */}
                      <ChevronUp className="iconChevron" text="var(--text-color)" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
