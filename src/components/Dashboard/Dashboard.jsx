import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Container, Card } from "../../styles/styles";
import { fadeIn, scaleIn } from "../../animations/animations";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";

const Dashboard = () => {
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
      titleText: `Applications Today: ${appsCompletedToday}`,
    };
    setAppsTodayData(chartData);
  };

  const totalAppsChartData = (jobApps) => {
    const totalActiveApps = jobApps.length;
    const totalDormantApps = 2;

    const chartData = {
      labels: ["Active", "Inactive"],
      datasets: [
        {
          data: [totalActiveApps, totalDormantApps],
          backgroundColor: ["green", "red"],
        },
      ],
      titleText: `Total Applications: ${totalActiveApps + totalDormantApps}`,
    };
    setTotalAppsData(chartData);
  };

  const appsTimelineChartData = (jobApps, user) => {
    const userAccountCreated = new Date(user?.profile?.createdAt);
    const firstMonth = userAccountCreated.getMonth();
    const currentMonth = new Date().getMonth();

    const chartData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
  }, [jobApps, user]);

  return (
    <StyledContainer variants={fadeIn} initial="hidden" animate="show">
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
    </StyledContainer>
  );
};

export default Dashboard;

const StyledContainer = styled(Container)`
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 2fr 3fr;
  grid-gap: 1.5rem;

  .quotes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    p {
      padding: 0rem 1.5rem;
    }
    .author {
      align-self: flex-end;
      font-style: italic;
      color: gray;
    }
  }

  .charts {
    display: flex;
    justify-content: space-evenly;
  }

  .locations {
    grid-column: 1/3;
  }
`;
