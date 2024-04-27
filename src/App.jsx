import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import About from './components/About'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/contact'
import {GiMailbox} from 'react-icons/gi'
import Footer from './components/Footer'




function App() {
  const [count, setCount] = useState(0)

function Resume  () {
  onclick(()=>{AiFillFilePdf})
    
}  

  return (
    <>
    <Navbar/>
    <Welcome/>
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
    <Footer/>
    

    
    
    </>
  )
}

export default App
