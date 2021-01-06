import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { editUserDetails } from '../redux/actions/userActions';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import UserButton from '../util/UserButton';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';

const styles = ({
    button: {
        float: 'right'
    }
})

class EditDetails extends Component {
    state = {
        bio: '',
        website: '',
        location: '',
        open: false
    }

    mapUserDetailsToState = (credentials) => {
        this.setState({
            bio: credentials.bio ? credentials.bio : '',
            location: credentials.location ? credentials.location : '',
            pronouns: credentials.pronouns ? credentials.pronouns : '',
            climbingStyle: credentials.climbingStyle ? credentials.climbingStyle : '',
            website: credentials.website ? credentials.website : ''
        })
    }
    
    handleOpen = () => {
        this.setState({ open: true })
        this.mapUserDetailsToState(this.props.credentials)

    }

    handleClose = () => {
        this.setState({ open: false })
    }

    componentDidMount(){
        const { credentials } = this.props
        this.mapUserDetailsToState(credentials)
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const userDetails = {
            bio: this.state.bio,
            location: this.state.location,
            pronouns: this.state.pronouns,
            climbingStyle: this.state.climbingStyle,
            website: this.state.website
        }
        editUserDetails(userDetails)
        this.handleClose()
    }
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <UserButton 
                    tipTitle='Edit details'
                    onClick={this.handleOpen}
                    className={classes.button}>
                        <EditIcon color='primary'/>
                </UserButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth='sm'
                >
                    <DialogTitle>Edit your details</DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField
                                name='bio'
                                type='text'
                                label='Bio'
                                multiline
                                rows='3'
                                placeholder='A short bio about yourself'
                                className={classes.textField}
                                value={this.state.bio}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <TextField
                                name='location'
                                type='text'
                                label='Location'
                                placeholder='Where are you located?'
                                className={classes.textField}
                                value={this.state.location}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <TextField
                                name='pronouns'
                                type='text'
                                label='pronouns'
                                placeholder='What are your preferred pronouns?'
                                className={classes.textField}
                                value={this.state.pronouns}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <TextField
                                name='climbingStyle'
                                type='text'
                                label='ClimbingStyle'
                                placeholder='What kind of climbing do you enjoy?'
                                className={classes.textField}
                                value={this.state.climbingStyle}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <TextField
                                name='website'
                                type='text'
                                label='Website'
                                placeholder='Add another social media link'
                                className={classes.textField}
                                value={this.state.website}
                                onChange={this.handleChange}
                                fullWidth
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color='secondary'>
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color='secondary'>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

EditDetails.propTypes = {
    editUserDetails: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    credentials: state.user.credentials
})

export default connect(mapStateToProps, {EditDetails})(withStyles(styles)(EditDetails))
