import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Persons : [
      {name : "vali", age : 23 },
      {name : "rani", age :30},
      {name : "brain", age :28}
    ] ,
  };

  switchNameHandler = (newName) =>{
    this.setState({
      Persons : [
        {name : newName, age : 23 },
        {name : "rani", age :30},
        {name : "brain", age :25}
      ] 
    })

  }

changeNameHandler = (event) => {
  this.setState({
    Persons : [
      {name : "mac", age : 23 },
      {name : event.target.value, age :30},
      {name : "brain", age :25}
    ] 
  })
}

  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <button onClick = {this.switchNameHandler.bind(this,"valinore")}>Switch</button>
        <Person name = {this.state.Persons[0].name}  age = {this.state.Persons[0].age}/>
        <Person 
        click = {() => this.switchNameHandler("valinore_fun")} 
        name = {this.state.Persons[1].name}  
        age = {this.state.Persons[1].age}
        changed = {this.changeNameHandler}>
        My hobbies:dancing </Person>
        <Person name = {this.state.Persons[2].name}  age = {this.state.Persons[2].age}/>
        </div>
    );
  }
}

export default App;
