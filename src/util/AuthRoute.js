import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthRoute = ({ component: Component, authenticated, ...rest}) => (
    <Route 
        {...rest}
        render={(routerProps) => authenticated === true 
            ? <Redirect to='/home'/> 
            : <Component {...routerProps} />}
    />

)

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

AuthRoute.propTypes = {
    user: PropTypes.object
}

export default connect(mapStateToProps)(AuthRoute)