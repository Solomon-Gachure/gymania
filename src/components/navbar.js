import React, { useState } from 'react'
import { CgGym } from "react-icons/cg";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [menu,setMenu]=useState(false)
    const handleOpen=()=>{
        setMenu(true)
    }
    const handleClose =()=>{
        setMenu(false)
    }
  return (
    <div className='h-full'>
        <div className='flex justify-between md:justify-center  h-full  border border-stone-50 gap-8 p-4'>
            <div>
                <h1 className='italic text-xl'>Gymania</h1>
            </div>
            <div>
                <ul className='hidden md:flex gap-4 text-xl'>
                    <li className='hover:text-cyan-700 cursor-pointer font-semibold text-gray-500'>Home</li>
                    <li className='hover:text-cyan-700 cursor-pointer font-semibold text-gray-500'>Plans</li>
                    <li className='hover:text-cyan-700 cursor-pointer font-semibold text-gray-500'>About</li>
                    <li className='hover:text-cyan-700 cursor-pointer font-semibold text-gray-500'>Contact</li>   
                </ul>
                <div>
                <CgGym size={27} className='cursor-pointer md:hidden' onClick={handleOpen} />
            </div>
            </div>
            
             
        </div>
        {
            menu &&
                <div className='transition-transform delay-700 duration-300 ease-in-out h-full '>
                    <div className='p-2 '>
                    <ul className='flex flex-col gap-2 z-50 fixed text-3xl top-0 p-4 bg-cyan-700 text-white w-full h-full overflow-scroll   '>
                    <MdClose size={27}onClick={handleClose} />
                    <li>Home</li>
                    <li>Plans</li>
                    <li>About</li>
                    <li>Contact</li>   
                </ul>
                </div>
                </div>
            
        }
       
    </div>
  )
}

export default Navbar