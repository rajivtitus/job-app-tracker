import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container } from "../styles/styles";
import video from "../assets/login page video.mp4";
import { fadeIn } from "../animations/animations";
import { loginUser, registerUser } from "../actions/userActions";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
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

  const switchMode = () => setIsRegister((prevIsRegister) => !prevIsRegister);

  return (
    <StyledLogin variants={fadeIn} initial="hidden" animate="show">
      <video className="home-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <StyledContainer>
        <header>
          <h1 className="app-title">Transform Your Job Search</h1>
        </header>
        <StyledGlass>
          <form onSubmit={handleSubmit(submitFormData)}>
            <h2 className="form-title">{isRegister ? "Register" : "Login"}</h2>
            {isRegister && (
              <>
                <div className="form-row">
                  <label htmlFor="first-name">First Name:</label>
                  <input type="text" id="first-name" placeholder="First Name" {...register("firstName")} />
                </div>
                <div className="form-row">
                  <label htmlFor="last-name">Last Name:</label>
                  <input type="text" id="last-name" placeholder="Last Name" {...register("lastName")} />
                </div>
              </>
            )}
            <div className="form-row">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" placeholder="Email" {...register("email")} />
            </div>
            <div className="form-row">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="Password" {...register("password")} />
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
                  />
                </div>
              </>
            )}
            <div className="form-row submit-btn">
              <button type="submit">
                {isRegister ? "Register " : "Login "}
                <FontAwesomeIcon icon={faSignInAlt} />
              </button>
            </div>
            <div>
              <button className="switch-mode-btn" onClick={switchMode}>
                {isRegister ? "Already have an account? Login Here" : "Don't have an account? Register here"}
              </button>
            </div>
          </form>
        </StyledGlass>
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
    left: 0;
  }
`;

const StyledContainer = styled(Container)`
  flex-direction: column;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.35);
  padding: 0;
  .app-title {
    letter-spacing: 3px;
    text-shadow: 2px 2px black;
    color: white;
  }
`;

const StyledGlass = styled(motion.div)`
  max-width: 21.75rem;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.4));
  border-radius: 1rem;
  padding: 1.5rem;
  .form-title {
    text-align: center;
  }
  .form-row {
    margin: 1.35rem 0rem;
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
    font-weight: 600;
  }
`;
