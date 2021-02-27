import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import StarIcon from '@material-ui/icons/Star';
import { CalendarToday, LocationOn} from '@material-ui/icons';
import LinkIcon from '@material-ui/icons/Link';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

const styles = (theme) => ({
    paper: {
        padding: 20,
        width: '25vw',
        marginLeft: '35%'
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
    }
});

const StaticProfile = (props) => {
    const { classes, profile: { handle, createdAt, imageUrl, bio, website, location, pronouns, climbingStyle }} = this.props

    return(
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
                </div>
            </Paper>
    )
}

StaticProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(StaticProfile)

