import React from 'react'
//import images
import pic from '../assets/images/pic.png'
//import react
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare,FaGithubSquare } from "react-icons/fa";

function Hero() {
  return (

    <section id='#home' className='min-h-screen items-center  flex flex-col md:flex-row justify-around py-10 md:mx-8 lg:mx-32'>

    <div className='flex-1'><img src={pic} alt="my" className='rounded-b-full md:rounded-none'/> </div>

        <div className='flex-1'>
          <div className='flex flex-col items-center md:items-center '>
            <div className='text-center md:text-left'>

              <h1 className='text-white text-2xl md:leading-normal leading-10 '>
                Hello..!!
              <br /><span>I am Shoaib Khan</span></h1>
              <h1  className='text-gray-600 md:text-2xl leading-5 md:leading-normal font-bold'>I am MERN STACK DEVELOPER</h1>

            </div>

            <div className='flex justify-center items-center flex-col'>

              <button className='btn-primary mt-8 hover:bg-yellow-700 hover:text-white'>Download Resume</button>

              <div className='flex gap-4 mt-4'>
                  <FaFacebookSquare className='cursor-pointer hover:text-cyan-300 text-2xl' />
                  <FaLinkedin className='cursor-pointer hover:text-cyan-300 text-2xl'/>
                  <FaInstagramSquare className='cursor-pointer hover:text-cyan-300 text-2xl'/>
                  <FaGithubSquare className='cursor-pointer hover:text-cyan-300 text-2xl'/>

              </div>
            </div>

          </div>
        </div>

    </section>
  )
}

export default Hero