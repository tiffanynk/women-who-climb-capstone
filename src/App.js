import './App.css';
import React, { Component } from 'react'
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Landing from './pages/Landing';

const theme = createMuiTheme({
  palette: {
      primary: {
          light: 'rgba(111, 157, 128, 1)',
          main: 'rgba(31, 112, 78, 1)',
          dark: 'rgba(0, 5, 11, 1)',
          contrastText: '#fff'
          },
      secondary: {
          light: 'rgba(247, 139, 2, 1)',
          main: 'rgba(246, 159, 70, 1)',
          dark: 'rgba(187, 79, 6, 1)',
          contrastText: 'rgba(0, 5, 11, 1)'
          }
  }
  
})

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
