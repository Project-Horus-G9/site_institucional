import React from "react";
import { style } from "./style.js";

import { Box, Typography } from "@mui/material";

import Icon from "../../components/icon/index.jsx";

function ServiceBox({ serviceInfo }) {

    return (
        <>
            <Box sx={style().serviceBox}>
                <Box sx={style().iconBox}>
                    <Icon nameIcon={serviceInfo.icon} styleIcon={style().icon} />
                </Box>
                <Box sx={style().info}>
                    <Typography sx={style().name}>{serviceInfo.titulo}</Typography>
                    <Typography sx={style().description}>{serviceInfo.descricao}</Typography>
                </Box>
            </Box>
        </>
    );
}

export default ServiceBox;