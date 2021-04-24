import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Container } from "../../styles/styles";
import { fadeIn } from "../../animations/animations";
import JobApp from "../Applications/JobApp";

const Favorites = () => {
  const { jobApps } = useSelector((state) => state);
  const favoriteApps = jobApps.filter((app) => app.favorite);

  return (
    <StyledContainer variants={fadeIn} initial="hidden" animate="show">
      <h2>Favorites</h2>
      <div className="favorites-container">
        {favoriteApps.map((app) => (
          <div key={app._id}>
            <JobApp app={app} />
          </div>
        ))}
      </div>
    </StyledContainer>
  );
};

export default Favorites;

const StyledContainer = styled(Container)`
  overflow-y: auto;

  .favorites-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 65rem;
  }
  h2 {
    margin-bottom: 2rem;
    text-shadow: 1px 1px #323c47;
    text-align: center;
  }
`;
