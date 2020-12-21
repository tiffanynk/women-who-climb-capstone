import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import blackLogo from '../assets/wwc-black-logo.png';
import '../App.css';

const styles = {
    form: {
        margin: '100px auto 0 auto',
        textAlign: 'center'
    },
    image: {
        width: '50%'
    },
    title: {
        margin: '10px auto 10px auto'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20,
        position: 'relative'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem'
    },
    progress: {
        position: 'absolute'
    }
}

class login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        };
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            loading: true
        });

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/login', userData)
            .then(result => {
                console.log(result.data)
                localStorage.setItem('FBIdToken', `Bearer ${result.data.token}`)
                this.setState({
                    loading: false
                })
                this.props.history.push('/home')
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data,
                    loading: false
                })
            })
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { classes } = this.props;
        const { loading, errors } = this.state;
        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <img src={blackLogo} aria-label='wwc-logo' className={classes.image}/>
                    <Typography variant='h3' className={classes.title}>
                        Login
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField 
                            aria-label='email input'
                            label='Email' 
                            id='email' 
                            name='email' 
                            type='email' 
                            className={classes.textField} 
                            value={this.state.email}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            onChange={this.handleChange} 
                            fullWidth />
                        <TextField 
                            aria-label='password input'
                            label='Password' 
                            id='password' 
                            name='password' 
                            type='password' 
                            className={classes.textField} 
                            value={this.state.password}
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            onChange={this.handleChange} 
                            fullWidth />
                        {errors.status && (
                            <Typography variant='body2' className={classes.customError}>
                                {errors.status}
                            </Typography>
                        )}
                        <Button 
                            aria-label='Login Button'
                            type='submit' 
                            variant='contained' 
                            color='secondary' 
                            className={classes.button}
                            disabled={loading}
                            >
                            Login
                            {loading && (
                                <CircularProgress className={classes.progress}/>
                            )}
                        </Button>
                        <br />
                        <small className={classes.redirectText}>Don't have an account? Register <Link to='/register'>here</Link>.</small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(login)