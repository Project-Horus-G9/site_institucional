import React, { useState } from 'react';
import { IconButton, Toolbar, Link, Paper, AppBar, Typography, Container, Menu, Grid, Button, Hidden, Box, Input, styled } from '@mui/material';
import style from './metrics.module.css';
import { useNavigate } from 'react-router-dom';

function Metrics(props) {

    return (
        <>

            <div className={style.metrics}> 
                <div className={style.metricsName}>
                   <b>{props.nomeMetrica}</b> 
                </div>
                <div className={style.metricsValue}> 
                    {props.valorCliente}{props.tipoMedida} {props.separador} {props.valorLimite}{props.separadorLimite}{props.tipoMedidaLimite}
                </div>
            </div>
        

        </>
    )
}


export default Metrics;