import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const { boxes, setBox } = useState([]);

    return (
        <div>
            <NewBoxForm />
            {boxes.map((box, i) => (
                <Box color={box} key={i} />
            ))}
        </div>
    )
}