import React, { useState } from 'react'
import { CgGym } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { Link } from 'react-scroll';

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
        <div className='flex md:justify-center gap-64 p-3  fixed  bg-whit w-full  md:gap-8 z-50 bg-opacity-60 backdrop-blur-lg backdrop-filter:blur(8px) bg-clip-padding'>
            <div>
                <h1 className='italic text-xl text-cyan-700 font-bold'>Gymania</h1>
            </div>
            <div>
                <ul className='hidden md:flex gap-4 text-xl'>
                    <Link activeClass="active" to="home"  smooth={true} offset={50} duration={500} >
                        <li className='hover:text-cyan-700 z-40 cursor-pointer font-semibold text-cyan-800'>Home</li>
                    </Link>
                    <Link activeClass="active" to="plans"  smooth={true} offset={50} duration={500} >
                        <li className='hover:text-cyan-700 z-40 cursor-pointer font-semibold text-cyan-800'>Plans</li>
                    </Link>
                    <Link activeClass="active" to="about"  smooth={true} offset={50} duration={500} >
                        <li className='hover:text-cyan-700 z-40 cursor-pointer font-semibold text-cyan-800'>About</li>
                    </Link>
                    
                    <Link activeClass="active" to="contacts"  smooth={true} offset={50} duration={500} >
                        <li className='hover:text-cyan-700 z-40 cursor-pointer font-semibold text-cyan-800'>Contact</li>
                    </Link>   
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
                    <Link activeClass="active" to="home"  smooth={true} offset={50} duration={500} >
                        <li className=' cursor-pointer font-semibold '>Home</li>
                    </Link>
                    <Link activeClass="active" to="plans"  smooth={true} offset={50} duration={500} >
                        <li className=' cursor-pointer font-semibold '>Plans</li>
                    </Link>
                    <Link activeClass="active" to="about"  smooth={true} offset={50} duration={500} >
                        <li className=' cursor-pointer font-semibold '>About</li>
                    </Link>
                    
                    <Link activeClass="active" to="contacts"  smooth={true} offset={50} duration={500} >
                        <li className=' cursor-pointer font-semibold '>Contact</li>
                    </Link>      
                </ul>
                </div>
                </div>
            
        }
       
    </div>
  )
}

export default Navbar