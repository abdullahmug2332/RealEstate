import React from 'react'
import mainlogo from "../assets/footerlogo.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';




export default function Footer() {
  return (
    <>
      <footer className='bg-[#303030] '>
        <div className='w-[95%] md:w-[80%]  mx-auto py-[40px]'>
          <div className='flex flex-wrap'>
            <div className='w-f lg:w-[30%]'>
              <Link to={'/'}>
                <img src={mainlogo} className='w-[130px] md:w-[220px] lg:w-[250px] hover:scale-105 hover:cursor-pointer duration-500' />
              </Link>
              <p className='mt-[20px]'>We’re here to support you — whether you’re finding your dream home, renting, or investing smartly. Our friendly team is ready to answer your questions and guide you to the best real estate options within your needs and budget. Have a specific property in mind or want to schedule a visit? Reach out anytime — we’re just a call or message away, committed to helping with honesty and care.</p>
            </div>
            <div className='w-full lg:w-[25%]  flex lg:justify-center mt-[20px] lg:mt-[80px]  '>
              <div className='flex lg:flex-col gap-x-[20px] lg:gap-[3px] flex-wrap'>
                <p className='text-[20px] md:text-[25px]  mb-[10px] font-semibold'>Pages</p>
                <Link to={"/"} className='flex items-center gap-x-[5px]  hover:scale-110 duration-500'>
                  <MdKeyboardDoubleArrowRight className=' ' />
                  <p className=''>Home</p>
                </Link>
                <Link to={"/about"} className='flex items-center gap-[5px] hover:scale-110 duration-500'>
                  <MdKeyboardDoubleArrowRight />
                  <p>About</p>
                </Link>
                <Link to={"/properties"} className='flex items-center gap-[5px] hover:scale-110 duration-500'>
                  <MdKeyboardDoubleArrowRight />
                  <p>Properties</p>
                </Link>
                <Link to={"/contact"} className='flex items-center gap-[5px] hover:scale-110 duration-500'>
                  <MdKeyboardDoubleArrowRight />
                  <p>Contact Us</p>
                </Link>
              </div>
            </div>
            <div className='w-full lg:w-[45%]'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.0575407125634!2d74.33672879678956!3d31.59599490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b007076a7d3%3A0xca033be69377e07!2sAbdullah%20Real%20Estate!5e1!3m2!1sen!2s!4v1752841385372!5m2!1sen!2s"
                className='w-[100%] h-[70%] mt-[20px] lg:mt-[70px]'
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />  
            </div>

          </div>
        </div>
        <div className="bg-[#414141] py-4 text-white">
          <div className="w-[95%] md:w-[80%]  mx-auto px-4  flex flex-col lg:flex-row gap-[20px]">
            <p className="px-4 w-full text-center  lg:text-left">
              Copyright © 2025 Abdullah Real Estate || All Rights Reserved.
            </p>
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
          </div>
        </div>
      </footer>
    </>

  )
}
