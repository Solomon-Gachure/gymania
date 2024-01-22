import React, {useEffect} from 'react'
import { TiTickOutline } from "react-icons/ti";
import AOS from 'aos'
import 'aos/dist/aos.css';
const Plans = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    
    <div className=' h-full text-gray-500 font-semibold'>
      <div className='flex justify-center' data-aos="zoom-in">
        <h1 className='text-center text-4xl md:text-5xl border-b p-1 text-cyan-700'>Checkout Our Plans</h1>
      </div>
<div className='flex flex-col md:items-center '>
  <div className='grid md:grid-cols-3 p-3 md:p-6 gap-2 md:gap-6 ' >
  {/**plans cards */}
  <div data-aos="fade-right" className='border rounded-lg  bg-gray-100/60 flex flex-col items-center justify-center p-2 mx-auto md:mx-0 h-[300px]   md:h-[400px] hover:bg-stone-900 hover:text-stone-50 '>
    {/**headings */}
<div className='flex flex-col items-center justify-center'>
<h1 className='border  p-1 bg-cyan-700/60 mb-2 text-white font-bold w-[100px] text-center'>Basic</h1>
<h1 className='text-xl font-bold' ><span className='text-3xl md:text-4xl font-extrabold'>25</span>$</h1>
<p>/month</p>
</div>
<h1>Our Basic package offers:</h1>
<ol className='p-2 list-disc'>
  <li className='flex items-center'> <TiTickOutline /> Unlimited gym access.</li>
  <li className='flex items-center'> <TiTickOutline />Consultations with trainer.</li>
  <li className='flex items-center'> <TiTickOutline />2 training programs.</li>
</ol>
<button className='border font-bold p-2 mt-4'>Sign Up</button>
  </div>
  <div data-aos="fade-down" className='border rounded-lg bg-gray-100/60 flex flex-col items-center justify-center p-2 mx-auto md:mx-0 h-[300px]   md:h-[400px] hover:bg-stone-900 hover:text-stone-50 '>
    {/**headings */}
<div className='flex flex-col items-center justify-center'>
<h1 className='border  p-1 bg-cyan-700/60 mb-2 text-white font-bold w-[100px] text-center'>Standard</h1>
<h1 className='text-xl font-bold' ><span className='text-3xl md:text-4xl font-extrabold'>35</span>$</h1>
<p>/month</p>
</div>
<h1>Our Standard package offers:</h1>
<ol className='p-2 list-disc'>
  <li className='flex items-center'> <TiTickOutline /> Unlimited gym access.</li>
  <li className='flex items-center'> <TiTickOutline />Training with trainer.</li>
  <li className='flex items-center'> <TiTickOutline />6 training programs.</li>
</ol>
<button className='border font-bold p-2 mt-4'>Sign Up</button>
  </div>
  <div data-aos="fade-left" className='border rounded-lg bg-gray-100/60 flex flex-col items-center justify-center p-2 mx-auto md:mx-0  h-[300px]   md:h-[400px] hover:bg-stone-900 hover:text-stone-50 '>
    {/**headings */}
<div className='flex flex-col items-center justify-center'>
<h1 className='border  p-1 bg-cyan-700/60 mb-2 text-white font-bold w-[100px] text-center'>Gold</h1>
<h1 className='text-xl font-bold' ><span className='text-3xl md:text-4xl font-extrabold'>55</span>$</h1>
<p>/month</p>
</div>
<h1>Our Gold package offers:</h1>
<ol className='p-2 list-disc'>
  <li className='flex items-center'> <TiTickOutline /> Unlimited gym access.</li>
  <li className='flex items-center'> <TiTickOutline />Training with trainer.</li>
  <li className='flex items-center'> <TiTickOutline />8 training programs.</li>
</ol>
<button className='border font-bold p-2 mt-4'>Sign Up</button>
  </div>
</div>
</div>
    </div>

  )
}

export default Plans