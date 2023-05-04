import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
           <Input placeholder="Nome"/>
           <Input placeholder="Email"/>
           <Input placeholder="Telefone"/>
           <button>Enviar</button>
    </>
  )
}

export default App
