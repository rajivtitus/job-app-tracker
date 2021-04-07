import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faListAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        <li>
          <Link to="/stats">
            <FontAwesomeIcon icon={faListAlt} />
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <FontAwesomeIcon icon={faStar} />
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 7.5%;
  background: linear-gradient(165deg, rgba(192, 192, 192, 0.5), rgba(176, 224, 230, 0.7));

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    list-style: none;
    svg {
      color: gold;
      font-size: 2.5rem;
    }
  }
`;

export default Nav;
