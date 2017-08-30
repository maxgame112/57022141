import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Calculator from './Components/Calculator';
class App extends Component {


  constructor(){
    super();
   
    this.state = {name: "Anucha", age : 20};
    
  }
  onClick(){
    this.setState({name: "Game"});
  }

setAge(e){
  const age = e.target.value;
  this.setState({age: age});
}



  getVal() {
      return "getVal";
  }

  render(){


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
      </div>
      <p classname="App-intro">
      </p>
      <div>
      <Calculator />
      </div>
    </div>
    );
  }
}

export default App;
