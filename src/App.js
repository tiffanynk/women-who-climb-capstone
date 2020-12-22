import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './util/AuthRoute';
import jwtDecode from 'jwt-decode';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import login from './pages/login';
import Signup from './pages/signup';
import themeObject from './Theme';
import axios from 'axios';

const theme = createMuiTheme(themeObject);

const token = localStorage.FBIdToken;

  if(token){
    const decodedToken = jwtDecode(token)
    console.log('decoded', decodedToken)
    if(decodedToken.exp * 1000 < Date.now()){
      store.dispatch(logoutUser())
      window.location.href = '/login'
    } else {
      store.dispatch({ type: SET_AUTHENTICATED })
      axios.defaults.headers.common['Authorization'] = token
      store.dispatch(getUserData())
    }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
            <NavBar/>
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/home' component={Home} />
                <AuthRoute 
                  exact path='/login' 
                  component={login} 
                />
                <AuthRoute 
                  exact path='/register' 
                  component={Signup} 
                />
              </Switch>
            </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
