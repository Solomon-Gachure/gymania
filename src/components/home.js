import React from 'react'

const Home = () => {
  return (
    <div className='h-full'>
        <div className='md:flex md:justify-between md:gap-8'>
          {/**heading and topic */}
          <div className='p-6 flex flex-col justify-center items-center'>
          <h1 className='text-5xl md:text-7xl font-extrabold'>Your <span className='text-cyan-700'>Health</span></h1>
          <h1 className='text-4xl md:text-7xl font-bold'>Your <span className='text-cyan-700'>Wealth</span></h1>
          <br/>
          <div className='text-center md:max-w-md mx-auto'>
            <p className='text-xl text-gray-500'>We open doors to help you find balance with great health. Through healthy fitness exercises with our highly trained personel.</p>
          </div>
          <br/>
          <button className='bg-cyan-700 rounded-3xl p-3 text-xl text-white'>Get started</button>
          </div>
          {/**hero section */}
          <div>
<img className='hidden md:flex'
src="https://img.freepik.com/free-photo/man-with-dumbbell_144627-11522.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.2.134876288.1693412887&semt=ais" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home