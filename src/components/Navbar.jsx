    import React, { useEffect, useState } from 'react'
    import LineIcon from '../components/LineIcon'



    function Navbar() {
        const [isOpen, setIsOpen] = useState(false)
        const [sticky,setSticky] = useState(false)
 
        useEffect(()=>{
            //event, callback function
            window.addEventListener("scroll",()=>{
                // console.log("Event ocurred..");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
            })
        },[])
        
        // const menuLinks=["Home","About","Skills","Projects","Contact Us"]

        //Array of Objects to bind data
        const menuLinks=[
                        {name: "Home", link:"#home"},
                        {name:"About", link:"#about"},
                        {name:"Skills", link:"#skills"},
                        {name:"Projects", link:"#projects"},
                        {name:"Contact Us", link:"#contact"}
                    ];

        return (
            console.log(sticky),
        <div>
            <nav className={`z-50 fixed w-full top-0 left-0 flex justify-between md:block ${sticky?"ease-linear duration-500 bg-white/60":""}` }>
                <div className='flex justify-between items-center'>
                    <h1>Rising Shoaib</h1>
                    <div className='hidden md:block'>
                        <ul className={`flex text-lg gap-4 bg-white text-gray-900 px-6 py-2 rounded-bl-full ${sticky ? "bg-white/0 text-white" : "bg-white"}`}>
                         {
                            menuLinks.map((items,i) => (
                                <li key={i} className="px-6 hover:text-cyan-600">
                                    <a href={items.link}> {items.name}</a>
                                </li>
                            ))
                         }   
                            
                            {/* {
                                menuLinks.map((item,index)=>{
                                    return <li key={index}>{item}</li>
                                })
                            } */}
                        </ul>
                    </div>
                </div>
                
                <div className={`${isOpen ? "text-black z-10" : "text-white"} md:hidden`} onClick={()=>{setIsOpen(!isOpen)}}>
                    <LineIcon />
                </div>
                
            </nav>

            <div className=
            {`${isOpen ? 'right-0' : 'right-[-100%] w-0'} ease-in-out top-0 fixed w-3/4 h-full duration-500 bg-white md:hidden`}>
                <ul className="flex flex-col text-gray-900 items-center text-lg gap-4 p-6">
                {
                            menuLinks.map((items,i) => (
                                <li key={i} className="px-6 hover:text-cyan-600">
                                    <a href={items.link}> {items.name}</a>
                                </li>
                            ))
                         }   

                    {/* {
                        menuLinks.map(item=>{
                            return <li className='hover:text-blue-700' onClick={()=>{setIsOpen(!isOpen)}}>{item}</li>;
                        })
                    } */}
                </ul>

            </div>

        </div>
    );
}

    export default Navbar