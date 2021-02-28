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
import user from './pages/user';
import themeObject from './Theme';
import axios from 'axios';

const theme = createMuiTheme(themeObject);

const token = localStorage.FBIdToken;

  if(token){
    const decodedToken = jwtDecode(token)
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
            <div className='App'>
              <Switch>
                <Route 
                  exact path='/' 
                  component={Landing} 
                />
                <Route 
                  component={NavBar}
                />
              </Switch>
                <Route 
                  path='/home' 
                  component={Home} 
                />
                <AuthRoute 
                  path='/login' 
                  component={login} 
                />
                <AuthRoute 
                  path='/register' 
                  component={Signup} 
                />
                <Route 
                  exact path='/users/:handle' 
                  component={user} 
                />
            </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
