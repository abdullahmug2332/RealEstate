import React from 'react'

export default function Hero() {
  return (
    <section className='hero h-[100vh] min-h-[540px] '>
      <div className='w-[90%] md:w-[80%] mx-auto items-start flex flex-col justify-center h-full gap-[20px]'>
        <p className='text-white text-[40px] md:text-[50px] font-semibold leading-[50px] w-[100%] md:w-[59%]'>Find the best properties  deals ever.</p>
        <p className='w-[100%] md:w-[50%]'> Discover the perfect place to call home — whether you're buying, renting, or investing. We help you find your dream property with ease, confidence, and expert support every step of the way.</p>
        <div className="flex items-center gap-[10px] md:gap-[20px] mb-[50px]">
        <button className='btn'>Properties</button>
        <button className='btn '>Contact</button>
        </div>
      </div>
    </section>
  )
}
