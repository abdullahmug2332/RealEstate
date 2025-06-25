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
              <img src={mainlogo} className='w-[130px] md:w-[220px] lg:w-[250px] hover:scale-105 hover:cursor-pointer duration-500' />
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
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3398.385723796415!2d74.33881397561454!3d31.595888874179607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDM1JzQ1LjIiTiA3NMKwMjAnMjkuMCJF!5e0!3m2!1sen!2s!4v1750855325123!5m2!1sen!2s"
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
