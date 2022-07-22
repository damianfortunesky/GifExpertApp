// API que debo llamar: api.giphy.com/v1/gifs/search?api_key=6mmOgw1HsTUeuULw78v5sAJA6ayymzwG&q=valorant

import React from 'react'
import { getGifs } from '../../helpers/getGifs';

export const GifGrid = ({category}) => {

    getGifs(category);

  return (
    <>
        <h3>{category}</h3>
    </>
  )
}
