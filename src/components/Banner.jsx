import React from 'react'

export default function Banner(props) {
    return (
        <div className='banner my-[40px]'>
            <div className='w-[95%] md:w-[80%] mx-auto p-5 '>
                <div>
                    <p className='text-[40px]  mb-[20px] font-semibold text-[#ffffff]'>{props.title}</p>
                    <p className='text-[#ffffff]' dangerouslySetInnerHTML={{ __html: props.content }}></p>
                    <div className='flex justify-start gap-[10px] my-[30px]'>
                        <button className="btn">Properties</button>
                        <button className="btn">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
