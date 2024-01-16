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
    <div className='w-full h-full'>
        <div className='flex flex-row justify-center h-full items-center gap-6 p-2'>
            <div>
                <h1 className='italic text-xl'>Gymania</h1>
            </div>
            <div>
                <ul className='hidden md:flex gap-2 text-xl'>
                    <li>Home</li>
                    <li>Plans</li>
                    <li>About</li>
                    <li>Contact</li>   
                </ul>
            </div>
            <div>
                <CgGym size={27} className='cursor-pointer md:hidden' onClick={handleOpen} />
            </div>
        </div>
        {
            menu &&
                <div className='w-[300px] h-full top-0 inset-0 z-50 bg-blue-400'>
                    <div className=' h-screen   p-2 ease-in-out duration-300'>
                    <ul className='flex flex-col gap-2 text-xl inset-0 top-0 z-50 w-full h-full '>
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