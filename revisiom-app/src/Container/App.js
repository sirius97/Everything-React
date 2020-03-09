import React, { Component } from 'react';
import './App.css';
import Person from '../Components/Persons/Person/Person';

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
    const style = {
      backgroundColor : 'green',
      cursor : 'pointer',
      color : 'white'
    }

    let persons = null

    if(this.state.PersonDisplay){
      persons = (
        <div>
          {this.state.Persons.map((person,index) => {
            return <Person 
            click = {() => this.deleteNameHandler(index)}
            name = {person.name}  
            age = {person.age}
            key = {person.id}
            changed = {(event) => {this.changeNameHandler(event,person.id)} }/>

          })}
        </div>
      );
      style.backgroundColor = 'red'
    }

    let classes = []
    if(this.state.Persons.length <=2){
      classes.push('red')
    }
    if(this.state.Persons.length <=1){
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p className = {classes.join(' ')}>This is working!!</p>
        <button 
        style = {style}
        onClick = {this.toggleButtonHandler}>Switch</button>
        {persons}
        </div>
    );
  }
}

export default App;
