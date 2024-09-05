import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Style } from '@mui/icons-material';
import estilo from '../dougnutChart/dougnut.module.css'

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const DoughnutChart = () => {

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My Dataset',
        data: [300, 50, 100],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed) {
              label += `${context.parsed}%`;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div sytle={{border:'1px solid black'}}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;