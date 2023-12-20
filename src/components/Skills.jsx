import React from 'react'
import html from "../assets/images/html2.png"
import css from "../assets/images/css-logo.png"
import js from "../assets/images/js.png"
import tail from "../assets/images/tail.png"
import prec from "../assets/images/react.png"
import wp from "../assets/images/wp.png"

function Skills() {
    const skills=[

        {logo: html,
        level:"Advance",
        count:45},
        {logo:css,
        level:"Advance",
        count:35},
        {logo:js,
        level:"Advance",
        count:25},
        {logo:prec, 
        level:"Advance",
        count:25},
        {logo:tail,
        level:"Advance",
        count:25},
        {logo:wp,
        level:"Advance",
        count:25}
                        
    ]

    return (
        <section id="#skills" className='py-10 bg-gray-800 flex relative justify-center'>
            <div className='mt-8 text-white text-center'>
                <h3 className='text-4xl font-semibold'>My <span className='text-cyan-600'>Skills</span></h3>
                <p className='text-gray-400 mt-3 text-lg'>My Knowledge</p>
            
                <div className='flex flex-wrap mt-8 gap-10 items-center justify-center p-10 relative'>
                    {
                        skills?.map((skill, index)=>(
                            <div className='border-2 min-w-[10rem] max-w-[16rem]'>
                                <img src={skill.logo} className='w-16 h-16 mx-4'  alt='skil'/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
  )
}

export default Skills