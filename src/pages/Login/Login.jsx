import React, { useState } from 'react';
import { IconButton, Toolbar, Link, Paper, AppBar, Typography, Container, Menu, Grid, Button, Hidden, Box, Input, styled } from '@mui/material';
import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    return (
        <>
            <Paper>
                <Grid container xs={12} md={12} sm={12}>
                    <Grid container item xs={12} md={12} sm={12}>

                        <div className={style.banner}>
                            <div className={style.shadowBanner}>
                                <div className={style.loginBox}>
                                    <div className={style.loginBoxTopSide} onClick={() => navigate('/')}>

                                    </div>
                                    <div className={style.loginBoxBottomSide}>
                                        <form action="" className={style.loginBoxForm}>
                                        <span className={style.spanLogin}>
                                        <div className={style.div1}></div>
                                        <input type="text" placeholder='Your Email'/>
                                        </span>
                                        <span className={style.spanLogin}>
                                        <div className={style.div2}></div>
                                        <input type="text" placeholder='Your Email'/>
                                        </span>
                                        <b>Forgot your password?</b>
                                        <Button onClick={() => navigate('/dash-geral')}>Login</Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Login;