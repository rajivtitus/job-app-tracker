import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import moment from "moment";

import { Container, Card } from "../../styles/styles";
import { fadeIn, scaleIn } from "../../animations/animations";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";

const Dashboard = () => {
  const {
    jobApps,
    quotes,
    user: { profile },
  } = useSelector((state) => state);
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  //Local states for chart's data
  const [appsTodayData, setAppsTodayData] = useState({});
  const [totalAppsData, setTotalAppsData] = useState({});
  const [appsTimelineData, setAppsTimelineData] = useState({});

  const appsTodayChartData = (jobApps) => {
    const today = new Date();
    const minAppsToday = 5;
    const appsCompletedToday = getAppsPerDay(jobApps, today);
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
    const totalActiveApps = jobApps.filter((app) => app.active).length;
    const totalDormantApps = jobApps.filter((app) => !app.active).length;

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

  const appsTimelineChartData = (jobApps, profile) => {
    const profileCreatedDate = new Date(profile?.createdAt);
    const today = new Date();
    const { _d: thirtyDaysAgo } = moment(today).subtract(31, "days");
    const labels = [];
    const data = [];

    //Checking to see if User Profile is older than 30 days(to show the past 30 days data)
    if (profileCreatedDate <= thirtyDaysAgo) {
      for (let i = 1; i <= 31; i++) {
        //Generating labels in mm/dd format for line chart
        let targetDate = new Date(moment(thirtyDaysAgo).add(i, "days"));
        let day = targetDate.getUTCDate();
        let month = targetDate.getUTCMonth() + 1;
        labels.push([month + "/" + day]);

        //Generating data for each date
        const totalAppsPerDay = getAppsPerDay(jobApps, targetDate);

        data.push(totalAppsPerDay);
      }
    }
    //If account is not older than 30 days, then just show data from the day account was created
    else {
      //Converting dates to moment objects to iterate from start date to end date
      let startDate = moment(profileCreatedDate, "DD-MM-YYYY");
      let endDate = moment(today, "DD-MM-YYYY");
      let dateDiff = endDate.diff(startDate, "days");

      for (let i = 1; i <= dateDiff; i++) {
        //Generating labels in mm/dd format for line chart
        let targetDate = new Date(moment(startDate).add(i, "days"));
        let day = targetDate.getUTCDate();
        let month = targetDate.getUTCMonth() + 1;
        labels.push([month + "/" + day]);

        //Generating data for each date
        const totalAppsPerDay = getAppsPerDay(jobApps, targetDate);

        data.push(totalAppsPerDay);
      }
    }

    const chartData = {
      labels,
      data,
    };
    setAppsTimelineData(chartData);
  };

  //Function to calculate apps-per-day
  const getAppsPerDay = (appsList, targetDate) => {
    //Filtering through list to compare job app dates with target date
    const appsPerDay = appsList.filter((app) => {
      let appDate = new Date(app.createdAt);
      return (
        targetDate.getDay() === appDate.getDay() &&
        targetDate.getMonth() === appDate.getMonth() &&
        targetDate.getFullYear() === appDate.getFullYear()
      );
    }).length;
    return appsPerDay;
  };

  useEffect(() => {
    appsTodayChartData(jobApps);
    totalAppsChartData(jobApps);
    appsTimelineChartData(jobApps, profile);
  }, [jobApps, profile]);

  return (
    <StyledContainer variants={fadeIn} initial="hidden" animate="show">
      <Card className="quotes" variants={scaleIn}>
        <h2>Welcome, {profile?.firstName}!</h2>
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
