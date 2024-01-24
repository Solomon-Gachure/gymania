import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div name='home' className='h-full pt-4'>
        <div className='lg:flex lg:justify-between lg:gap-8'>
          {/**heading and topic */}
          <div className='p-6 flex flex-col justify-center items-center ' data-aos="fade-up" >
          <h1  className='text-5xl lg:text-7xl font-extrabold'>Your <span className='text-cyan-700 font-roboto'>Health</span></h1>
          <h1 className='font-roboto text-4xl lg:text-7xl font-bold'>Your <span className='text-cyan-700 font-roboto'>Wealth</span></h1>
          <br/>
          <div className='text-center lg:max-w-md mx-auto' data-aos="fade-up"data-aos-duration="3000">
            <p className='font-mono text-xl lg:text-2xl text-gray-500'>We open doors to help you find balance with great health. Through healthy fitness exercises with our highly trained personel.</p>
          </div>
          <br/>
          <button className='bg-cyan-700 rounded-3xl p-3 text-xl text-white'>
            <Link activeClass="active" to="about"  smooth={true} offset={50} duration={500} >
                        Get started
                    </Link>
            </button>
          </div>
          {/**hero section */}
          <div>
<img className='hidden object-cover h-full lg:flex'
src="https://img.freepik.com/free-photo/man-with-dumbbell_144627-11522.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.2.134876288.1693412887&semt=ais" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home