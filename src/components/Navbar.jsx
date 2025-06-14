import React, { useState } from 'react'
import mainlogo from "../assets/mainlogo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


export default function Navbar() {
    const [toggle, setToogle] = useState(false)
    return (
        <section className="overflow-x-hidden w-[100vw]">
            <nav className=" fixed top-0 left-0  w-full bg-[#101010]  p-2 md:p-0 overflow-hidden" >
                <div className='w-[95%] md:w-[80%] mx-auto  flex items-center'>
                    <div className='flex items-center'>
                        <img src={mainlogo} className='w-[180px] md:w-[250px] lg:w-[290px] hover:scale-105 hover:cursor-pointer duration-500' />
                    </div>
                    <div className='ml-auto  hidden md:block'>
                        <div className='flex items-center'>
                            <div className='text navlinks'>Home</div>
                            <div className='text navlinks'>About</div>
                            <div className='text navlinks'>Properties</div>
                            <div className='text navlinks'>Contact</div>
                        </div>
                    </div>

                    <div onClick={() => setToogle(false)} className={`overlay ${toggle == true ? "block" : "hidden"}   absolute top-0 left-0 text-right z-20 w-[100vw] h-[100vh] md:hidden `}>
                        1
                    </div>

                    <div className='ml-auto block md:hidden'>
                        <GiHamburgerMenu onClick={() => setToogle(true)} className=' text-[#cccccc] text-[40px] ' />
                    </div>
                </div>
            </nav>
            <div className={`${toggle == true ? "translate-x-[0]" : "translate-x-full"} md:hidden z-30 duration-500 absolute top-0 right-0  h-full bg-[#292929] `}>
                <RxCross1 onClick={() => setToogle(false)} className='text-[40px] font-bold text ml-auto mr-[10px] mt-[10px]' />
                <div className='flex flex-col items-center'>
                    <div className='text mobnavlink'>Home</div>
                    <div className='text mobnavlink'>About</div>
                    <div className='text mobnavlink'>Properties</div>
                    <div className='text mobnavlink'>Contact</div>

                </div>
            </div>
        </section>
    )
}
