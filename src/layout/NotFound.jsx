import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página No Encontrada</h1>
      <button><Link to='/'>Volver a Inicio</Link></button>
    </div>
  )
}

export default NotFound
