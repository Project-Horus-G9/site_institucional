// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Registrar os componentes do Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = (props) => {
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: props.label,
                data: props.data,
                fill: true,
                backgroundColor: props.lineColor,
                borderColor: props.borderColor,
                borderWidth: 2,
                tension: 0.1,
                pointRadius: 5, 
                pointBackgroundColor: '#E7AA73',
                pointBorderColor: '#fff', 
                pointBorderWidth: 2, 
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
                borderColor: 'gray',
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
                borderColor: 'white',
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
        <div style={{width:'100%', display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'center'
        }}>
            <h3>{props.title}</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;