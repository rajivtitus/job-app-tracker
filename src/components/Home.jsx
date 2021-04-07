import React from "react";
import styled from "styled-components";

import { Container } from "../styles/styles";

const Home = () => {
  return (
    <StyledHome>
      <h1>Job Application Tracker</h1>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled(Container)`
  h1 {
    text-align: center;
  }
`;
