import React from 'react'

function SecondaryButton({text}) {
  return (
    <button className='text-base py-2 px-4 bg-transparent text-black rounded-xl font-bold border-2 border-yellow-700 hover:shadow-2xl'>{text}</button>
    )
}

export default SecondaryButton