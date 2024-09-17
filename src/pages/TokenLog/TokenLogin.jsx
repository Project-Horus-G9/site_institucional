import React, { useState } from 'react';
import { IconButton, Toolbar, Link, Paper, AppBar, Typography, Container, Menu, Grid, Button, Hidden, Box, Input, styled } from '@mui/material';
import style from './TokenLogin.module.css';
import { useNavigate, useLocation} from 'react-router-dom';
import emailjs from 'emailjs-com';

function TokenLogin() {

    const location = useLocation();
    const navigate = useNavigate();
    const [ValidateToken ,setValidateToken] = useState();

    const { token } = location.state || {};

    const tokenAprove = (event) =>{
        event.preventDefault();

        if (token && token === ValidateToken ) {
            navigate('/dash-geral');
        }


    }
    

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
                                        <form onSubmit={tokenAprove} className={style.loginBoxForm}>

                                            <span className={style.spanLogin}>
                                                <div className={style.div2}></div>
                                                <input type="password" placeholder='Your Token' id="token"   value={ValidateToken}
                                                onChange={(e) => setValidateToken(e.target.value)}/>
                                            </span>

                                            <Button type="submit">Verify</Button>
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

export default TokenLogin;