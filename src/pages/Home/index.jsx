import React from "react";
import { style } from "./style.js";

import { Box, Typography, Divider, TextField, Button } from "@mui/material";

import TeamBox from "../../components/TeamBox/index.jsx";
import ServiceBox from "../../components/ServiceBox/index.jsx";

import { useNavigate } from "react-router-dom";

function Home() {

    const merchan = "Horus o potencial do sol em nossas mãos";
    const sobreNos = "Nós da project Horus nos dedicamos totalmente as necessidades de nossos clientes, garantindo uma solução continua e otimizada de observabilidade sobre seus ativos de produção de energia solar, garantindo desta forma que os mesmos possam ter a acurracia de corrigir possiveis problemas existentes, dessa forma evitando qualquer tipo de perda monetaria e otimizando seus lucros.";

    const servicosTexto = "Para garantir aos nossos clientes eficacia máxima em obtenção de lucro temos o orgulho de oferecer uma gama de serviços relacionados ao negócio de nossos clientes, sendo eles voltados a monitoramento."
    const servicos = {
        "1": {
            "titulo": "Monitoramento",
            "descricao": "Acompanhe em tempo real a performance de suas placas solares com nosso sistema avançado de monitoramento. Tenha total visibilidade sobre a geração de energia e garanta a máxima eficiência dos seus ativos",
            "icon": "SolarPowerRoundedIcon"
        },
        "2": {
            "titulo": "Dashboards",
            "descricao": "Acesse dashboards dinâmicos e personalizados, projetados para oferecer uma visualização clara e intuitiva dos dados de produção de energia solar, facilitando a análise de desempenho e tomada de decisões",
            "icon": "DashboardRoundedIcon"
        },
        "3": {
            "titulo": "Insights",
            "descricao": "Obtenha insights inteligentes com base nos dados de produção de energia solar, permitindo uma compreensão aprofundada do desempenho e oportunidades de otimização de seus sistemas solares",
            "icon": "InsightsRoundedIcon"
        }
    }

    const time = {
        "1": {
            "nome": "Diana",
            "cargo": "Analista de Dados"
        },
        "2": {
            "nome": "Marco",
            "cargo": "Gerente de Dados"
        },
        "3": {
            "nome": "Giovana",
            "cargo": "Desenvolvedora Back-End"
        },
        "4": {
            "nome": "VictorZ",
            "cargo": "Desenvolvedor Full Stack"
        },
        "5": {
            "nome": "VictorH",
            "cargo": "Analista de Infraestrutura"
        },
        "6": {
            "nome": "Pedro",
            "cargo": "Gerente de Infraestrutura"
        }
    }

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }

    const handleCadastro = () => {
        navigate("/cadastro");
    }

    const handleNavbar = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    if (window.location.hash) {
        const element = document.getElementById(window.location.hash.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Box sx={style().home}>
            <Box sx={style().buttonsNavbar}>
                <Box sx={style().buttonGroup}>
                    <Button variant="contained" sx={style().buttonNavbar} onClick={handleNavbar.bind(this, "home")}>Home</Button>
                    <Button variant="contained" sx={style().buttonNavbar} onClick={handleNavbar.bind(this, "sobre")}>Sobre</Button>
                    <Button variant="contained" sx={style().buttonNavbar} onClick={handleNavbar.bind(this, "servicos")}>Serviços</Button>
                    <Button variant="contained" sx={style().buttonNavbar} onClick={handleNavbar.bind(this, "equipe")}>Equipe</Button>
                    <Button variant="contained" sx={style().buttonNavbar} onClick={handleNavbar.bind(this, "contato")}>Contato</Button>
                </Box>
                <Box sx={style().login}>
                    <Divider sx={style().dividerNavbar} orientation="vertical" flexItem />
                    <Button variant="contained" sx={style().buttonLogin} onClick={handleLogin}>Login</Button>
                    <Button variant="contained" sx={style().buttonLogin} onClick={handleCadastro}>Cadastro</Button>
                </Box>
            </Box>
            <Box sx={style().banner} id="home">
                <Box sx={style().logo}></Box>
                <Typography sx={style().subtitle}>O potencial do sol em suas mãos</Typography>
            </Box>
            <Box sx={style().container} id="servicos">
                <Typography sx={style().title}>Nossos Serviços</Typography>
                <Divider sx={style().divider} />
                <Typography sx={style().textServices}>
                    {servicosTexto}
                </Typography>
                <Box sx={style().services}>
                    {Object.keys(servicos).map((key) => {
                        return <ServiceBox serviceInfo={servicos[key]} />
                    })}
                </Box>
            </Box>
            <Box sx={style().containerSobre} id="sobre">
                <Box sx={style().separator}>
                    <Box sx={style().sobre}>
                        <Typography sx={style().title}>Sobre Nós</Typography>
                        <Divider sx={style().divider} />
                        <Typography sx={style().text}>
                            {sobreNos}
                        </Typography>
                        <Typography sx={style().text}>
                            {merchan}
                        </Typography>
                    </Box>
                    <Box sx={style().imgSobre}>
                        <Box sx={style().bgSobreNos}></Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={style().container} id="equipe">
                <Typography sx={style().title}>Nossa Equipe</Typography>
                <Divider sx={style().divider} />
                <Box sx={style().team}>
                    {Object.keys(time).map((key) => {
                        return <TeamBox nome={time[key].nome} cargo={time[key].cargo} />
                    })}
                </Box>
            </Box>
            <Box sx={style().containerFale} id="contato">
                <Box sx={style().separator}>
                    <Box sx={style().imgFale}>
                        <Box sx={style().bgFaleConosco}></Box>
                    </Box>
                    <Box sx={style().faleConosoco}>
                        <Typography sx={style().title}>Fale Conosco</Typography>
                        <Divider sx={style().divider} />
                        <TextField label="Nome" variant="outlined" sx={style().input} />
                        <TextField label="Email" variant="outlined" sx={style().input} />
                        <TextField label="Mensagem" variant="outlined" multiline rows={4} sx={style().input} />
                        <Button variant="contained" sx={style().button}>Enviar</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={style().containerContato} id="contato">
                <Typography sx={style().title}>Contato</Typography>
                <Divider sx={style().divider} />
                <Box sx={style().contactBox}>
                    <Typography sx={style().contact}>Telefone:</Typography>
                    <Typography sx={style().item}>(11) 95240-8153</Typography>
                </Box>
                <Box sx={style().contactBox}>
                    <Typography sx={style().contact}>Email:</Typography>
                    <Typography sx={style().item}>
                        <a href="mailto:" style={{ textDecoration: 'none', color: 'black' }}>
                            horus_oficial@outlook.com
                        </a>
                    </Typography>
                </Box>
                <Box sx={style().contactBox}>
                    <Typography sx={style().contact}>Endereço:</Typography>
                    <Typography sx={style().item}>Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001</Typography>
                </Box>
                {/* <Box sx={style().contactBox}>
                    <Typography sx={style().contact}>Instagram:</Typography>
                    <Typography sx={style().item}>
                        <a href="https://www.instagram.com/" style={{ textDecoration: 'none', color: 'black' }}>
                            @horusgrupo
                        </a>
                    </Typography>
                </Box> */}
                <Box sx={style().contactBox}>
                    <Typography sx={style().contact}>Github:</Typography>
                    <Typography sx={style().item}>
                        <a href="https://github.com/Project-Horus-G9/" style={{ textDecoration: 'none', color: 'black' }}>
                            Projeto Hórus
                        </a>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;