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
        <div className='flex justify-between md:justify-center  h-full  border gap-6 p-2'>
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
                <div>
                <CgGym size={27} className='cursor-pointer md:hidden' onClick={handleOpen} />
            </div>
            </div>
            
             
        </div>
        {
            menu &&
                <div className=''>
                    <div className='p-2 '>
                    <ul className='flex flex-col gap-2 fixed text-3xl top-0 p-4 bg-blue-400 w-full h-screen ease-in-out duration-300  '>
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