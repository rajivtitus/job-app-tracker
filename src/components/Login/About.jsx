import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import profileImage from "../../assets/Profile Image.png";
import { springIn } from "../../animations/animations";

const About = () => {
  return (
    <StlyedAbout variants={springIn} initial="hidden" animate="show">
      <div className="contact">
        <img src={profileImage} alt="profile" />
        <h2>
          Hello, I'm <span>Raj</span>iv!
        </h2>
        <h3>I love solving problems and building interactive user experiences.</h3>
        <p>Want to know me better? Have a project we can collaborate on?</p>
        <h3>Let's talk! </h3>
        <div className="links">
          <a href="mailto:rajivtitus92@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
            <FontAwesomeIcon icon={faEnvelope} color="white" size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajiv-christopher-bsc-pdd-in-it-6626a6a7/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} color="white" size="3x" />
          </a>
          <a href="https://github.com/rajivtitus" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FontAwesomeIcon icon={faGithub} color="white" size="3x" />
          </a>
        </div>
      </div>
      <div className="jobase-highlights">
        <h2>Jobase Highlights:</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Provides valuable performance insights
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Keep track of job applications
          </li>

          <li>
            <FontAwesomeIcon icon={faCheck} />
            Log outreach activities
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Mark your favorite companies
          </li>
        </ul>
      </div>
    </StlyedAbout>
  );
};

export default About;

const StlyedAbout = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  background: linear-gradient(315deg, #485461 0%, #28313b 74%);
  text-align: center;
  z-index: 4;

  .contact,
  .jobase-highlights {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .contact {
    h2,
    h3,
    h4,
    p {
      margin: 0.35rem 0rem;
    }
    img {
      width: 15rem;
      height: 15rem;
    }
    a {
      margin: 0.75rem;
    }
  }

  .jobase-highlights {
    ul {
      list-style: none;
      li {
        margin: 0.75rem 0rem;
      }
    }
  }
`;
