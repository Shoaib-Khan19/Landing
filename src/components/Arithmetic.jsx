import React, { useState } from 'react'

const Arithmetic = () => {
    const operations = ['+','-','*','/','%']
    const [num1,setNum1] = useState("");
    const [num2,setNum2] = useState("");

    const [result, setResult] = useState("");

    const [updresult, setUpdResult] = useState("");
    
    const [operator, setOperator] = useState('');
 
    const handleChange1 = (event) =>{

        // console.log(event.target.value);
        setNum1(event.target.value);
    }
    const handleChange2 = (event) =>{
        // console.log(event.target.value);
        setNum2(event.target.value);
    }
    // const add = () =>{
    //     setResult(+num1+(+num2))
    // }    

    const calculateResult = (event)=>{
        setOperator(event.target.innerHTML);
        let expression = `${num1}${event.target.innerHTML}${num2}`;
        setResult(eval(expression));
        
        // setUpdResult([result]+1);
        console.log(expression);
        console.log(result);
        
    }  
      return (
    
    <div className='flex flex-col text-gray-900 gap-4 items-center p-4'>
        <input className='rounded-3xl text-center' type="number" value={num1} onChange={handleChange1}/>
        <input className='rounded-3xl text-center' type="number" value={num2} onChange={handleChange2}/>
        {/* <h1 className='text-white'>{`${num1}+${num2}=${+num1+(+num2)}`}</h1> */}

        {/* <button onClick={add} className='text-base hover:animate-bounce py-1 px-4 bg-gray-600 text-white rounded-3xl font-bold my-2 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-indigo-600 hover:border-2 border-gray-950 hover:border-yellow-700'>Calculate</button>
        <h1 className='text-white'>{`${num1} + ${num2} = ${result}`}</h1> */}

        {operations.map((item)=>{return <button className='text-base hover:animate-bounce py-1 px-4 bg-gray-600 text-white rounded-3xl font-bold my-2 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-indigo-600 hover:border-2 border-gray-950 hover:border-yellow-700' onClick={calculateResult}>{item}</button>})}
        <h1 className='text-white'>{`${num1} ${operator} ${num2} = ${result}`}</h1>

    </div>
    )
}

export default Arithmetic