import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Define chart data
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Sales",
        data: [10, 2, 30, 43, 50, 45, 22, 53, 78, 91, 53, 21],
        tension: 0.4, // Smooth the line
        pointRadius: 0, // Removes points from the line
        borderColor: "rgb(75, 192, 192)", // Line color (light teal)
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Area under the line (light teal with opacity)
        borderWidth: 2, // Width of the line
        fill: true, // Fill the area under the line
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales (in USD)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className=" mx-auto h-screen">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
