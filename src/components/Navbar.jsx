import React from 'react'
import pdf from './Develop.pdf'
  

 



const Navbar = () => {
  return (
  <nav className='flex bg-slate-500 py-2 text-white justify-end fixed top-0 z-10 w-full backdrop-blur-lg shadow-xl '>
   <div className="container flex flex-col lg:flex-row
                            gap-5 justify-between w-full 
                            items-center max-w-5xl mx-auto sticky">
                <h3 className="text-3xl text-yellow-50 font-bold ">
                   Tirumala Sukhdev
                </h3>
    <ul className='flex gap-6 mr-3' >               
    <a href="/"><li className='hover:underline cursor-pointer'>Home</li></a>
    <a href="#About"><li className='hover:underline cursor-pointer'>About Me</li></a>
    <a href="#contact"><li className='hover:underline cursor-pointer'>Contact</li></a>
    <a href={pdf}><li className='hover:underline cursor-pointer ' ><button  >Resume</button></li></a>
    </ul>
    </div>
  </nav>
  )
}

export default Navbar
