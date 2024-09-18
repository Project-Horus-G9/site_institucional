import React from "react";
import { style } from "./style.js";

import { Box, Typography } from "@mui/material";

import Diana from "../../assets/images/equipe/Diana.jpg";
import Marco from "../../assets/images/equipe/Marco.jpg";
import Giovana from "../../assets/images/equipe/Giovana.jpg";
import VictorZ from "../../assets/images/equipe/VictorZ.jpg";
import VictorH from "../../assets/images/equipe/VictorH.jpg";
import Pedro from "../../assets/images/equipe/Pedro.jpg";

function TeamBox(props) {

    switch (props.nome) {
        case "Diana":
            var image = Diana;
            var nome = "Diana Augusta";
            break;
        case "Marco":
            var image = Marco;
            var nome = "Marco Antônio";
            break;
        case "Giovana":
            var image = Giovana;
            var nome = "Giovana Sanchez";
            break;
        case "VictorZ":
            var image = VictorZ;
            var nome = "Victor Zanin";
            break;
        case "VictorH":
            var image = VictorH;
            var nome = "Victor Hugo";
            break;
        case "Pedro":
            var image = Pedro;
            var nome = "Pedro França"
            break;
        default:
            var image = "";
    }

    return (
        <Box sx={style().teamBox}>
            <Box component="img" src={image} sx={style().image} alt={props.nome} />
            <Box sx={style().info}>
                <Typography sx={style().name}>{nome}</Typography>
                <Typography sx={style().role}>{props.cargo}</Typography>
            </Box>
        </Box>
    );
}

export default TeamBox;