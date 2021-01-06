import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, uploadImage } from '../redux/actions/userActions';
import EditDetails from './EditDetails';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, Paper, Typography } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import LinkIcon from '@material-ui/icons/Link';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import StarIcon from '@material-ui/icons/Star';
import { CalendarToday, LocationOn} from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';


const styles = (theme) => ({
    paper: {
        padding: 20,
        width: '25vw'
    },
    profile: {
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
                position: 'absolute',
                top: '80%',
                left: '70%'
            }
        },
        '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
        },
        '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
                verticalAlign: 'middle'
            },
            '& a': {
            color: '#00bcd4'
            }
        },
        '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
        },
        '& svg.button': {
            '&:hover': {
                cursor: 'pointer'
            }
        }
    },
    buttons: {
        textAlign: 'center',
        '& a': {
            margin: '20px 10px'
        }
    }
});

class Profile extends Component {

    handleImageChange = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        this.props.uploadImage(formData);
    }

    handleEditImage = () => {
        const fileInput = document.getElementById('imageUpload')
        fileInput.click();
    }

    handleLogout = () => {
        this.props.logoutUser()
    }

    render() {
        const { 
            classes, 
            user: { 
                credentials: { 
                    handle, 
                    createdAt, 
                    imageUrl, 
                    bio,
                    pronouns,
                    climbingStyle, 
                    website, 
                    location
                }, 
                loading,
                authenticated
            } 
        } = this.props

        let profileMarkup = !loading ? (authenticated ? (
            <Paper className={classes.paper}>
                <div className={classes.profile}>
                    <div className='image-wrapper'>
                        <img
                            className='profile-image'
                            src={imageUrl} 
                            alt='profile'
                        />
                        <input 
                            type='file' 
                            id='imageUpload' 
                            hidden='hidden'
                            onChange={this.handleImageChange}
                        />
                        <Tooltip 
                            title='Edit profile picture' 
                        >
                            <IconButton 
                                onClick={this.handleEditImage} 
                                className='button'
                            >
                                <EditIcon 
                                    color='secondary' 
                                />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <hr/>
                    <div className='profile-details'>
                        <MuiLink 
                            component={Link} 
                            to={`/users/${handle}`} 
                            color='primary' 
                            variant='h5'
                        >
                            @{handle}
                        </MuiLink>
                        <hr />
                        {bio && 
                            <Typography 
                                variant='body2'
                            >
                                {bio}
                            </Typography>
                        }
                        <hr/>
                        {location && (
                            <Fragment>
                                <LocationOn color='primary'/>
                                <span>{location}</span>
                                <hr/>
                            </Fragment>
                        )}
                        {pronouns && (
                            <Fragment>
                                <EmojiNatureIcon color='primary'/>
                                <span>{pronouns}</span>
                                <hr/>
                            </Fragment>
                        )}
                        {climbingStyle && (
                            <Fragment>
                                <StarIcon color='primary'/>
                                <span>{climbingStyle}</span>
                                <hr/>
                            </Fragment>
                        )}
                        {website && (
                            <Fragment>
                                <LinkIcon color='primary' />
                                <a 
                                    href={website} 
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    {' '}{'Website'}
                                </a>
                                <hr/>
                            </Fragment>
                        )}
                        <CalendarToday color='primary' />{' '}
                        <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
                    </div>
                    <Tooltip title='Logout' placement='top'>
                        <IconButton onClick={this.handleLogout}>
                            <KeyboardReturn color='primary' />
                        </IconButton>
                    </Tooltip>
                    <EditDetails editUserDetails={() => {}}/>
                </div>
            </Paper>
        ) : (
            <Paper className={classes.paper}>
                <Typography 
                    variant='body2' 
                    align='center'
                >
                    No profile found, please login or register.
                </Typography>
                <div className={classes.buttons}>
                    <Button
                        variant='contained'
                        color='primary'
                        component={Link}
                        to='/login'
                    >
                        Login
                    </Button>
                    <Button
                        variant='contained'
                        color='secondary'
                        component={Link}
                        to='/register'
                    >
                        Register
                    </Button>
                </div>
            </Paper>
        )) : (<p>Loading...</p>)
        
        return profileMarkup;
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapActionsToProps = { logoutUser, uploadImage }

Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Profile))