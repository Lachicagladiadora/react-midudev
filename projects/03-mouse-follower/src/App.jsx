import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ X: 0, Y: 0 })

  // pointer move
  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log({ event })
      console.log('handleMove', { clientX, clientY })
      setPosition({ X: clientX, Y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    // cleanup:
    // -> when the component is disassembled
    // -> when dependencies change, before running the effect again
    return () => { // cleanup method
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  // DEPENDENCIES
  // []-> una vez, cuando se muenta el componente
  // [enabled]-> cuando se monta el componente y cuando cambia enabled
  // undefined -> se ejecuta en cada render

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      {/* <h1>Project  3</h1> */}
      <div style={{
        width: '40px',
        height: '40px',
        backgroundColor: 'yellow',
        borderRadius: '50%',
        opacity: `${enabled ? '0.7' : '0'}`,
        pointerEvents: 'none',
        position: 'absolute',
        left: '-20px',
        top: '-20px',
        transform: `translate(${position.X}px,${position.Y}px)`,
      }} />
      <button onClick={() => setEnabled(prev => !prev)}>{enabled ? 'deactivate' : 'active'} follow pointer</button>
    </main>
  )
}

export default App
