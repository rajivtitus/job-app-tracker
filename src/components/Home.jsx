import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import { Container, Glass, Card } from "../styles/styles";
import { fadeIn, scaleIn } from "../animations/animations";

const Home = () => {
  const { jobApps, quotes } = useSelector((state) => state);
  const randomQuote = quotes ? quotes[Math.floor(Math.random() * quotes.length)] : "";
  //Filtering through state to compare job app dates with today's date
  const today = new Date();
  const jobAppsToday = jobApps.filter((app) => {
    return function () {
      let appDate = new Date(app.createdAt);
      if (
        today.getDay() === appDate.getDay() &&
        today.getMonth() === appDate.getMonth() &&
        today.getFullYear() === appDate.getFullYear()
      ) {
        return app;
      }
    };
  }).length;

  return (
    <Container>
      <StyledHome variants={fadeIn} initial="hidden" animate="show">
        <StyledCard className="quotes" variants={scaleIn}>
          <h2>Welcome, User!</h2>
          <p>"{randomQuote?.text}"</p>
          <p className="author">- {randomQuote?.author}</p>
        </StyledCard>
        <StyledCard className="charts" variants={scaleIn}>
          <h2>Tracker</h2>
          <div className="chart">
            <p>{jobApps.length}</p>
            <p>{jobAppsToday}</p>
          </div>
        </StyledCard>
        <StyledCard className="locations" variants={scaleIn}>
          <h2>Map Chart</h2>
        </StyledCard>
      </StyledHome>
    </Container>
  );
};

export default Home;

const StyledHome = styled(Glass)`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 1.5rem;

  .charts {
    grid-row: 1/2;
  }
  .quotes {
    grid-row: 1/2;
    p {
      padding: 0rem 2rem;
    }
    .author {
      align-self: flex-end;
      font-style: italic;
      color: grey;
    }
  }
  .locations {
    grid-column: 1/3;
    grid-row: 2/4;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
`;
