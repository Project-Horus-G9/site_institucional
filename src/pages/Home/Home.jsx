import React, { useState } from 'react';
import { IconButton, Toolbar, Link, Paper, AppBar, Typography, Container, Menu, Grid, Button, Hidden, Box, Input } from '@mui/material';
import style from './Home.module.css'
import TeamBox from '../../components/teamBox/teamBox';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <>

            <Paper sx={{
                width: '100%',
                height: '100%',
                padding: 0,
                margin: 0
            }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <Container style={{ width: '100%', height: '100%', display: 'flex', padding: 0 }} maxWidth={false}>
                        <Grid
                            container
                            direction="column"
                            sx={{ width: '100%', height: '100%' }}
                        >
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                sx={{ width: '100%', height: '100%' }}
                            >
                                <div className={style.banner}>
                                    <nav className={style.navbar}>
                                        <div className={style.divNavBar}>
                                            <Button className={style.bLogin} onClick={() => navigate('/login')}>Login</Button>
                                            <Button className={style.bsignIn}>Sign up</Button>
                                        </div>
                                    </nav>
                                    <div className={style.shadowBanner}>
                                        <div className={style.horusEye}></div>
                                    </div>
                                </div>


                            </Grid>
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                sx={{ width: '100%', height: '100%' }}
                            >
                                <div className={style.fisrtBoxAfterBanner}>
                                    <h1>Nossos Serviços</h1>
                                    <b>Para garantir aos nossos clientes eficacia máxima em obtenção de lucro temos o orgulho de
                                        oferecer uma gama de serviços relacionados ao negócio de nossos clientes, sendo eles voltados a
                                        monitoramento.
                                    </b>
                                    <div className={style.cardsContencion}>
                                        <div className={style.card}>
                                            <div>
                                                <div className={style.cardServ}></div>
                                            </div>
                                        </div>
                                        <div className={style.cardOne}>
                                            <div>
                                                <div className={style.cardServOne}></div>
                                            </div>
                                        </div>
                                        <div className={style.cardTwo}>
                                            <div>
                                                <div className={style.cardServTwo}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                sx={{ width: '100%', height: '100%' }}
                            >
                                <div className={style.secondtBoxAfterBanner}>
                                    <div className={style.secondBoxAfterBannerLeftSide}>
                                        <h1>Sobre nós</h1>
                                        <b>
                                            Nós da project Horus nos dedicamos totalmente as necessidades de
                                            nossos clientes, garantindo uma solução continua e otimizada de
                                            observabilidade sobre seus ativos de produção de energia solar,
                                            garantindo desta forma que os mesmos possam ter a acurracia de
                                            corrigir possiveis problemas existentes, dessa forma evitando
                                            qualquer tipo de perda monetaria e otimizando seus lucros.
                                            <br />
                                            <br />
                                            Horus o potencial do sol em nossas mãos
                                        </b>
                                    </div>
                                    <div className={style.secondBoxAfterBannerRightSide}>

                                    </div>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                sx={{ width: '100%', height: '100%' }}
                            >
                                <div className={style.thirdBoxAfterBanner}>
                                    <div className={style.thirdBoxAfterBannerTopSide}>
                                        <h1>Nossa Equipe</h1>
                                    </div>
                                    <div className={style.thirdBoxAfterBannerBottomSide}>
                                        <TeamBox imagem='Capturar.PNG' nome='Marco Antonio' cargo='Dev Estagiario' />
                                        <TeamBox  nome='Giovana Sanches' cargo='Dev Estagiario' imagem='Sanches.jpg'/>
                                        <TeamBox  nome='Victor Hugo' cargo='Dev Estagiario' imagem='virugo.jpg'/>
                                        <TeamBox  nome='Vitor Zanin' cargo='Dev Estagiario' imagem='zanin.jpg'/>
                                        <TeamBox  nome='Pedro Gustavo' cargo='Dev Estagiario' />
                                        <TeamBox  nome='Diana Leiba' cargo='Dev Estagiario' imagem='diana.jpg'/>
                                    </div>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                sx={{ width: '100%', height: '100%' }}
                            >
                                <div className={style.forthBoxAfterBanner}>
                                    <div className={style.forthBoxAfterBannerLeftSide}>

                                    </div>
                                    <div className={style.forthBoxAfterBannerRightSide}>
                                        <form className={style.signUpForm}>
                                            <h1>Sign up</h1>
                                            <br />
                                            <br />
                                            <Input className={style.input} placeholder='Your name'></Input>

                                            <Input className={style.input} placeholder='Your number'></Input>
                                            <Input className={style.input} placeholder='Your email'></Input>
                                            <Input className={style.input} placeholder='Your fantasy name'></Input>

                                            <Button className={style.buttom}>Cadastrar</Button>
                                        </form>
                                    </div>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                sx={{ width: '100%', height: '100%' }}
                            >
                                <div className={style.fifthBoxAfterBanner}>
                                    <div className={style.tittle}>
                                        <h1>Contact Us</h1>
                                    </div>
                                    <div className={style.contacts}>
                                        <h2>horusoficial@gmail.com</h2>
                                        <h2>horusoficial@gmail.com</h2>
                                        <h2>horusoficial@gmail.com</h2>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

            </Paper>
        </>
    );
}

export default Home;