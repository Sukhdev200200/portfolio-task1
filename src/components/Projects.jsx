import React from 'react'
import png from './TODO.png'
import png1 from './game.png'


const Projects = () => {
  
  return (
   <section className='my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto  '>
    <h1 className='text-center text-3xl font-bold'>PROJECTS</h1>
    <div className="project1 bg-zinc-200">
    <a href="https://todolist-qtgofndvi-sukhdevs-projects.vercel.app/"><h1 className='font-bold pl-48 ml-64 mb-3 text-2xl text-cyan-500 hover:underline hover:text-cyan-700 '>TO-DO LIST</h1></a>
      <img src={png} alt="" srcset="" className='w-2/4 ml-64 align-center shadow-inherit' />
      <p className='w-3/6 ml-64 mt-7  text-center text-xl'>I created This Project By Using React.js Library.Basically TO-DO  Lists are the lists that we generally use to maintain our day-to-day tasks or list of everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom and when the listed task is completed we can make a mark or the task is completed by using checkBox.By clicking on the checkbox we can see the completed tasks</p>
    </div>
    <div className="project1 bg-zinc-200 ">
      <a href="https://github.com/Sukhdev200200/tic-tac-toe.git"><h1 className='font-bold pl-44 ml-64 mb-3 text-2xl cursor-pointer hover:underline '>Tic-Tac-Toe Game</h1></a>
      <img src={png1} alt="" srcset="" className='w-2/4 ml-64 align-center' />
      <p className='w-3/6 ml-64 mt-7  text-center text-xl'>Tic Tac Toe is traditionally played on a 3 × 3 grid. Players take turns placing a mark in one of the cells of the grid. The goal of the game is for players to position their marks so that they make a continuous line of three cells vertically, horizontally, or diagonally</p>
    </div>
   </section>

  )
}

export default Projects
