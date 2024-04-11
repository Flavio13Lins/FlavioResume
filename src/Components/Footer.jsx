/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React, { useState } from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import discordInIcon from "../images/socials/discord.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";
import copyIcon from "../images/socials/copy.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const [copyText, setCopyText] = useState("Copy email");

  const {
    devDotTo,
    discordId,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    nickName,
    primaryColor,
    twitter,
    youTube,
  } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "2rem 0 1rem 0",
        backgroundColor: primaryColor,
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" className="socialIcon" />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="socialIcon" />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </a>
        )}
        {discordId && (
          <a
            href={`https://discordid.netlify.app/?id=${discordId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discordInIcon} alt="Discord" className="socialIcon" />
          </a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0, textAlign: "center", color: "white" }}>
        {email && (
          <div style={{ display: "flex" }}>
            Email me at
            <a className="email" href={`mailto:${email}`}>
              {email}
            </a>
            <div className="tooltip">
              <button
                className="unbuttonize"
                onClick={() => {
                  setCopyText("Copied!");
                  navigator.clipboard.writeText(email);
                }}
                onMouseLeave={() => {
                  setCopyText("Copy email");
                }}
              >
                <img src={copyIcon} alt="copyIcon" className="copyIcon" />
              </button>
              <span className="copyTooltip">{copyText}</span>
            </div>
          </div>
        )}
        <div>
          {new Date().getFullYear()} — <strong>{nickName}</strong>
        </div>
      </p>
    </div>
  );
};

Footer.defaultProps = {
  nickName: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  discordId: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  nickName: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  tertiaryColor: PropTypes.string,
  quaternaryColor: PropTypes.string,
  quinaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
