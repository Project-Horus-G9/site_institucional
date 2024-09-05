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
                backgroundColor: '#E7AA73',
                borderColor: '#E7AA73',
                borderWidth: 2,
                tension: 0.1,
                pointRadius: 5, 
                pointBackgroundColor: '#E7AA73',
                pointBorderColor: '#fff', 
                pointBorderWidth: 2, 
            },
            {
                label: props.labelTwo,
                data: props.dataTwo,
                fill: true,
                backgroundColor: 'yellow',
                borderColor: 'yellow',
                borderWidth: 2,
                tension: 0.1,
                pointRadius: 5, 
                pointBackgroundColor: 'yellow',
                pointBorderColor: '#fff', 
                pointBorderWidth: 2, 
            },
        ],
    };

    const options = {
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
        <div>
            <h3>{props.title}</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;