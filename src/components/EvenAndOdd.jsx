import React, { useState } from 'react'

function EvenAndOdd() {

    const [num,setNum] = useState("");
    const handleChange = (event) =>{
        console.log(event.target.value);
        setNum(event.target.value);
    }
    return (

        <div  className='text-gray-900'>
        <input type="text" value={num} onChange={handleChange}/>
        {num%2==0 ? <h1 className='text-white'>{num} is Even</h1>:<h1 className='text-white'>{num} is Odd</h1>}
        
        </div>

  )
}

export default EvenAndOdd