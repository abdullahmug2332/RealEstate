import { FaTiktok, FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IoMdCall } from "react-icons/io";

export default function UpperNav() {
    return (
        <div className="text-white fixed top-0 left-0 w-full z-[50] py-[5px] bg-[#303030]">
            <div className="w-[95%] md:w-[80%] flex justify-between items-center mx-auto px-[20px] ">
                <div className="items-center flex gap-x-[10px]">
                    <a href="https://www.tiktok.com/@abdullah.real.estate?_t=ZS-8xTZy91NvIG&_r=1" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="text-[20px] hover:text-white cursor-pointer" />
                    </a>
                    <a href="#">
                        <FaFacebook className="text-[20px] hover:text-white cursor-pointer" />
                    </a>
                    <a href="https://www.instagram.com/abdullah.real.estate1?igsh=MXFsNDJ6ODRlZWwwYg==" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram className="text-[20px] hover:text-white cursor-pointer" />
                    </a>
                    <a href="mailto:abdullahrealestate91@gmail.com">
                        <MdEmail className="text-[20px] hover:text-white cursor-pointer" />
                    </a>

                </div>
                <div className='flex items-center gap-x-[10px] hover:scale-105 duration-300 cursor-pointer'>
                    <a href="tel:+923258257153" target='_blank'><IoMdCall className='text-[20px]' /></a>
                    <a href="tel:+923258257153" target='_blank'><p className='font-[600] mt-[2px] tracking-[0.5px]'>+92 325 8257153</p></a>
                </div>
            </div>
        </div>
    )
}
