import React, {
    Component, 
    // useRef, 
    // Fragment
    } from 'react';
import {
    AppBar, 
    Toolbar, 
    Button, 
    IconButton, 
    // Menu, 
    // MenuItem 
    } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MakePost from './MakePost';
import UserButton from '../util/UserButton';
import HomeIcon from '@material-ui/icons/Home';
import PropTypes from 'prop-types';
import WhiteKnot from '../assets/small-white-knot.png';
import '../styles/NavBar.css';

class NavBar extends Component {
    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    render() {
        const { authenticated } = this.props
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
                { authenticated ? (
                    <div className='right-side'>
                        <MakePost />
                        <Link to='/home'>
                            <UserButton 
                                tipTitle='Home'
                                aria-label='Home Button'
                            >
                                <HomeIcon 
                                    color='inherit'
                                />
                            </UserButton>
                        </Link>
                        <UserButton
                            aria-label='notifcations'
                            tipTitle='Notifications'
                        >
                            <NotificationsIcon
                                color='inherit'
                            />
                        </UserButton>
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
                ) : (
                    <div className='right-side'>
                        <Button 
                            aria-label='home button'
                            color='inherit'
                            component={Link}
                            to='/home'
                            className='home-button'
                        >
                            Home
                        </Button>
                        <Button 
                            aria-label='login button'
                            color='inherit'
                            component={Link}
                            to='/login'
                        >
                            Login
                        </Button>
                        <Button 
                            aria-label='register button'
                            color='inherit'
                            component={Link}
                            to='/register'
                        >
                            Register
                        </Button>
                    </div>

                ) }
                </Toolbar>
            </AppBar>
        )
    }
}

NavBar.propTypes = {
    authenticated: PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(NavBar)