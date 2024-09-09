import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation'; // Importa o plugin de anotação

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, annotationPlugin); // Registra o plugin

const BarChart = (props) => {

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: props.label1,
        data: props.dataChart1,
        backgroundColor: props.colorBarLeft,
        borderColor: props.colorBorderBarLeft,
        borderWidth: 1,
        barThickness: 30, // Ajuste a espessura das barras se necessário
        categoryPercentage: 0.5, // Ajuste a largura das categorias
        barPercentage: 1, // Ajuste a largura das barras dentro de cada categoria
      },
      {
        label: props.label2,
        data: props.dataChart2,
        backgroundColor: props.colorBarRight,
        borderColor: 'yellow',
        borderWidth: 1,
        barThickness: 30, // Ajuste a espessura das barras se necessário
        categoryPercentage: 0.5, // Ajuste a largura das categorias
        barPercentage: 1, // Ajuste a largura das barras dentro de cada categoria
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
          label: function(tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} ${props.medida}`;
          },
        },
      },
      annotation: { // Configurações para o plugin de anotação
        annotations: {
          line1: {
            type: 'line',
            borderColor: 'yellow',
            borderWidth: 2,
            label: {
              content: 'Limite',
              enabled: true,
              position: 'end'
            },
            scaleID: 'y',
            value: props.limite, // Valor da linha de limite
          },
          line2: {
            type: 'line',
            borderColor: 'gold',
            borderWidth: 2,
            label: {
              content: 'Média',
              enabled: true,
              position: 'end'
            },
            scaleID: 'y',
            value: props.media, // Valor da linha de valor médio
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{width:'70%'}}>
      <h3>{props.title}</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;