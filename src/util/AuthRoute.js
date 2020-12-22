import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, authenticated, ...rest}) => (
    <Route 
        {...rest}
        render={(routerProps) => authenticated === true 
            ? <Redirect to='/home'/> 
            : <Component {...routerProps} />}
    />

)
export default AuthRoute