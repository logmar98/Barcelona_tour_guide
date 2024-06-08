import { useState } from 'react'
import Home from './Pages/Home/Home'
import './App.css'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <Home />
      <Analytics />
    </>
  )
}

export default App
