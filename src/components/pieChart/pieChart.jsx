
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {

  const data = {
    labels: [],
    datasets: [
      {
        label: 'Porcentagem de Cobertura',
        data: [85, 15],
        backgroundColor: [
          '#fae1ab',
          'rgba(224,123,57,0.7)'
        ],
        borderColor: [
          '#fae1ab',
          'rgba(224,123,57,0.7)'
          
        ],
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
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`; // Adicione o símbolo de porcentagem para clareza
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '70%' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
