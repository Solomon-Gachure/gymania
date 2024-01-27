import React, { useState, useEffect } from 'react'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import AOS from 'aos'
import 'aos/dist/aos.css';
const About = () => {
  
  
  const photos=[
    'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D',

  ];
  useEffect(() => {
    AOS.init();
  }, []);
  const ImageSlider = ({ photos })=>{
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handlePrev = ()=>{
      setCurrentImageIndex((prevIndex)=>(prevIndex === 0 ? photos.length -1 : prevIndex -1));
    }
    const handleNext = ()=>{
      setCurrentImageIndex((prevIndex)=>(prevIndex === photos.length -1 ? 0 : prevIndex +1));
    }
    return (
      <div className='flex items-center text-white font-bold justify-between '>
        <GrFormPrevious className='cursor-pointer text-cyan-700' onClick={handlePrev} size={50} />
        <img className='object-cover rounded-lg h-[150px] w-[300px] md:h-[300px] md:w-[500px]' src={photos[currentImageIndex]} alt="" />
        <GrFormNext className='cursor-pointer text-cyan-700' onClick={handleNext} size={50} />
      </div>
    );
  }
  return (
    <div name='about' className='h-full'>
      <div className='flex flex-col items-center p-2 font-roboto'>
        {/**header */}
        <div className='flex flex-col items-center p-2 lg:max-w-4xl'>
          <h1 className='text-center text-4xl md:text-5xl border-b p-1 text-cyan-700 font-semibold'>Who are We?</h1>
          <p className='font-roboto text-center mt-2 font-semibold text-stone-700 md:text-xl lg:p-2'>
        Gymania stands as the paramount fitness destination, excelling in every aspect. Its exceptional trainers inspire and guide with expertise, while state-of-the-art equipment elevates workouts. With an unwavering commitment to fair prices, Gymania makes premium fitness accessible to all. The results achieved by members speak volumes, solidifying Gymania's status as the epitome of a well-rounded, affordable, and results-driven gym experience.
        </p>
        </div>
        {/**image slider with trainers */}
        <div>
          <div className='relative'>
            <div className='flex max-w-sm'>
              <h1 data-aos="fade-up" className='absolute z-10 font-roboto text-2xl md:text-5xl w-[250px] md:w-[400px] text-white font-extrabold p-4 '>
              "No wealth is greater than your health, and there's no destination in fitness!" Bony <br/>
             <span className='text-cyn-500'> ~head Trainer</span>
            </h1>
           
            </div>
            
            <img  className='relative rounded-lg'
             src="https://img.freepik.com/free-photo/athletic-man-exercising-with-weights-copy-space_23-2148398859.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.2.134876288.1693412887&semt=ais" alt="" />
          <div className='bg-black/20 absolute inset-0 rounded-lg  w-full h-full'/>
          </div>
        </div>
        {/**meet the team */}
        <div>
<h1 className='text-center pt-2 text-2xl md:text-3xl text-white '>Meet the Team</h1>
<div className='p-2 grid md:grid-cols-3 gap-3'>
  <div className='h-[320px] w-[300px] border border-black rounded-lg bg-cyan-900 hover:scale-105 duration-300'>
    <img className='w-full object-cover h-[250px] rounded-t-lg'
    src="https://media.istockphoto.com/id/1385325176/photo/pretty-young-woman-with-curly-hair-in-casual-clothing-looking-with-a-serious-expression-at.jpg?s=612x612&w=0&k=20&c=hd5ULsBANDovdYrz-xM5s0sxCN7f6X0OIcQmaOhTqJ0=" alt="" />
  <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='flex flex-col p-2'>
    <h1 className='text-xl font-bold text-white '>Salome Sol <br/> Ladies Head & Cardial Head</h1>
  </div>
  </div>
  <div className='h-[320px] w-[300px] border border-black rounded-lg bg-cyan-900 hover:scale-105 duration-300'>
    <img className='w-full object-cover h-[250px] rounded-t-lg'
    src="https://media.istockphoto.com/id/675179390/photo/muscular-trainer-writing-on-clipboard.jpg?b=1&s=612x612&w=0&k=20&c=f4_W9X06NAw8EThQc2ogMYbNsUtVEHrNUgVc7Lwy56k=" alt="" />
  <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='flex flex-col p-2'>
    <h1 className='text-xl font-bold text-white '>Tony Blake <br/> Head of Operations</h1>
  </div>
  </div>
  <div className='h-[320px] w-[300px] border border-black rounded-lg bg-cyan-900 hover:scale-105 duration-300'>
    <img className='w-full object-cover h-[250px] rounded-t-lg'
    src="https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
  <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='flex flex-col p-2'>
    <h1 className='text-xl font-bold text-white '>Chiki Chan <br/> Injury recovery & Yoga</h1>
  </div>
  </div>
</div>
        </div>
        <div className='p-2'>
          <h1 className='text-center font-roboto text-2xl md:text-3xl pb-2 text-cyan-700'>Check out our gym:</h1>
          <ImageSlider photos={photos} />
        </div>
        
      </div>
      <div className='font-mono flex flex-col justify-center gap-2 md:text-2xl text-yellow-500 items-center  bg-cyan-700 w-full md:h-[300px] p-2 '>
<h1>Start the Journey with us Today!</h1>

<div className=' p-2'>
  <form action="https://getform.io/f/db96c5fb-9063-4883-a850-e833759e93be" method="post">
    <div className='w-full p-2'>
    <select className='text-lg text-stone-300 w-full p-1 md:p-2 outline-none border bg-transparent' name="package" id="" required>
  <option value="">Select Your Package </option>
  <option value="">Basic Package </option>
  <option value="">Standard Package </option>
  <option value="">Gold Package </option>
              </select>
  </div>
  <div className=' w-full grid grid-cols-2 gap-4'>
    <div className='flex flex-col gap-2 md:gap-3 text-xl'>
<input type="text" name='first name' className='p-1 bg-transparent border text-stone-300 outline-none' placeholder='First Name' required />
<input type="text" name='email' className='p-1 bg-transparent border text-stone-300 outline-none' placeholder='Email' required />
<select className='font-mono text-xl p-1 bg-transparent border text-stone-300 outline-none' name="" id="" required >
  <option value="">Gender</option>
  <option value="">Male</option>
  <option value="">Female</option>
  <option value="">Other</option> 
              </select>
    </div>
    <div className='flex flex-col gap-2 md:gap-3 text-xl'>
<input type="text" name='second name' className='p-1 bg-transparent border text-stone-300 outline-none' placeholder='Second Name' required />
<input type="text" name='phone no' className='p-1 bg-transparent border text-stone-300 outline-none' placeholder='Phone No.' required />
<select className='font-mono text-xl p-1 bg-transparent border text-stone-300 outline-none' name="training" id="" >
  <option value="">Training Time</option>
  <option value="">Morning</option>
  <option value="">Afternoon</option>
  <option value="">Evening</option> 
              </select>
    </div>
  </div>
  <div className='p-2 flex items-center justify-center'>
    <button  className='border p-1 text-lg hover:bg-white hover:text-cyan-700'  >Join Now</button>
  </div>
  </form>
</div>
        </div>
        
      </div>
  )
}

export default About