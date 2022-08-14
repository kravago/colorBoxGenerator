import React, { useState } from 'react';
import Box from './Box';
// import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState(['blue', 'red', 'black']);
    // const createBox = (color) => { setBox([...boxes, color]) }

    console.log(boxes);

    return (
        <div>
            {boxes.map((box) => (
                <Box color={box} />
            ))}
        </div>
    )
}

export default BoxList;