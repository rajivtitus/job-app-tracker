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
              label: "Applications Per Day",
              data: chartData.data,
              fill: false,
              borderColor: "rgb(75, 126, 192)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Number of Apps",
                },
                ticks: {
                  min: 0,
                  beginAtZero: true,
                  stepSize: 1,
                },
              },
            ],
          },
        }}
      />
    </>
  );
};

export default LineChart;
