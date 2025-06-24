import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";


export default function Hero(props) {

  return (
    <section className='hero h-[100vh] min-h-[540px] '>
      <div className='w-[90%] md:w-[80%] mx-auto items-start flex flex-col justify-center h-full gap-[20px]'>
        <p className='text-[#FFFFFF] text-[40px] md:text-[50px] font-semibold leading-[50px] w-[100%] md:w-[59%]'>{props.title}</p>
        <p className='w-[100%] md:w-[50%] text-[#FFFFFF]'> {props.content}</p>
        <div className='flex gap-[20px] justify-center '>
          <a href="https://www.tiktok.com/@abdullah.real.estate?_t=ZS-8xTZy91NvIG&_r=1" target='_blank'>
            <FaTiktok className='text-[31px] hover:text-white cursor-pointer' />
          </a>
          <a href="#">
            <FaFacebook className='text-[30px] hover:text-white cursor-pointer' />
          </a>
          <a href="https://www.instagram.com/abdullah.real.estate1?igsh=MXFsNDJ6ODRlZWwwYg==" target='_blank'>
            <AiFillInstagram className='text-[34px] hover:text-white cursor-pointer' />
          </a>
          <a href="mailto:abdullahrealestate91@gmail.com">
            <MdEmail className="text-[34px] hover:text-white cursor-pointer " />
          </a>

        </div>
        <div className="flex items-center gap-[10px] md:gap-[20px] mb-[50px]">
          <button className='btn'>Properties</button>
          <button className='btn '>Contact</button>
        </div>
      </div>
    </section>
  )
}
