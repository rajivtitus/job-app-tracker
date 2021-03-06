import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container } from "../../styles/styles";
import video from "../../assets/login page video.mp4";
import logo from "../../assets/logo.png";
import { fadeIn } from "../../animations/animations";
import { loginUser, registerUser } from "../../actions/userActions";
import About from "./About";

const Login = () => {
  const { login } = useSelector((state) => state.user);
  const [isRegister, setIsRegister] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const submitFormData = (formData) => {
    if (isRegister) {
      dispatch(registerUser(formData, history));
    } else {
      dispatch(loginUser(formData, history));
    }
    reset();
  };

  const switchMode = () => {
    setIsRegister((prevIsRegister) => !prevIsRegister);
    reset();
  };

  return (
    <StyledLogin variants={fadeIn} initial="hidden" animate="show">
      <button onClick={() => setShowAbout((prevshowAbout) => !prevshowAbout)} className="about-btn">
        {!showAbout ? "About Me" : "X"}
      </button>
      {showAbout && <About />}
      <video className="home-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <StyledContainer>
        <header>
          <img src={logo} alt="app-logo" title="Jobase" />
          <h1 className="app-title">Jobase | Transform Your Job Search</h1>
        </header>
        <Glass>
          <form onSubmit={handleSubmit(submitFormData)}>
            <h3 className="form-title">{isRegister ? "Register" : "Login"}</h3>
            {isRegister && (
              <>
                <div className="form-row">
                  <label htmlFor="first-name">First Name:</label>
                  <input type="text" id="first-name" placeholder="First Name" {...register("firstName")} required />
                </div>
                <div className="form-row">
                  <label htmlFor="last-name">Last Name:</label>
                  <input type="text" id="last-name" placeholder="Last Name" {...register("lastName")} required />
                </div>
              </>
            )}
            <div className="form-row">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Email" {...register("email")} required />
            </div>
            <div className="form-row">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="Password" {...register("password")} required />
            </div>
            {isRegister && (
              <>
                <div className="form-row">
                  <label htmlFor="confirm-password">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                    required
                  />
                </div>
              </>
            )}
            <div className="form-row error-message">{login.hasError && <p>{login.errorMsg}</p>}</div>
            <div className="form-row submit-btn">
              <button type="submit">
                {isRegister ? "Register " : "Login "}
                <FontAwesomeIcon icon={faSignInAlt} />
              </button>
            </div>
            <div>
              <button type="button" className="switch-mode-btn" onClick={switchMode}>
                {isRegister ? "Already have an account? Login Here" : "Don't have an account? Register here"}
              </button>
            </div>
          </form>
        </Glass>
      </StyledContainer>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled(motion.div)`
  .home-video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    top: 0;
    z-index: -1;
  }
  .about-btn {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem 1.5rem;
    font-size: 2.5rem;
    background: none;
    color: white;
    z-index: 5;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.75);
  padding: 0;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  @media (max-width: 736px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem 2rem 1rem;
    text-align: center;
    h1 {
      letter-spacing: 3px;
      text-shadow: 2px 2px black;
      color: white;
    }
    img {
      height: 5rem;
      width: 5rem;
      margin-bottom: 1rem;
    }
  }
`;

const Glass = styled(motion.div)`
  width: 100%;
  max-width: 25rem;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.4));
  border-radius: 0.5rem;
  padding: 1.5rem;
  padding-bottom: 0.5rem;

  .form-title {
    text-align: center;
  }
  .form-row {
    margin: 0.75rem 0rem;
  }
  .error-message {
    text-align: center;
    p {
      text-transform: capitalize;
      font-weight: 800;
    }
  }
  input {
    display: block;
    width: 100%;
    margin-top: 0.25rem;
    background: #f5f5f5;
  }
  .submit-btn {
    text-align: center;
    margin-top: 2.5rem;
    button {
      width: 75%;
      font-weight: 600;
    }
  }
  .switch-mode-btn {
    background: none;
  }
`;
