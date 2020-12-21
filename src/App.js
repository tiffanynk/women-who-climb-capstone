import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import axios from 'axios';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import login from './pages/login';
import Signup from './pages/signup';
import themeObject from './Theme';

const theme = createMuiTheme(themeObject);

// axios.defaults.baseURL =
//   'http://localhost:5000/women-who-climb-c93f6/us-central1/api';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/login' component={login} />
            <Route exact path='/register' component={Signup} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
