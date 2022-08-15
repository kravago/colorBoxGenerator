import React, { useState } from 'react';

const NewBoxForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [formData, setFormData] = useState({
        width: 0,
        height: 0,
        backgroundColor: ''
    });

    const handleChange = ({name, value}) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">color</label>
            <input 
                id="backgroundColor"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <label htmlFor="width">width</label>
            <input 
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">height</label>
            <input 
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            <button>create a box!</button>
        </form>
    )
}

export default NewBoxForm;