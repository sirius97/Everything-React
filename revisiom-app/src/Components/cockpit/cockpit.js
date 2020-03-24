import React from 'react';
import classp from './cockpit.css';

const cockpit = (props) => {
    const style = {
        backgroundColor : 'green',
        cursor : 'pointer',
        color : 'white'
      }
  
    let classes = []
    if(props.Persons.length <=2){
      classes.push('red')
    }
    if(props.Persons.length <=1){
      classes.push('bold')
    }
    if(props.PersonDisplay){
        style.backgroundColor = 'red'
    }
    return(
        <div className = {classp.cockpit}>
        <h1>{props.title}</h1>
        <p className = {classes.join(' ')}>This is working!!</p>
        <button 
        style = {style}
        onClick = {props.toggleButton}>Switch</button>
        </div>
    );
}

export default cockpit;