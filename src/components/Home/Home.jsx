import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Container, Glass, Card } from "../../styles/styles";
import { fadeIn, scaleIn } from "../../animations/animations";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";

const Home = () => {
  const { jobApps, quotes, user } = useSelector((state) => state);
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  //Local states for chart data
  const [appsTodayData, setAppsTodayData] = useState({});
  const [totalAppsData, setTotalAppsData] = useState({});
  const [appsTimelineData, setAppsTimelineData] = useState({});

  const appsTodayChartData = (jobApps) => {
    const today = new Date();
    const minAppsToday = 5;
    //Filtering through state to compare job app dates with today's date
    const appsCompletedToday = jobApps.filter((app) => {
      let appDate = new Date(app.createdAt);
      return (
        today.getDay() === appDate.getDay() &&
        today.getMonth() === appDate.getMonth() &&
        today.getFullYear() === appDate.getFullYear()
      );
    }).length;
    const appsPendingToday = appsCompletedToday < 5 ? minAppsToday - appsCompletedToday : 0;

    const chartData = {
      labels: ["Applications Today", "Pending"],
      datasets: [
        {
          data: [appsCompletedToday, appsPendingToday],
          backgroundColor: ["green", "orange"],
        },
      ],
    };
    setAppsTodayData(chartData);
  };

  const totalAppsChartData = (jobApps) => {
    const totalActiveApps = jobApps.length;
    const totalDormantApps = 2;

    const chartData = {
      labels: ["Active", "Dormant"],
      datasets: [
        {
          data: [totalActiveApps, totalDormantApps],
          backgroundColor: ["green", "red"],
        },
      ],
    };
    setTotalAppsData(chartData);
  };

  const appsTimelineChartData = (jobApps) => {
    const userAccountCreated = new Date(user.profile.createdAt);
    const firstMonth = userAccountCreated.getMonth();
    const currentMonth = new Date().getMonth();
    const activeMonths = getMonthsData(firstMonth, currentMonth);

    const chartData = {
      labels: activeMonths,
    };
    setAppsTimelineData(chartData);
  };

  const getMonthsData = (startMonth, endMonth) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const result = [];
    for (let i = startMonth; i <= endMonth; i++) {
      result.push(months[i]);
    }
    return result;
  };

  useEffect(() => {
    appsTodayChartData(jobApps);
    totalAppsChartData(jobApps);
    appsTimelineChartData(jobApps, user);
  }, [jobApps]);

  return (
    <Container>
      <StyledGlass variants={fadeIn} initial="hidden" animate="show">
        <Card className="quotes" variants={scaleIn}>
          <h2>Welcome, {user?.profile?.firstName}!</h2>
          <p>"{randomQuote?.text}"</p>
          <p className="author">- {randomQuote?.author}</p>
        </Card>
        <Card className="charts" variants={scaleIn}>
          <div className="apps-today">
            <DoughnutChart chartData={appsTodayData} />
          </div>
          <div className="total-apps">
            <DoughnutChart chartData={totalAppsData} />
          </div>
        </Card>
        <Card className="locations" variants={scaleIn}>
          <LineChart chartData={appsTimelineData} />
        </Card>
      </StyledGlass>
    </Container>
  );
};

export default Home;

const StyledGlass = styled(Glass)`
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
  }
  .locations {
    grid-column: 1/3;
    grid-row: 2/4;
  }
`;
