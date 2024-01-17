import React from 'react'
import hero from '../assets/gym.jpg'
const Home = () => {
  return (
    <div className='h-full'>
        <div>
          <img 
           src={hero} alt="" />
            <h1>Your Health, your Wealth.</h1>
        </div>
    </div>
  )
}

export default Home