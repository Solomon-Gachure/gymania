  import React, {useEffect} from 'react'
  import { TiTickOutline } from "react-icons/ti";
  import AOS from 'aos'
  import 'aos/dist/aos.css';
  const Plans = () => {
    useEffect(() => {
      AOS.init();
    }, []);
    return (
      
      <div name='plans' className=' h-full text-gray-500 font-semibold'>
        <div className='flex justify-center' data-aos="zoom-in">
          <h1 className='text-center text-4xl md:text-5xl border-b p-1 text-cyan-700'>Checkout Our Plans</h1>
        </div>
  <div className='flex flex-col md:items-center font-roboto '>
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
  <ol className='p-2 list-disc font-mono'>
    <li className='flex items-center'> <TiTickOutline /> Unlimited gym access.</li>
    <li className='flex items-center'> <TiTickOutline />Meets with trainer.</li>
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
  <ol className='p-2 list-disc font-mono'>
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
  <ol className='p-2 list-disc font-mono'>
    <li className='flex items-center'> <TiTickOutline /> Unlimited gym access.</li>
    <li className='flex items-center'> <TiTickOutline />Training with trainer.</li>
    <li className='flex items-center'> <TiTickOutline />8 training programs.</li>
  </ol>
  <button className='border font-bold p-2 mt-4'>Sign Up</button>
    </div>
  </div>
  </div>
  {/**process of gym */}
<div className='font-roboto'>
  <div className='font-roboto'>
    <h1 className='text-center text-3xl md:text-4xl italic p-2 '>Steps to fitness: </h1>
  </div>
  {/**cards to be placed here */}
  <div className='grid md:grid-cols-4 gap-1 p-4 font-mono'>
<div className=' h-[320px] flex flex-col items-center p-2'>
{/**img div */}
<div className='rounded-full border w-[150px] h-[150px]'>
  <img className='rounded-full object-cover w-full h-full'
  src="https://img.freepik.com/free-photo/top-view-goals-written-note-with-notepad-pen-white-surface-color-school-job-business-copybook-college-office_179666-19779.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.2.134876288.1693412887&semt=ais" 
  alt="" />
</div>
<h1 data-aos="zoom-in" className='text-center italic border-b p-2 font-bold text-cyan-700 text-xl'>Goal Setting</h1>
<p className='text-center '>Have a goal towards fitness be it losing weight, toning, muscle growth or strength increase.</p>
</div>
<div className=' h-[320px] flex flex-col items-center p-2'>
{/**img div */}
<div className='rounded-full border w-[150px] h-[150px]'>
  <img className='rounded-full object-cover w-full h-full'
  src="https://img.freepik.com/premium-photo/close-up-cropped-shoes-by-number-1-ground_1048944-5069920.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.2.134876288.1693412887&semt=ais" 
  alt="" />
</div>
<h1 data-aos="zoom-in" className='text-center italic border-b p-2 font-bold text-cyan-700 text-xl'>First Step</h1>
<p className='text-center '>Step out of that comfort zone and kill that procastination by having your first steps.</p>
</div>
<div className=' h-[320px] flex flex-col items-center p-2'>
{/**img div */}
<div className='rounded-full border w-[150px] h-[150px]'>
  <img className='rounded-full object-cover w-full h-full'
  src="https://img.freepik.com/free-photo/3d-morph-man-exercising-treadmill_1048-13682.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.2.134876288.1693412887&semt=ais" 
  alt="" />
</div>
<h1 data-aos="zoom-in" className='text-center italic border-b p-2 font-bold text-cyan-700 text-xl'>Consistency</h1>
<p className='text-center '>Showing up everyday improves and adds on the later results, show up no matter what.</p>
</div>
<div className=' h-[320px] flex flex-col items-center p-2'>
{/**img div */}
<div className='rounded-full border w-[150px] h-[150px]'>
  <img className='rounded-full object-cover w-full h-full'
  src="https://img.freepik.com/free-photo/artistic-portrait-shirtless-muscular-male-with-burning-dumbbell_613910-7352.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.1.134876288.1693412887&semt=sph" 
  alt="" />
</div>
<h1 data-aos="zoom-in" className='text-center italic border-b p-2 font-bold text-cyan-700 text-xl'>End Result</h1>
<p className='text-center '>We will be there when building, when in pain, when in gain & when celebrating the results.</p>
</div>
  </div>
</div>
      </div>

    )
  }

  export default Plans