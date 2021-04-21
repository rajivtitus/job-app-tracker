import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faListAlt, faStar, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { LOGOUT_USER } from "../constants/actionTypes";
import logo from "../assets/logo.png";

const Nav = () => {
  const { pathname } = useLocation();
  const [navMenuStatus, setNavMenuStatus] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch({
      type: LOGOUT_USER,
    });
    history.push("/");
  };

  const navMenuHandler = () => {
    setNavMenuStatus((prevNavMenuStatus) => !prevNavMenuStatus);
  };

  return (
    <>
      {pathname !== "/" && (
        <StyledNav>
          <div className="logo">
            <img src={logo} alt="app-logo" title="Jobase" />
            <h1>Jobase</h1>
          </div>
          <ul className={`${navMenuStatus ? "nav-open" : ""}`}>
            <li>
              <Link
                className={`link ${pathname === "/dashboard" ? "active" : ""}`}
                to="/dashboard"
                onClick={navMenuHandler}
              >
                <FontAwesomeIcon icon={faChartLine} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/job-apps" ? "active" : ""}`}
                to="/job-apps"
                onClick={navMenuHandler}
              >
                <FontAwesomeIcon icon={faListAlt} />
                Applications
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/favorites" ? "active" : ""}`}
                to="/favorites"
                onClick={navMenuHandler}
              >
                <FontAwesomeIcon icon={faStar} />
                Favorites
              </Link>
            </li>
            <li>
              <button onClick={logoutUser} className="link logout-btn">
                <FontAwesomeIcon icon={faPowerOff} />
                Logout
              </button>
            </li>
          </ul>
          <div onClick={navMenuHandler} className="nav-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </StyledNav>
      )}
    </>
  );
};

const StyledNav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 14%;
  z-index: 2;
  padding: 1rem;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    img {
      height: 2.5rem;
      width: 2.5rem;
    }
    h1 {
      font-size: 2.5rem;
      color: white;
    }
  }

  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    list-style: none;
    padding: 0rem 1rem;
    .link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: lightgray;
      &:hover {
        color: white;
      }
      svg {
        color: gray;
        font-size: 2.5rem;
        transition: all 1s ease;
      }
    }

    .link.active {
      color: white;
      svg {
        color: white;
      }
    }
  }

  .logout-btn {
    background: none;
  }

  .nav-menu {
    pointer-events: none;
  }

  @media (max-width: 1176px) {
    position: static;
    flex-direction: row;
    align-items: center;
    height: 10vh;
    width: 100%;

    .logo {
      flex-direction: row;
      padding: 0rem 1.5rem;
      z-index: 4;
      img {
        margin-right: 0.5rem;
      }
    }

    ul {
      height: 100vh;
      width: 35%;
      align-items: center;
      position: fixed;
      top: 0;
      left: 110%;
      padding-top: 2.5rem;
      background: linear-gradient(315deg, #485461 0%, #28313b 74%);
      transition: all 0.75s ease-out;
      z-index: 3;
    }

    .link {
      font-size: 2.5rem;
      svg {
        margin-right: 0.85rem;
      }
    }

    //Toggle Nav bar on and off
    .nav-menu {
      cursor: pointer;
      position: relative;
      pointer-events: all;
      z-index: 3;
      div {
        width: 3.5rem;
        height: 0.35rem;
        margin: 0.65rem;
        background: white;
      }
    }
    .nav-open {
      left: 65%;
      transition: all 0.75s ease-out;
    }
  }

  @media (max-width: 765px) {
    ul {
      width: 100%;
    }
    .nav-open {
      left: 0%;
      transition: all 0.75s ease-out;
    }
  }
`;

export default Nav;
