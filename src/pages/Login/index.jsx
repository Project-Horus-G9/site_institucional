import React, { useState } from "react";
import { style } from "./style.js";
import emailjs from 'emailjs-com';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button } from "@mui/material";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState('');
    const [tokenUser, setTokenUser] = useState('');
    const [showToken, setShowToken] = useState(false);
    const acessToken = uuidv4();
    const [errorText, setErrorText] = useState('');

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            handleLogin();
        }
    }

    const handleLogin = () => {
        if (email === '' || senha === '') {
            setErrorText('Preencha todos os campos');
        } else if (!email.includes('@') || !email.includes('.com')) {
            setErrorText('Digite um e-mail válido'); 
        } else if (token === '') {
            loginToken();
        } else {
            verifyToken();
        }
    }

    const loginToken = () => {
        const templateParams = {
            to_email: email,
            subject: 'Token de acesso',
            message: `Seu token ${acessToken}`,
        };

        emailjs.send('service_nl30b86', 'template_4icn1dp', templateParams, 'vb0edIpgnEmtHP5Bp')
            .then((result) => {
                console.log(result.text);
                setToken(acessToken);
                setShowToken(true); 
                setErrorText('Digite o token enviado para o seu e-mail');
            }, (error) => {
                console.log(error.text);
            });
    }

    const verifyToken = () => {
        if (tokenUser === acessToken) {
            sessionStorage.setItem('token', tokenUser);
            navigate('/dashboard');
        } else {
            setErrorText('Token inválido');
        }
    }

    return (
        <Box sx={style().page}>
            <Box sx={style().loginBox}>
                <Typography sx={style().title}>Login</Typography>
                <TextField 
                    sx={style().input} 
                    label="E-mail" 
                    variant="outlined" 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <TextField 
                    sx={style().input} 
                    label="Senha" 
                    variant="outlined" 
                    type="password" 
                    onChange={(e) => setSenha(e.target.value)} 
                    onKeyPress={handleEnter} 
                />
                {showToken && (
                    <TextField 
                        sx={{ width: '80%', marginBottom: '10px' }} 
                        label="Token" 
                        variant="outlined" 
                        onChange={(e) => setTokenUser(e.target.value)}
                        onKeyPress={handleEnter}
                    />
                )}
                <Button sx={style().buttonEsqueceu}>Esqueceu a senha?</Button>
                <Button sx={style().button} variant="contained" onClick={handleLogin}>Entrar</Button>
                <Typography sx={style().error}>{errorText}</Typography>
            </Box>
        </Box>
    );
}

export default Login;
