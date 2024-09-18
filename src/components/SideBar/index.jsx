import React from 'react';
import { Box, Typography, Avatar, Button, ButtonGroup } from '@mui/material';
import { style } from './style.js';
import { useNavigate } from 'react-router-dom';

import Icon from '../icon/index.jsx';

function SideBar(props) {
  const [open, setOpen] = React.useState(false);

  const { side, setSide } = props.sideState;

  const iconProps = {
    color: '#fff',
    fontSize: '28px',
    margin: '0 5px',
  };

  const handleSideBar = () => {
    setOpen(!open);
    setSide(!side);
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate('/');
  }

  const handleMenu = (path) => {
    navigate(path);
  }

  return (
    <>
      <Box sx={open ? style().sideBarOpen : style().sideBarClosed}>
        <Box sx={style().sideBarHeader}>
          <Box sx={style().sideBarIcon}>
            <Button onClick={handleSideBar} sx={style().sideBarButton}>
              {open ? <Icon nameIcon="ArrowBackIosIcon" styleIcon={style().icon} /> : <Icon nameIcon="MenuIcon" styleIcon={style().icon} />}
            </Button>
          </Box>
          <Box sx={open ? style().userInformation : style().userInformationClosed}>
            <Avatar sx={style().avatar} />
            <Typography sx={style().nome}>Horus</Typography>
          </Box>
          {open ? (
            <ButtonGroup orientation="vertical" variant="text" sx={style().menuButton}>
              <Button sx={style().button}><Icon nameIcon="DashboardIcon" styleIcon={style().icon} /> Dashboard</Button>
              <Button sx={style().button}><Icon nameIcon="GroupIcon" styleIcon={style().icon} /> Paineis</Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup orientation="vertical" variant="text" sx={style().menuButton}>
              <Button sx={style().button}><Icon nameIcon="DashboardIcon" styleIcon={style().icon} /> </Button>
              <Button sx={style().button}><Icon nameIcon="GroupIcon" styleIcon={style().icon} /> </Button>
            </ButtonGroup>
          )}
          {open ? (
            <Button sx={style().buttonSair} onClick={handleLogout}><Icon nameIcon="LogoutIcon" styleIcon={style().icon} /></Button>
          ) : (
            <Button sx={style().buttonSair} onClick={handleLogout}><Icon nameIcon="LogoutIcon" styleIcon={style().icon} /></Button>
          )}
        </Box>
      </Box>
    </>
  );
}

export default SideBar;
