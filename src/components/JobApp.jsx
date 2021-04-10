import React from "react";
import styled from "styled-components";

import { Card } from "../styles/styles";
import { scaleIn } from "../animations/animations";

const JobApp = ({ app }) => {
  return (
    <>
      <StyledCard variants={scaleIn} initial="hidden" animate="show">
        <h2>{app.jobTitle}</h2>
        <p>{app.jobDescription}</p>
      </StyledCard>
      <StyledCard variants={scaleIn} initial="hidden" animate="show">
        <h2>{app.jobTitle}</h2>
        <p>{app.jobDescription}</p>
      </StyledCard>
    </>
  );
};

export default JobApp;

const StyledCard = styled(Card)`
  margin-bottom: 25rem;
  margin-right: 1.5rem;
`;
