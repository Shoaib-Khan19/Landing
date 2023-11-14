import React from 'react'

function PrimaryButton({text}) {
  return (
    <button className='text-base  border-2 py-2 px-4 bg-yellow-700 text-white rounded-xl font-bold mx-2 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-indigo-600 hover:border-2 border-gray-950 hover:border-yellow-700'>{text}</button>
    )
}

export default PrimaryButton