import React from 'react';
import './Box.css'

const Box = (props) => {
    return (
        <div className="Box" style={{ backgroundColor: props.color}}>
            <button>X</button>
        </div>
    )
}

export default Box;