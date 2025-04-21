import React from 'react'
import AppRoute from './routes/routes'
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
        <AppRoute/>
    </BrowserRouter>
  )
}

export default App