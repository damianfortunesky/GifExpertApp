import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    // const datos = [
    //     {id:1, precio:'138000', descripcion:'Nootebook'},
    //     {id:2, precio:'17000', descripcion:'Zapatillas Nike'},
    //     {id:3, precio:'50000', descripcion:'BMX'}
    // ]

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
