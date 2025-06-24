import React, { useEffect, useState } from 'react'
import homehero from "../assets/hero.jpg"
import abouthero from "../assets/abouthero.png"
import { Link } from 'react-router-dom';

export default function Banner(props) {
    const [bg, setbg] = useState(homehero);

    useEffect(() => {
        if (props.bg == "home") {
            setbg(homehero)
        } else if (props.bg == "about") {
            setbg(abouthero)
        }
    }, [])
    console.log(bg)
    return (
        <div className='banner my-[40px]' style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.343), rgba(0, 0, 0, 0.711)), url(${bg})`
    }}>
            <div className='w-[95%] md:w-[80%] mx-auto p-5 '>
                <div>
                    <p className='text-[40px]  mb-[20px] font-semibold text-[#ffffff]'>{props.title}</p>
                    <p className='text-[#ffffff]' dangerouslySetInnerHTML={{ __html: props.content }}></p>
                    <div className='flex justify-start gap-[10px] my-[30px]'>
                        <Link to={"/properties"} className='btn '>Properties</Link>
                        <Link to={"/contact"} className='btn '>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
