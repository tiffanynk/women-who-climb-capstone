import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import WhiteKnot from '../assets/small-white-knot.png'
import '../styles/NavBar.css';


export default class NavBar extends Component {
    render() {
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
                        aria-label='user account'
                        color='inherit'
                    >
                        <AccountCircle/>
                    </IconButton>
                </div>
                </Toolbar>
            </AppBar>
        )
    }
}
