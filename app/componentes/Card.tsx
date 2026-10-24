import React from 'react'
import { Data } from '../modelos/Data'

export default function Card({nombre, ocupacion, pais} : Data) {
  return (
    <div style={{color: 'black', border: '1px solid blue', padding: '10px', margin: '10px', width: '200px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', backgroundColor: 'lightblue',  borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Ocupación:</strong> {ocupacion}</p>
        <p><strong>Pais:</strong> {pais}</p>
    </div>
  )
}
