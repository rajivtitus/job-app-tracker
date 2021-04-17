import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ chartData }) => {
  return (
    <>
      <Doughnut
        data={{
          labels: chartData.labels,
          datasets: chartData.datasets,
        }}
        options={{
          title: {
            display: true,
            text: chartData.titleText,
            fontSize: 20,
            position: "bottom",
          },
          legend: {
            display: true,
          },
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 15,
          },
        }}
      />
    </>
  );
};

export default DoughnutChart;
