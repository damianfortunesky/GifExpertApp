// API que debo llamar: api.giphy.com/v1/gifs/search?api_key=6mmOgw1HsTUeuULw78v5sAJA6ayymzwG&q=valorant

import React from 'react'
import { useState } from 'react';
import { getGifs } from '../../helpers/getGifs';

export const GifGrid = ({category}) => {
  
  getGifs(category);

  const [counter, setCounter] = useState(0);
  
  return (
    <>
        <h3>{ category }</h3>
        <h5>{ counter }</h5>
        <button onClick={()=> setCounter(counter + 1)}>Sumar</button>
    </>
  )
}
