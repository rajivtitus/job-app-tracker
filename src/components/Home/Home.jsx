import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import * as d3 from "d3";

import { Container, Glass, Card } from "../../styles/styles";
import { fadeIn, scaleIn } from "../../animations/animations";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";

const Home = () => {
  const { jobApps, quotes, userProfile } = useSelector((state) => state);
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  //Filtering through state to compare job app dates with today's date
  const today = new Date();
  const jobAppsToday = jobApps.filter((app) => {
    let appDate = new Date(app.createdAt);
    return (
      today.getDay() === appDate.getDay() &&
      today.getMonth() === appDate.getMonth() &&
      today.getFullYear() === appDate.getFullYear()
    );
  }).length;
  const totalApps = jobApps.length;
  const [pieData, setPieData] = useState([]);

  const generateDonutData = (value, length = 2) =>
    d3.range(length).map((item) => ({
      value: value,
    }));

  useEffect(() => {
    let length;
    jobAppsToday > 4 ? (length = 1) : (length = 2);
    setPieData(generateDonutData(jobAppsToday, length));
  }, [jobAppsToday]);

  return (
    <Container>
      <StyledHome variants={fadeIn} initial="hidden" animate="show">
        <Card className="quotes" variants={scaleIn}>
          <h2>Welcome, {userProfile?.result?.firstName}!</h2>
          <p>"{randomQuote?.text}"</p>
          <p className="author">- {randomQuote?.author}</p>
        </Card>
        <Card className="charts" variants={scaleIn}>
          <DonutChart data={pieData} width={150} height={150} innerRadius={45} outerRadius={75} />
          <DonutChart data={pieData} width={150} height={150} innerRadius={45} outerRadius={75} />
          <DonutChart data={pieData} width={150} height={150} innerRadius={45} outerRadius={75} />
        </Card>
        <Card className="locations" variants={scaleIn}>
          <LineChart />
        </Card>
      </StyledHome>
    </Container>
  );
};

export default Home;

const StyledHome = styled(Glass)`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 1.5rem;

  .quotes {
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    p {
      padding: 0rem 2rem;
    }
    .author {
      align-self: flex-end;
      font-style: italic;
      color: grey;
    }
  }
  .charts {
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.75rem;
  }
  .locations {
    grid-column: 1/3;
    grid-row: 2/5;
  }
`;
