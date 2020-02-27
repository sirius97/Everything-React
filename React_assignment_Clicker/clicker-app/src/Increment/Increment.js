import React from 'react';

const increment = (props) =>{
    const bt1 = {
        backgroundColor: '#008CBA', /* Green */
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px 0 40px',
        cursor: 'pointer',
      }

    return (
        <button style = {bt1} onClick = {props.incremnet}> + </button>
    );
}


export default increment;