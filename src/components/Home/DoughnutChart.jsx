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
          maintainAspectRatio: false,
        }}
      />
    </>
  );
};

export default DoughnutChart;
