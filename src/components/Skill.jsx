import React from 'react'

const Skill = () => {
  return (
    <section className='my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto'>
    <div className='text-center mt-8'>
        <h1 className='font-bold text-3xl'>SKILLS</h1>
        <div className="box flex p-8 items-center gap-6 justify-center text-xl font-bold">
        <h3 className='bg-yellow-300 rounded-lg p-3 hover:text-red-500 cursor-grab'>HTML</h3>
        <h3 className='bg-yellow-300 rounded-lg p-3 hover:text-red-500 cursor-grab'>CSS</h3>
        <h3 className='bg-yellow-300 rounded-lg p-3 hover:text-red-500 cursor-grab'>JAVA SCRIPT</h3>
        <h3 className='bg-yellow-300 rounded-lg p-3 hover:text-red-500 cursor-grab'>REACT.JS</h3>
        <h3 className='bg-yellow-300 rounded-lg p-3 hover:text-red-500 cursor-grab'>PYTHON</h3>
        </div>
      
    </div>
    </section>
  )
}

export default Skill
