import React from 'react';
import './Landing.css';
import { Fab } from '@material-ui/core/Fab/Fab';
import Button from '@material-ui/core/Button';


export default function Landing() {
    return (
        <div className='landing-container'>
            <div className='logo-container'>
                <img className='logo' src='/wwc-white-logo.png' alt='Women Who Climb Logo'/>
            </div>
            <div className='button-container'>
                    <Button variant='contained' color='secondary'>Sign in</Button>
                    <Button variant='contained' color='secondary'>Register</Button>
            </div>
        </div>
    )
}
