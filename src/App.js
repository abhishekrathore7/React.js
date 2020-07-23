import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/MainComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
      <div >
       <Main />
      </div>
      </BrowserRouter>
    );
  }

}

export default App;


