
import './App.css'
import { useState } from 'react'

function App() {

  type Pront = {
    id: number,
    title: string,
    content: string,
  }

  const [pronts, setPronts] = useState<Pront[]>([{ id: 1, title: "ejemplo titulo", content: "ejemplo contenido" }])


  const CrearPront = (): void => {
    const newPront: Pront = {
      id: pronts.length + 1,
      title: `Pront ${pronts.length + 1}`,
      content: `Contenido del pront ${pronts.length + 1}`,
    }
    setPronts([...pronts, newPront])
  }

  return (
    <>
      <h1>IA Pronts</h1>
      {pronts.map((pront) => (
        <div key={pront.id}>
          <h2>{pront.title}</h2>
          <p>{pront.content}</p>
          <button onClick={() => {
            setPronts(pronts.filter((p) => p.id !== pront.id))
          }}>Eliminar</button>


        </div>
      ))}

      <button onClick={() => CrearPront()}>Agregar</button>
    </>
  )
}

export default App
