import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './util/AuthRoute';
import jwtDecode from 'jwt-decode';
// import axios from 'axios';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import login from './pages/login';
import Signup from './pages/signup';
import themeObject from './Theme';

const theme = createMuiTheme(themeObject);

let authenticated; 

const token = localStorage.FBIdToken;

  if(token){
    const decodedToken = jwtDecode(token)
    console.log('decoded', decodedToken)
    if(decodedToken.exp * 1000 < Date.now()){
      window.location.href = '/login'
      authenticated = false
    } else {
      authenticated = true
    }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={Home} />
            <AuthRoute 
              exact path='/login' 
              component={login} 
              authenticated={authenticated}  
            />
            <AuthRoute 
              exact path='/register' 
              component={Signup} 
              authenticated={authenticated}  
            />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
