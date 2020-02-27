import React from 'react';

const decrement = (props) => {
    const bt2 = {
        backgroundColor: '#4CAF50', /* Green */
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
      }

    return (
        <button style = { bt2 } onClick = {props.decrement} > - </button>
    );
}

export default decrement;