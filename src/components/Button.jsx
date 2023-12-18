import React from 'react'

function Button({text, func, icon}) {
  return (
    <button className='btn-primary hover:bg-slate-100 hover:text-gray-950' onClick={func}>{icon}{text} </button>
  )
}

export default Button