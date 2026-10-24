'use client'
import { useEffect, useState } from 'react'
import { Data } from '../modelos/Data'
import Card from './Card'

export default function Cards() {
    const [dataList, setDataList] = useState<Data[]>([])

    useEffect(() => {
        const personas: Data[] = [

        {
            nombre: "Ross Geller",
            ocupacion: "Paleontologo",
            pais: "EEUU"
        },
        {
            nombre: "Monica Geller",
            ocupacion: "Chef",
            pais: "EEUU"
        },
        {
            nombre: "Chandler Bing",
            ocupacion: "Analista de datos",
            pais: "EEUU"
        },
        {
            nombre: "Joey Tribbiani",
            ocupacion: "Actor",
            pais: "EEUU"
        },
        {
            nombre: "Phoebe Buffay",
            ocupacion: "Masajista",
            pais: "EEUU"
        },
        {
            nombre: "Rachel Green",
            ocupacion: "Vendedora",
            pais: "EEUU"
        }
    ]

    setDataList(personas)
}, [])

  return (
    <div>
        {
        dataList.map((persona) => (
            <Card key={persona.nombre} {...persona} />
        ))
    }
    </div>
  )
}
