import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
  return (
    <>
      <Line
        data={{
          labels: chartData.labels,
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 0],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </>
  );
};

export default LineChart;
