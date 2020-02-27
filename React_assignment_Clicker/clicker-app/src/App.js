import React, { Component } from 'react';
import './App.css';
import Increment from './Increment/Increment';
import Decrement from './Decrement/Decrement';
import Reset from './Reset/Reset';

class App extends Component {
  state = {
    number : 0,
  };

  IncrementHandler = () => {
    let val = this.state.number;
    val = val + 1
    this.setState({
      number : val
    })
  }

  DecrementHandler = () => {
    let val = this.state.number;
    val = val - 1
    this.setState({
      number : val
    })

  }
  ResetHandler = () => {
    let val = 0;
    this.setState({
      number : val
    })

  }
  render() {
    const style = {
      margin : '10%',
      marginLeft : '40%',
      width : '10%',
      border : '2px solid #eee',
      boxShadow : '0 2px 3px #ccc',
      padding : '20px',
      textAlign : 'center'
    }


    

    return (
      <div>
      <h1 style = {{fontFamily :'Sans-Serif', marginLeft : '42%', marginTop : '150px' }}>React Counter</h1>
      <div className="App">
      <div style = {style}>{this.state.number}</div>
      <Increment incremnet = {this.IncrementHandler}/>
      <Reset reset = {this.ResetHandler}/>
      <Decrement decrement = {this.DecrementHandler}/>
      </div>
      </div>
    );
  }
}

export default App;
