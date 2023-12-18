import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";


function Task() {
  return (
    <div className='flex flex-col items-center'>

    <div className='flex w-[280px] flex-col items-center'>
        
        <div className='bg-slate-800 w-full'>

            <div className='flex justify-between'>
            <h3 className='font-semibold'>QuickTrade</h3>
            <a href="#" className='text-cyan-600 text-2xl hover:text-white'><IoIosClose /></a>
            </div>
            
            <div className='flex justify-between mt-2'>

            <input type="text" className='text-black  p-1' />
            <input  className='cursor-pointer rounded-lg px-5 py-0 mx-1 hover:bg-purple-500 bg-cyan-500 text-black' type='submit' value='>' />
            </div>

            <div className='flex my-2 text-cyan-600 gap-1 hover:text-purple-500'>
            <FaRegPlayCircle className='my-1'/>
                <a href="#" className=''>View QuickTrade help video</a>
            </div>
            <div className='flex gap-4 mt-4 text-cyan-600'>
                <a href="#" className='hover:text-purple-500 border-transparent border-t-2 hover:border-t-purple-500'>QOUTE</a>
                <a href="#" className='hover:text-purple-500 border-transparent border-t-2 hover:border-t-purple-500'>TRADE TICKET</a>
            </div>
        </div>
        
        <div className='text-sm w-fit py-4 bg-gray-950'>
            <h3>APPLE INC.</h3>
            
            <div className='flex gap-3 px-1 text-[12px]'>
                <div>
                    <p>190.40</p>
                    <p>0.00 (0.00%)</p>
                </div>
                <div>
                    <p>189.93</p>
                    <p>Bid</p>
                </div>
                <div>
                    <p>189.94</p>
                    <p>Asl</p>

                </div>
                <div>
                    <p>2x6</p>
                    <p>Size</p>

                </div>
                <div>
                    <p>384154419</p>
                    <p>Volume</p>
                </div>
            </div>
            <div className='flex items-center gap-1 justify-center'>
                <p className='mt-2 text-[10px] font-thin'>Real Time Qoute as if 11/29/2023 1:53am ET</p>
                <LuRefreshCcw className='text-cyan-600 hover:animate-spin cursor-pointer text-xl'/>
            </div>

         </div>

        <div className='bg-slate-800 py-2'>
            
            <div className='flex text-black justify-between mt-2'>
                <select className='w-[260px]'>
                    <option value="N/A-0415">N/A-0415</option>
                    <option value="N/A-0415">N/A-0415</option>
                    <option value="N/A-0415">N/A-0415</option>
                </select>
            </div>
            <div className='mt-4 flex justify-between text-xs gap-2'>

                <div className=''>
                    <p>$70.91</p>
                    <p className='text-[8px]'>Cash Available For Investment</p>
                </div>
                <div>
                    <p>$80.63</p>
                    <p className='text-[8px]'>Total Account Value</p>
                </div>
            </div>
        </div>
    
    </div>
    </div>
  )
}

export default Task