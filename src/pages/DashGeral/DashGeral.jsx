import React, { useState } from 'react';
import { IconButton, Toolbar, Link, Paper, AppBar, Typography, Container, Menu, Grid, Button, Hidden, Box, Input, styled } from '@mui/material';
import style from './dashGeral.module.css';
import { useNavigate } from 'react-router-dom';
import Metrics from '../../components/metricsBox/metrics';
import Chart from '../../components/lineChart/chartJs'
import DoughnutChart from '../../components/dougnutChart/dougnut';
import BarChart from '../../components/barChart/barChart';
import Informacoes from '../../components/infoUtil/Informacoes';

function Dash() {

    const navigate = useNavigate();

    return (
        <>
            <Paper>
                <Grid container xs={12} md={12} sm={12}>
                    <Grid container item xs={12} md={12} sm={12}>

                        <div className={style.banner}>
                            <div className={style.shadowBanner}>
                                <Grid xs={1} md={1} sm={1}>

                                    <div className={style.sideBar}>
                                        <div className={style.sideBarIconBox}>
                                            <div className={style.sideBarIconEye} onClick={() => navigate('/')}></div>
                                            <div className={style.DashOne}></div>
                                            <div className={style.DashTwo}></div>
                                        </div>
                                    </div>

                                </Grid>
                                <Grid xs={11} md={11} sm={11}>

                                    <div className={style.metricsBox}>

                                        <div className={style.metricsBoxPhaseOne}>

                                            <Metrics nomeMetrica='Tempo de vida medio dos paineis' valorCliente='5' tipoMedida='anos' />
                                            <Metrics nomeMetrica='Área de irradiação solar por hora' valorCliente='85' tipoMedida='m' separador='/' valorLimite='150' tipoMedidaLimite='m' />
                                            <Metrics nomeMetrica='Eficiencia por obstrução' valorCliente='14' tipoMedida='%' separador='/' valorLimite='62' tipoMedidaLimite='%' />
                                            <Metrics nomeMetrica='Eficiencia por orientação/inclinação' valorCliente='55' tipoMedida='%' separador='-' valorLimite='Norte' separadorLimite='/' tipoMedidaLimite='32.2' />
                                            <Metrics nomeMetrica='Taxa de eficiencia geral' valorCliente='63' tipoMedida='%' />


                                        </div>

                                        <div className={style.metricsBoxPhaseThree}>

                                            <div className={style.graphic}>
                                                <Chart title='Eficiencia por hora' labels={[6,7,8,9,10]} label='Eficiencia' data={[11,22,10,70,90]} medida={'%'} media={50} lineColor={'yellow'} borderColor={'yellow'}/>
                                            </div>
                                            <div className={style.graphic}>
                                                <BarChart title='Obstrução por setores' dataChart1={[5, 95, 2, 14]} dataChart2={[80, 5, 90, 62, 82]} labels={['A', 'B', 'C', 'D']} label1='Nivel de obstrução' label2='Nivel de eficiencia' medida='%' colorBarLeft={'rgba(255, 99, 132, 0.2)'} colorBorderBarLeft={'rgba(255, 99, 132, 1)'} colorBarRight={'rgba(234,240,70,60)'}/>
                                            </div>
                                            <div className={style.graphic}>
                                                <BarChart title='Irradiação por setores' dataChart1={[21.25, 21.25, 21.25, 21.25]} labels={['A', 'B', 'C', 'D']} label1='Nivel de Irradiação' medida='%' colorBarLeft={'gold'} colorBorderBarLeft={'white'} limite={37.5} label2='Eficiencia possivel por irradiação' dataChart2={[56.67, 56.67, 56.67, 56.67]} media={18.75} colorBarRight={'rgba(234,240,70,60)'}/>
                                            </div>

                                        </div>
                                            
                                        <div className={style.metricsBoxPhaseFour}>
                                            <Informacoes nome='Tamanho dos setores:' info=' 37.2 m^2' title='Medidas' nome1='Tamanho da fazenda:' info1=' 150 m^2'/>
                                          
                                        </div>

                                    </div>

                                </Grid>
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </Paper>

        </>
    )


}

export default Dash;