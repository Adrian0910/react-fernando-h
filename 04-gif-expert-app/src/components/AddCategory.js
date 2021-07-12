import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('Hola Mundo');
    const handleInputChange = (e) => {
        
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(setCategories)
        setCategories( cat => [...cat, inputValue]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value= { inputValue }
                onChange= { handleInputChange }
            />
        </form>
    )
}




