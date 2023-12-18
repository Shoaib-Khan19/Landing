import React from 'react'
import Button from './Button'
import LineIcon from './LineIcon'
import InputBox from './InputBox'
import { FaSearch } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaRegistered } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
function Test() {
    const login=()=>{console.log("Login Button Pressed")}
    const reg=()=>{console.log("Register Button Pressed")}
  return (
    <div className='h-screen flex flex-col gap-2 justify-center items-center'>
       
        <div className='flex flex-col gap-2'>
        <InputBox icon={<FaUser />} place="Enter UserName"/>
        <InputBox icon={<FaKey />} place="Enter Password"/>
        </div>

        <div className='flex gap-2'>

        <Button text="Login" func={login} icon={<IoLogIn />}></Button>
        <Button text="Register" func={reg} icon={<FaRegistered />}></Button>
        </div>
    </div>
  )
}

export default Test