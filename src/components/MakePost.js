import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserButton from '../util/UserButton';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import { connect } from 'react-redux';
import { makePost } from '../redux/actions/dataActions';


const styles = {
    submitButton: {
        position: 'relative'
    },
    progressSpinner: {
        position: 'absolute'
    },
    closeButton: {
        position: 'absolute',
        left: '90%',
        top: '10%'
    }
}

class MakePost extends Component {
    state = {
        open: false,
        body: '',
        errors: {}
    };

    
    handleOpen = () => {
        this.setState({ open: true})
    }

    handleClose = () => {
        this.setState({ open: false})
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.makePost({ body: this.state.body })
        this.setState({ open: false })
    }

    render(){
        const {errors} = this.state;
        const { classes, UI: { loading }} = this.props;
        return (
            <Fragment>
                <UserButton
                    onClick={this.handleOpen}
                    tipTitle='Make a Post'
                >
                    <AddIcon 
                        color='secondary'
                    />
                </UserButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth='sm'
                >
                    <UserButton 
                        tipTitle='Close' 
                        onClick={this.handleClose} 
                        tipClassName={classes.closeButton}
                    >
                        <CloseIcon/>
                    </UserButton>
                    <DialogTitle>Make a new Post</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                name='body'
                                type='text'
                                label='Post'
                                multiline
                                rows='3'
                                placeholder='Write a post'
                                error={errors.body ? true : false}
                                helperText={errors.body}
                                className={classes.textField}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <Button 
                                type='submit' 
                                variant='contained' 
                                color='secondary' 
                                className={classes.submitButton} 
                                disabled={loading}
                            >
                                Submit
                                {loading && (
                                    <CircularProgress 
                                    size={30} 
                                    className={classes.progressSpinner}
                                />
                                )}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}

MakePost.propTypes = {
    makePost: PropTypes.func.isRequired,
    // clearErrors: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    UI: state.UI
});

export default connect(
    mapStateToProps,
    { makePost }
)(withStyles(styles)(MakePost));