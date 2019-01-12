import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Weather from './components/weather';
import Transit from './components/transit';
import Time from './components/time';
import NearEvents from './components/nearEvents';
import TodoList from './components/todoList';
import Traffic from './components/traffic';
import './App.css';
import config from './config.json'

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="container">
        <div className='section size-1'>
          <div className='module size-1'><TodoList {...config}/></div>
          <div className='module size-3'><Time {...config}/></div>
        </div>
        <div className='section size-1'>
          <div className='module size-2'><Weather {...config}/></div>
          <div className='module size-4'><NearEvents {...config} /></div>
        </div>
        <div className='section size-2'>
          <div className='module size-1' ><Transit {...config}/></div>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
