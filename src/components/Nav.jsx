import React from "react";
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
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch({
      type: LOGOUT_USER,
    });
    history.push("/");
  };

  return (
    <>
      {pathname !== "/" && (
        <StyledNav>
          <div className="logo">
            <img src={logo} alt="app-logo" title="Job Trak" />
            <h1>Job Traꓘ</h1>
          </div>
          <ul>
            <li>
              <Link className={`link ${pathname === "/dashboard" ? "active" : ""}`} to="/dashboard">
                <FontAwesomeIcon icon={faChartLine} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link className={`link ${pathname === "/job-apps" ? "active" : ""}`} to="/job-apps">
                <FontAwesomeIcon icon={faListAlt} />
                Applications
              </Link>
            </li>
            <li>
              <Link className={`link ${pathname === "/favorites" ? "active" : ""}`} to="/favorites">
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
`;

export default Nav;
