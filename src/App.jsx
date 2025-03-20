import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Program from './components/Program'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
    <Navbar/>
    <Landing/>
    <Program/>
    <About/>
    <Campus/>
    <Testimonials/>
    <Contact/>
    </>
  )
}

export default App
