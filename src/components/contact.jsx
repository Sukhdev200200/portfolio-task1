import React from 'react'
import {AiFillMail,AiFillLinkedin,AiFillInstagram,AiFillGithub} from 'react-icons/ai'

const Contact = () => {
  return (
<section className='text-5xl flex justify-center h-4/6 bg-slate-400 max-w-5xl mx-auto'>
  <div className="name ">
  <h2 className='font-bold'>CONTACT</h2>
  <p className='text-xl'>Fell Free to Contact me Via</p>
  <div className="logo flex gap-2  mt-10 ">
    <div className="mail hover:bg-yellow-200 rounded">
  <a href="mailto:triumalasukhdev.54@gmail.com"><AiFillMail/></a>
    </div>
    <div className="linkedin  hover:bg-yellow-200 ">
  <a href="https://www.linkedin.com/in/tirumala-sukhdev-242375240/"><AiFillLinkedin/></a>
    </div>
    <div className="inst  hover:bg-yellow-200">
  <a href="https://www.instagram.com/mr_sukhdev___/"><AiFillInstagram/></a>
    </div>
    <div className="git  hover:bg-yellow-200">
  <a href="https://github.com/Sukhdev200200"><AiFillGithub/></a>
    </div>
  </div>
  </div>
  
</section>
  )
}

export default Contact
