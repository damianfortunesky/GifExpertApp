import React from 'react'
import { useState } from 'react'


export const AddCategory = ({ setcategories }) => {

    const [inputValue, setinputValue] = useState(['One Punch'])

    const onInputChange = ({target}) => {
        setinputValue(target.value);
        //console.log(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        if(inputValue.trim().length <= 1) return; // Si el inputValue trim='Elimina espacios'
        
        setcategories(categories => [inputValue, ...categories] );

    }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input
            type="text"
            placeholder="Buscar Gifts"
            onChange={ onInputChange}
        />
    </form>
  )
}
