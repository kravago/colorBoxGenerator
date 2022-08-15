import React from 'react';
import './Box.css'

const Box = (props) => {
    // const [visible, setVis] = useState(true);
    return (
        <div className="Box" style={{ backgroundColor: props.color}}>
            <button>X</button>
        </div>
    )
}

export default Box;