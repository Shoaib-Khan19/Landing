import React from 'react'

function About() {
  const info = [
    {text:"Experience", count:"04"},
    {text:"Completed Projects", count:"24"},
    {text:"Companies Work", count:"06"},
]  

    return (
    <section id='#about' className='text-white py-10'>
        <div className='text-center'>
            <h3 className='text-4xl font-semibold'>About <span className='text-cyan-600'>Me..!!</span></h3>
            <p className='text-gray-400 my-3 text-lg'>My Introduction</p>
        <div className='my-3'>

            <p className='text-justify leading-7 w-11/12 font-semibold mx-auto'>Hi, I’m Shoaib Khan a Professional Web Developer. I have a Bachelor’s Degree in Information Technology. I’m proficient in HTML, CSS, I leverage frameworks like Bootstrap and Tailwind or JavaScript and jQuery for efficient front-end development. For server side, I well-versed in Php and My ability to navigate platform like WordPress showcases, with a keen eye for design and a strong foundation in both front-end and back-end technologies.</p>
        <div className='flex mt-10 justify-center items-center gap-7 text-center mx-auto'>
            {info?.map((content)=>(
                <div  key={content.count}>
                    <h3 className='text-2xl md:text-4xl font-semibold'>{content.count}</h3>
                    <span className='text-cyan-600 text-xs md:text-base'>{content.text}</span>

                   </div> 
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About