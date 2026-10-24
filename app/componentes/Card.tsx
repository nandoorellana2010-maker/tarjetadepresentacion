import React from 'react'
import { Data } from '../modelos/Data'

export default function Card({nombre, ocupacion, pais} : Data) {
  return (
    <div>
        <p>{nombre}</p>
        <p>{ocupacion}</p>
        <p>{pais}</p>
    </div>
  )
}
