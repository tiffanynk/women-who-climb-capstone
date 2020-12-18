import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/signup';
import themeObject from './Theme';

const theme = createMuiTheme(themeObject);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Signup} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
