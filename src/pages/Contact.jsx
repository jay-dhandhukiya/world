import React from 'react'

function Contact() {
const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formInputData = Object.fromEntries(formData.entries());
  console.log(formInputData);
};
  return (
    <div className='h-screen px-[5%] text-white bg-black pb-10 pt-20 xl:px-[10%]'>
      <h1 className='py-4 pb-10 text-center text-2xl font-semibold text-white line-clamp-2 space-x-2 sm:text-2xl md:text-2xl xl:text-3xl'>Contact Us</h1>
      <form className='flex justify-center items-center flex-col' onSubmit={handleSubmit}>
        <input 
        className='mb-4 py-2 px-4 w-full rounded-md border-2 border-gray-600 sm:w-1/2 xl:w-1/3'
            type="text" 
            placeholder='Enter your name'
            name='username' 
            required
            autoComplete='off'
        />
        <input 
        className='mb-4 py-2 px-4 w-full rounded-md border-2 border-gray-600 sm:w-1/2 xl:w-1/3'
            type="email" 
            placeholder='Enter your email'
            name='email' 
            required
            autoComplete='off'
        />
        <textarea 
        className='mb-4 py-2 px-4 w-full rounded-md resize-none border-2 border-gray-600 sm:w-1/2 xl:w-1/3'
            name="massage"
            rows="10" 
            placeholder='Enter your message'
            required
            autoComplete='off'
        ></textarea>
        <button className='py-1 px-6 w-full text-start rounded-full border-2 border-gray-600 sm:w-1/2 xl:w-1/3' type='submit'>SEND</button>
      </form>
    </div>
  )
}

export default Contact
