import React, { useState } from 'react';
import { IconButton, Toolbar, Link, Paper, AppBar, Typography, Container, Menu, Grid, Button, Hidden, Box, Input, styled } from '@mui/material';
import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { v4 as uuidv4 } from 'uuid';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState('');
    const acessToken = uuidv4();

    const loginToken = (event) => {
        event.preventDefault();

        const templateParams = {
            to_email: email,
            subject: 'Token de acesso',
            message: `Seu token ${acessToken} `,
        };

        emailjs.send()
            .then((response) => {
                console.log('Email sent successfully:', response);
                navigate('/tokenlogin', { state: { token: acessToken } });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });

            
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
                                        <form onSubmit={loginToken} className={style.loginBoxForm}>

                                            <span className={style.spanLogin}>
                                                <div className={style.div1}></div>
                                                <input type="text" placeholder='Your Email' id="email" value={email}
                                                onChange={(e) => setEmail(e.target.value)}/>
                                            </span>

                                            <span className={style.spanLogin}>
                                                <div className={style.div2}></div>
                                                <input type="password" placeholder='Your Password' id="senha"   value={senha}
                                                onChange={(e) => setSenha(e.target.value)}/>
                                            </span>

                                            <b>Forgot your password?</b>

                                            <Button type="submit">Login</Button>
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