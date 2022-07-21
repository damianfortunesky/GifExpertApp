import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    // Los hooks son funciones, permiten usar el estado sin necesidad de usar clases

    // Declara una nueva variable de estado, la cual llamaremos “equipo”
    const [equipo, setEquipo] = useState([])

    useEffect( () => {
        // console.log('useEffect');
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        // console.log(users)
        setEquipo(users)
    }

  return (
    <div>
        
        <ItemDetail equipo={equipo}/>
    </div>
  )
}
