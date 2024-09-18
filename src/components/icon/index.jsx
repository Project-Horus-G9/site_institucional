import React from "react";

import SolarPowerRoundedIcon from '@mui/icons-material/SolarPowerRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';

function Icon({ nameIcon, styleIcon }) {

    const icon = () => {
        switch (nameIcon) {
            case "SolarPowerRoundedIcon":
                return <SolarPowerRoundedIcon sx={styleIcon} />;
            case "DashboardRoundedIcon":
                return <DashboardRoundedIcon sx={styleIcon} />;
            case "InsightsRoundedIcon":
                return <InsightsRoundedIcon sx={styleIcon} />;
            case "WaterDropRoundedIcon":
                return <WaterDropRoundedIcon sx={styleIcon} />;
            case "MenuIcon":
                return <MenuIcon sx={styleIcon} />;
            case "ArrowBackIosIcon":
                return <ArrowBackIosIcon sx={styleIcon} />;
            case "LogoutIcon":
                return <LogoutIcon sx={styleIcon} />;
            case "DashboardIcon":
                return <DashboardIcon sx={styleIcon} />;
            case "GroupIcon":
                return <GroupIcon sx={styleIcon} />;
            default:
                return <></>;
        }
    }

    return (
        <>
            {icon()}
        </>
    );    
}

export default Icon;