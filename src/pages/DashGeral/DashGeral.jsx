import React, { useState } from 'react';
import { IconButton, Toolbar, Link, Paper, AppBar, Typography, Container, Menu, Grid, Button, Hidden, Box, Input, styled } from '@mui/material';
import style from './dashGeral.module.css';
import { useNavigate } from 'react-router-dom';
import Metrics from '../../components/metricsBox/metrics';
import Chart from '../../components/chart/chartJs'


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

                                            <Metrics nomeMetrica='Taxa de eficiencia por hora' valorCliente='85' tipoMedida='%' />
                                            <Metrics nomeMetrica='Área de irradiação solar por hora' valorCliente='85' tipoMedida='m' separador='-' valorLimite='150' tipoMedidaLimite='m' />
                                            <Metrics nomeMetrica='Eficiencia por porcentatagem de obstrução' valorCliente='14' tipoMedida='%' separador='-' valorLimite='62' tipoMedidaLimite='%' />
                                            <Metrics nomeMetrica='Eficiencia dos paineis por orientação/inclinação' valorCliente='55' tipoMedida='%' separador='-' valorLimite='Norte' separadorLimite='/' tipoMedidaLimite='32.2' />
                                            <Metrics nomeMetrica='Taxa de eficiencia por setor' valorCliente='31' tipoMedida='%' />


                                        </div>
                                        <div className={style.metricsBoxPhaseTwo}>
                                            <Metrics nomeMetrica='Nivel de obstrução Setor A' valorCliente='5' tipoMedida='%' />
                                            <Metrics nomeMetrica='Nivel de obstrução Setor B' valorCliente='95' tipoMedida='%' />
                                            <Metrics nomeMetrica='Nivel de obstrução Setor C' valorCliente='2' tipoMedida='%' />
                                            <Metrics nomeMetrica='Nivel de obstrução Setor D' valorCliente='14' tipoMedida='%' />
                                            <Metrics nomeMetrica='Nivel de obstrução Setor E' valorCliente='2' tipoMedida='%' />
                                        </div>
                                        <div className={style.metricsBoxPhaseThree}>

                                            <div className={style.graphic}>
                                                <Chart data={[12, 19, 3, 5, 2, 3]} dataTwo={[22, 22, 22, 22, 22, 22]} label='watts por mês' labelTwo='watts esperados por mês'
                                                 labels={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']} title='Energia obtida x energia esperada por mês'/>
                                            </div>
                                            <div className={style.graphic}>
                                                <Chart title='Quantidade de Manutenções por mês' data={[22, 9, 33, 25, 21, 3]} label='Manutenções por mês' 
                                                labels={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']} labelTwo='Teto de manutenções' dataTwo={[33, 33, 33, 33, 33, 33]}/>
                                            </div>
                                            <div className={style.graphic}>
                                                <Chart title='Quantidade de substituições por mês' data={[2, 9, 3, 0, 1, 0]} label='substituições por mês' 
                                                labels={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']} labelTwo='Teto de manutenções' dataTwo={[2, 2, 2, 2, 2, 2]}/>
                                            </div>

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