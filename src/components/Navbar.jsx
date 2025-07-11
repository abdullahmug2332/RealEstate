import React, { useState } from 'react'
import mainlogo from "../assets/mainlogo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [toggle, setToogle] = useState(false)
    return (
        <section className="overflow-y-hidden w-[100vw] ">
            <nav className=" fixed top-9 left-0  w-full bg-[#101010]  p-2 md:p-0 z-[999] " >
                <div className='w-[95%] md:w-[80%] mx-auto  flex items-center'>
                    <div className='flex items-center overflow-hidden'>
                        <Link to={"/"}>
                            <img src={mainlogo} className='w-[180px] md:w-[250px] lg:w-[290px] hover:scale-105 hover:cursor-pointer duration-500' />
                        </Link>
                    </div>
                    <div className='ml-auto  hidden md:block'>
                        <div className='flex items-center'>
                            <Link to={"/"}>
                                <div className='text navlinks'>Home</div>
                            </Link>
                            <Link to={"/about"}>
                                <div className='text navlinks'>About</div>
                            </Link>
                            <Link to={"/properties"}>
                                <div className='text navlinks'>Properties</div>
                            </Link>
                            <Link to={"/contact"}>
                                <div className='text navlinks'>Contact</div>
                            </Link>
                        </div>
                    </div>

                    <div onClick={() => setToogle(false)} className={`overlay ${toggle == true ? "block" : "hidden"}   fixed top-0 left-0 text-right z-23 w-[100vw] h-[100vh] md:hidden `}>
                        1
                    </div>

                    <div className='ml-auto block md:hidden'>
                        <GiHamburgerMenu onClick={() => setToogle(true)} className=' text-[#cccccc] text-[40px] ' />
                    </div>
                </div>
            </nav>
            <div className={`${toggle == true ? "translate-x-[0]" : "translate-x-full"} md:hidden  duration-500 fixed top-0 right-0  h-full bg-[#292929] z-[999]`}>
                <RxCross1 onClick={() => setToogle(false)} className='text-[40px] font-bold text ml-auto mr-[10px] mt-[10px]' />
                <div className='flex flex-col items-center'>
                    <Link to={"/"} onClick={() => setToogle(false)}>
                        <div className='text mobnavlink'>Home</div>
                    </Link>
                    <Link to={"/about"} onClick={() => setToogle(false)}>
                        <div className='text mobnavlink'>About</div>
                    </Link>
                    <Link to={"/properties"} onClick={() => setToogle(false)}>
                        <div className='text mobnavlink'>Properties</div>
                    </Link>
                    <Link to={"/contact"} onClick={() => setToogle(false)}>
                        <div className='text mobnavlink'>Contact</div>
                    </Link>

                </div>
            </div>
        </section>
    )
}
