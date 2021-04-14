import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container, Glass } from "../styles/styles";
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
    <StyledLogin>
      <video className="home-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <StyledContainer>
        <h1 className="app-title">Transform Your Job Search</h1>
        <StyledGlass variants={fadeIn} initial="hidden" animate="show">
          <form onSubmit={handleSubmit(submitFormData)}>
            {isRegister && (
              <>
                <label htmlFor="first-name">First Name:</label>
                <input type="text" id="first-name" placeholder="First Name" {...register("firstName")} />
                <label htmlFor="last-name">Last Name:</label>
                <input type="text" id="last-name" placeholder="Last Name" {...register("lastName")} />
              </>
            )}
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" placeholder="Email" {...register("email")} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Password" {...register("password")} />
            {isRegister && (
              <>
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
              </>
            )}
            <button type="submit">{isRegister ? "Register" : "Login"}</button>
            <div>
              <button onClick={switchMode}>
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

const StyledLogin = styled.div`
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
  position: relative;
  padding: 5rem;
  background: rgba(0, 0, 0, 0.35);
  .app-title {
    position: absolute;
    top: 5%;
    left: 50%;
    letter-spacing: 3px;
    transform: translate(-50%, -5%);
    text-shadow: 2px 2px black;
    color: white;
  }
`;

const StyledGlass = styled(Glass)`
  height: 70vh;
  max-width: 21.75rem;
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    input {
      width: 100%;
      background: #f5f5f5;
    }
    button {
      width: 75%;
    }
  }
`;
