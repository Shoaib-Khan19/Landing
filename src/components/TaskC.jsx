import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import pic from '../assets/images/logo.png'
import { IoSettingsOutline } from "react-icons/io5";
import TaskBox from './TaskBox';

function TaskC() {
  return (
    <div className='flex flex-col bg-cyan-600'>
        
        <div className='flex bg-cyan-300 p-3 justify-between'>
            
            <div className='flex ml-3'>
                <GiHamburgerMenu  className='mt-1 text-lg font-bold cursor-pointer'/>
                <img  className='cursor-pointer w-32 ml-2' src={pic} alt="logo" />
            </div>
            <div className='flex mr-2'>
                <input type="submit" value='Use App' className='font-semibold cursor-pointer rounded-full text-xs py-1 px-2 hover:bg-black hover:text-white bg-white text-black' />
                <IoSettingsOutline className='cursor-pointer hover:animate-spin font-bold text-xl ml-2 hover:text-black'/>
            </div>

        </div>
        
        <div className='flex flex-col  py-2 ml-8'>

            <div className='flex gap-3 text-sm'>
                <a href="#">Matches(8)</a>
                <a href="#">BAN v NZ(1)</a>
                <a href="#">Sheffield Shield(2)</a>
                <a href="#">Legends League(3)</a>
                <a href="#">Abu Dhabi T10(4)</a>
            </div>
            <TaskBox></TaskBox>


        </div>

        
    </div>

  )
}

export default TaskC