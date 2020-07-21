import React, { Component } from 'react';
import './App.css';
import Main from './Components/MainComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
 
  render() {
    return (
      <div >
       
          <Main />
      </div>
    );
  }

}

export default App;


