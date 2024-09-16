// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registre os componentes necessários no Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarKPIChart = () => {
    // Dados do gráfico
    const data = {
        labels: ['Valor 1', 'Valor 2', 'Valor 3'], // Nomes das barras
        datasets: [
            {
                label: 'Valores',
                data: [14, 62, 160], // Dados das barras
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'], // Cores das barras
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'], // Cor da borda das barras
                borderWidth: 1,
            },
        ],
    };

    // Opções do gráfico
    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100, // Limite máximo do eixo y
            },
        },
    };

    return (
        <div style={{ width: '80%', height: '400px', margin: '0 auto' }}> {/* Ajuste o tamanho diretamente */}
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarKPIChart;
