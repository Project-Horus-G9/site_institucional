import React from "react";
import { style } from "./style.js";
import { Box, colors, Typography } from "@mui/material";
import Estructure from "../../components/Estructure/index.jsx";

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';


function Dashboard() {

    const kpiData = [
        { title: "Taxa de Umidade Relativa", value: [5, 95], type: "pie", text: "Umidade Baixa" },
        { title: "Área de Irradiação Solar por Hora", value: [15, 85], type: "pie", text: "150 m² totais" },
        { title: "Eficiência por Obstrução", label: "Obstrução", value1: [14], value2: [64], type: "bar", text: "12 paineis obstruidos" },
        { title: "Eficiência por Orientação e Inclinação", label: "Orie./Incl.", value1: [55], value2: [100], type: "bar", text: "Norte a 32,2°" },
        { title: "Taxa de Eficiência Geral", value: [63, 37], type: "pie", text: "Ok" },
    ];

    const metricsData1 = [
        {
            title: "Eficiência por hora",
            values: [11, 22, 10, 70, 90],
            labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
            label: 'Eficiência',
            type: "line",
        },
        {
            title: "Obstrução por Setores",
            values1: [5, 95, 5, 17, 22],
            values2: [80, 5, 90, 62, 75],
            labels: ['Norte', 'Sul', 'Leste', 'Oeste', 'Centro'],
            label: ["Nível de Obstrução", "Nível de Eficiência"],
            type: "bar",
            colors: ['brown', 'orange'],
        },
        {
            title: "Irradiação por Setores",
            values1: [21.5, 32.5, 43.5, 54.5, 65.5],
            values2: [56.67, 67.67, 78.67, 89.67, 89.67],
            labels: ['Norte', 'Sul', 'Leste', 'Oeste', 'Centro'],
            label: ["Nível de Irradiação", "Eficiência Possível por Irradiação"],
            type: "bar",
            colors: ['lightblue', 'orange'],
        },
    ];

    const metricsData2 = [
        {
            title: "Temperaturas por Hora",
            values1: [21.5, 22.5, 23.5, 24.5, 25.5],
            values2: [40.5, 41.5, 42.5, 43.5, 44.5],
            labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
            label: ["Temperatura Externa", "Temperatura Interna"],
            type: "bar",
            colors: ['darkOrange', 'darkRed'],
        },
        {
            title: "Luminosidade por hora",
            values: [88, 79, 90, 100, 95],
            labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
            label: 'Luminosidade',
            type: "line",
        },
        {
            title: "Energia Gerada e Esperada por Hora",
            values1: [60.5, 70.5, 80.5, 90.5, 90.5],
            values2: [60, 70, 80, 90, 90],
            labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
            label: ["Energia Gerada", "Energia Esperada"],
            type: "bar",
            colors: ['cyan', 'blue'],
        }
    ];

    return (
        <Estructure>
            <Box sx={style().page}>
                <Box sx={style().dashboard}>
                    <Box sx={style().kpis}>
                        {kpiData.map((kpi, index) => (
                            <Box key={index} sx={style().kpi}>
                                <Box sx={style().kpiHeader}>
                                    <Typography sx={style().kpiTitle}>{kpi.title}</Typography>
                                </Box>
                                <Box sx={style().kpiValueBox}>
                                    {kpi.type === "pie" && (
                                        <PieChart
                                            series={[
                                                {
                                                    data:
                                                        [
                                                            { id: 0, value: kpi.value[0], label: kpi.value[0] + "%", color: 'blue' },
                                                            { id: 1, value: kpi.value[1], label: kpi.value[1] + "%", color: 'orange' },
                                                        ],
                                                    innerRadius: 11,
                                                    paddingAngle: 5,
                                                    cornerRadius: 5,
                                                    cx: 60,
                                                    cy: 60,
                                                }
                                            ]}
                                            width={200}
                                            height={150}
                                        />
                                    )}
                                    {kpi.type === "bar" && (
                                        <BarChart
                                            series={[
                                                { data: kpi.value1, stack: 'stack1', color: 'orange' },
                                                { data: kpi.value2, stack: 'stack1', color: 'red' },
                                            ]}
                                            xAxis={
                                                [
                                                    { data: [kpi.label], scaleType: 'band' }
                                                ]
                                            }
                                            width={150}
                                            height={160}
                                        />
                                    )}
                                    <Box sx={style().textKpi}>
                                        <Typography sx={style().kpiValue}>{kpi.text}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={style().charts}>
                        {metricsData1.map((metric, index) => (
                            <Box key={index} sx={style().chart}>
                                <Box sx={style().chartHeader}>
                                    <Typography sx={style().chartTitle}>{metric.title}</Typography>
                                </Box>
                                <Box sx={style().chartBox}>
                                    {metric.type === "line" && (
                                        <LineChart
                                            series={[
                                                { data: metric.values, color: 'orange', label: metric.label }
                                            ]}
                                            xAxis={[{ scaleType: 'point', data: metric.labels }]}
                                            width={500}
                                            height={300}
                                        />
                                    )}
                                    {metric.type === "bar" && (
                                        <BarChart
                                            series={[
                                                { data: metric.values1, color: metric.colors[0], label: metric.label[0] },
                                                { data: metric.values2, color: metric.colors[1], label: metric.label[1] },
                                            ]}
                                            xAxis={
                                                [
                                                    { data: metric.labels, scaleType: 'band' }
                                                ]
                                            }
                                            width={500}
                                            height={300}
                                        />
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={style().charts}>
                        {metricsData2.map((metric, index) => (
                            <Box key={index} sx={style().chart}>
                                <Box sx={style().chartHeader}>
                                    <Typography sx={style().chartTitle}>{metric.title}</Typography>
                                </Box>
                                <Box sx={style().chartBox}>
                                    {metric.type === "line" && (
                                        <LineChart
                                            series={[
                                                { data: metric.values, color: 'orange', label: metric.label }
                                            ]}
                                            xAxis={[{ scaleType: 'point', data: metric.labels }]}
                                            width={500}
                                            height={300}
                                        />
                                    )}
                                    {metric.type === "bar" && (
                                        <BarChart
                                            series={[
                                                { data: metric.values1, color: metric.colors[0], label: metric.label[0] },
                                                { data: metric.values2, color: metric.colors[1], label: metric.label[1] },
                                            ]}
                                            xAxis={
                                                [
                                                    { data: metric.labels, scaleType: 'band' }
                                                ]
                                            }
                                            width={500}
                                            height={300}
                                        />
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Estructure>
    );
}

export default Dashboard;