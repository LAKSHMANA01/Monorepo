
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Button } from '@cloud-monorepo/ui';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2024',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Sales 2025',
        data: [15, 21, 8, 12, 9, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Comparison',
      },
    },
  };

  const regenerateData = () => {
    const newData = {
      labels: chartData.labels,
      datasets: chartData.datasets.map(dataset => ({
        ...dataset,
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 30))
      }))
    };
    
    setChartData(newData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Sales Dashboard</h2>
      <div className="mb-4">
        <Button onClick={regenerateData}>Regenerate Data</Button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <Bar options={chartOptions} data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;