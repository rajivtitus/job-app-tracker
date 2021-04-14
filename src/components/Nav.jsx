import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faListAlt, faStar, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && (
        <StyledNav>
          <ul>
            <li>
              <Link className={`link ${pathname === "/home" ? "active" : ""}`} to="/home">
                <FontAwesomeIcon icon={faHome} />
                Home
              </Link>
            </li>
            <li>
              <Link className={`link ${pathname === "/job-apps" ? "active" : ""}`} to="/job-apps">
                <FontAwesomeIcon icon={faListAlt} />
                Apps
              </Link>
            </li>
            <li>
              <Link className={`link ${pathname === "/favorites" ? "active" : ""}`} to="/favorites">
                <FontAwesomeIcon icon={faStar} />
                Favorites
              </Link>
            </li>
            <li>
              <Link className={`link ${pathname === "/profile" ? "active" : ""}`} to="/profile">
                <FontAwesomeIcon icon={faUserCircle} />
                Profile
              </Link>
            </li>
          </ul>
        </StyledNav>
      )}
    </>
  );
};

const StyledNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 7.5%;
  z-index: 2;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5));

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    list-style: none;
    .link {
      display: flex;
      flex-direction: column;
      align-items: center;
      svg {
        color: #aaa0f4;
        font-size: 2.5rem;
        transition: all 1s ease;
      }
    }
    .link.active {
      svg {
        color: black;
      }
    }
  }
`;

export default Nav;
