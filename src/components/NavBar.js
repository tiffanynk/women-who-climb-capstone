import React, {useRef} from 'react';
import {
    AppBar, 
    Toolbar, 
    Button, 
    IconButton, 
    Menu, 
    MenuItem 
    } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import WhiteKnot from '../assets/small-white-knot.png'
import '../styles/NavBar.css';

export default function NavBar () {
    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
        return (
            <AppBar className="nav-bar">
                <Toolbar className='nav-container'>
                <div className='left-side'>
                    <img 
                        className='logo-text' 
                        src={WhiteKnot} 
                        alt='Figure 8 knot'
                    />
                </div>
                <div className='right-side'>
                    <Button 
                        aria-label='home button'
                        color='inherit'
                        component={Link}
                        to='/home'
                    >
                        Home
                    </Button>
                    <IconButton
                        aria-label='notifcations'
                        color='inherit'
                    >
                        <NotificationsIcon/>
                    </IconButton>
                    <IconButton
                        aria-controls='menu'
                        aria-haspopup='true'
                        aria-label='user account'
                        color='inherit'
                        // onClick={handleClick}
                    >
                        <AccountCircle/>
                    </IconButton>
                    {/* <Menu
                        id='menu'
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Find a Crag</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu> */}
                </div>
                </Toolbar>
            </AppBar>
        )

}
