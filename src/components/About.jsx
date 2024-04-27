import React from 'react'

const About = () => {
    return (
        <section className=''>
            <div className="w-full justify-center items-center">
                <div className="text-center text-slate-900  
                                   text-4xl font-bold max-h-full w-full">
                    <h1 className='text-center '>ABOUT ME :)</h1>
                   
                </div>
               
                <div className="para  mt-8 flex-1 block">
                    <h4 className='text-xl font-bold text-center'>Here You'll Find More About Me</h4>
                    <p className='text-center text-lg'>Hey, First of all thank You for visiting my portfolio site.
                    <br/> After My graduation I learned FrontEnd Development Below I mentioned some Projects Related to HTML,CSS,JAVASCRIPT AND REACT.JS</p>
                </div>
                <div className="education mt-6 ">
                    <h4 className='font-bold text-xl text-center'>Educational Qualification</h4>
                    <p className='text-center text-lg'>I completed My Bachelors degree in Stream of Electronics And Communication Engineering From Jawaharlal Nehru Technological University.</p>
                </div>
            </div>
        </section>
    )
}

export default About
