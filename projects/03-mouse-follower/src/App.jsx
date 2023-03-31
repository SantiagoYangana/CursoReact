import './App.css'
import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  // Para movimiento del mouse

  useEffect(() => {
    console.log('Effect', { enable })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('HandleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      console.log('Limpiar')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable)
    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enable])

  return (
    <>
      <div style={{ transform: `translate(${position.x}px,${position.y}px)`, position: 'absolute', backgroundColor: '#09f', borderRadius: '50%', opacity: 0.8, pointerEvents: 'none', left: -20, top: -20, width: 40, height: 40 }} />
      <button onClick={() => setEnable(!enable)}>{enable ? 'Desactivar' : 'Activar'} Seguir Puntero</button>
    </>
  )
}

function App () {
  return (
    <>
      <main>
        <FollowMouse />
      </main>
    </>
  )
}

export default App
