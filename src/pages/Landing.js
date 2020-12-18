import React from 'react';
import '../styles/Landing.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default function Landing() {
    return (
        <div className='landing-container'>
            <div className='logo-container'>
                <img 
                    className='logo' 
                    src='/wwc-white-logo.png' 
                    alt='Women Who Climb Logo'
                />
            </div>
            <div className='button-container'>
                    <Button 
                        variant='contained' 
                        color='secondary' 
                        aria-label="login"
                        component={ Link } 
                        to='/login'
                    >
                        Login
                    </Button>
                    <Button 
                        variant='contained' 
                        color='secondary' 
                        aria-label="register"
                        component={ Link } 
                        to='/register'
                    >
                        Register
                    </Button>
            </div>
        </div>
    )
}
