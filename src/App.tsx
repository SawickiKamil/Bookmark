import * as React from 'react'
import './styles/styles.scss'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes'

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
