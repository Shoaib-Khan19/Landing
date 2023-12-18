import React from 'react'

function InputBox({icon,place}) {
  return (
    <div className='flex bg-slate-100 text-gray-900 py-3 px-5 rounded-full'>
        <div className='mt-1 mr-1'>{icon}</div>
        <input type="text" className='pl-2 focus:outline-none bg-slate-100' placeholder={place}/>
    </div>
  )
}

export default InputBox