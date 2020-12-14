import './App.css';
import React, { Component } from 'react'
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Landing from './pages/Landing';
import themeObject from './Theme';

const theme = createMuiTheme(themeObject);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Landing />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
