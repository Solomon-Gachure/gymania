import React from 'react'
import {FaFacebook, FaInstagram, FaTiktok, FaWhatsapp} from 'react-icons/fa'
const Contacts = () => {
  const WhatsAppLink = ()=>{
    const number='+254798605270'
    const message="welcome to gymania fitness gym!"
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  }
  return (
    <div name='contacts' className='h-full font-roboto'>
      <div>
        <h1 className='text-center text-4xl md:text-5xl p-1 text-cyan-700'>Reach us through:</h1>
        <div>
          <form action="https://getform.io/f/db96c5fb-9063-4883-a850-e833759e93be" className='flex flex-col items-center h-full w-full  p-4 gap-2 text-black' method="post">
            <div className='justify-between flex gap-2'>
              <input className=' p-2 w-[180px] md:w-full outline-none bg-transparent  border rounded-sm' required type="text" name='name' placeholder='Name' />
              <input className=' p-2 w-[180px] md:w-full outline-none bg-transparent  border rounded-sm' required type="text" name='email'  placeholder='Email' />
            </div>
            <textarea className='md:w-[500px] w-[350px] p-2 outline-none bg-transparent border rounded-sm' required name="message" placeholder='Message' id="" cols="30" rows="5"></textarea>
            <button className='text-white bg-cyan-500 p-2 w-[200px] font-bold rounded-sm text-xl'>Submit</button>
          </form>
        </div>
        <div>
          <h1 className='text-center text-gray-500'>Also follow us through our socials</h1>
          <div className='flex justify-center items-center gap-14 p-2'>
            {/**icons for the socials */}
            <FaFacebook size={30} className='hover:scale-105 duration-300 cursor-pointer' />
            <FaInstagram size={30} className='hover:scale-105 duration-300 cursor-pointer' />
            <FaTiktok size={30} className='hover:scale-105 duration-300 cursor-pointer' />
              <FaWhatsapp size={30} target='_blank' onClick={WhatsAppLink} className='hover:scale-105 duration-300 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts