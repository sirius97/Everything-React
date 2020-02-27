import React from 'react';

const reset = (props) => {
    const btr = {
        backgroundColor: '#555555', /* Green */
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 10px',
        cursor: 'pointer',
      }

    return (
        <button style = { btr } onClick = {props.reset} > <i className="fa fa-refresh" aria-hidden="true"></i> </button>
    );
}

export default reset;