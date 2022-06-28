//@ts-check
import React from 'react'

export default function ItemDetail({equipo}) {
  return (
    <div>
        <ul>
        
            {
            
                equipo.map(item => (
                    <li key={item.id}>{item.name} - {item.email}</li>
                ))
                
            }
    
        </ul>
    </div>
  )
}
