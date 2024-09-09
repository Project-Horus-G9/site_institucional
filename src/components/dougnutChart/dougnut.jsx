import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Style, WidthFull } from '@mui/icons-material';
import estilo from '../dougnutChart/dougnut.module.css'

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const DoughnutChart = (props) => {
  
  const totalValue = 100; 
  const value = props.value; 

  const adjustedData = [value, totalValue - value];

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: 'My Dataset',
        data: adjustedData,
        backgroundColor: ['rgba(54, 162, 235, 0.2)','rgba(255, 99, 132, 0.2)', ],
        borderColor: ['rgba(54, 162, 235, 1)','rgba(255, 99, 132, 1)'],
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
              label += `${context.parsed} %`;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div style={{width:'50%' }}>
      <h3>{props.title}</h3>
      <Doughnut data={data} options={options} />
    </div>

  );
};

export default DoughnutChart;