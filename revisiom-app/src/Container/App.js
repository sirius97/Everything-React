import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/persons';
import Cockpit from '../Components/cockpit/cockpit';

class App extends Component {
  state = {
    Persons : [
      {id: 'ab',name : "vali", age : 23 },
      {id: 'ls',name : "rani", age :30},
      {id: 'hk',name : "brain", age :28}
    ] ,
    PersonDisplay : false,
  };

deleteNameHandler = (indexVal) => {
  const persons = [...this.state.Persons]
  persons.splice(indexVal,1)
  this.setState({
    Persons : persons
  })
}

toggleButtonHandler = () => {
  let personval = this.state.PersonDisplay
  this.setState({
    PersonDisplay : !personval
  })
}

changeNameHandler = (event,id) => {
  let personIndex = this.state.Persons.findIndex(p => {
    return p.id === id
  })
  let person = {...this.state.Persons[personIndex]}
  person.name = event.target.value
  let persons = [...this.state.Persons]
  persons[personIndex] = person
  
  this.setState({ Persons : persons })
}

  render() {
    
    let persons = null

    if(this.state.PersonDisplay){
      persons = (
        <div>
          <Persons persons = {this.state.Persons} 
          clicked = {this.deleteNameHandler} 
          changed = {this.changeNameHandler}
          />
        </div>
      );
      
    }

    

    return (
      <div className="App">
        <Cockpit Persons = {this.state.Persons}
        PersonDisplay = {this.state.PersonDisplay}
        toggleButton = {this.toggleButtonHandler}
        />
        {persons}
        </div>
    );
  }
}

export default App;
