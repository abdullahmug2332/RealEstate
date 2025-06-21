import React from 'react'

export default function Banner() {
    return (
        <div className='banner my-[40px]'>
            <div className='w-[95%] md:w-[80%] mx-auto p-5 '>
                <div>
                    <p className='text-[40px]  mb-[20px] font-semibold text-[#ffffff]'>Get in Touch with Us</p>
                    <p className='text-[#ffffff]'>We’re here to help you every step of the way — whether you’re searching for your dream home, exploring rental options, or planning a smart property investment. Our friendly and knowledgeable team is always ready to answer your questions, provide expert advice, and guide you toward the best real estate solutions that match your needs and budget.</p>
                    <p className='text-[#ffffff]' >Have a specific property in mind? Want to schedule a visit? Or simply need more information about our services? Don’t hesitate to reach out. We believe in building strong relationships through clear communication and reliable support. No matter how big or small your query, we’re just a message, call, or visit away — ready to serve you with honesty, dedication, and care.</p>
                    <div className='flex justify-start gap-[10px] my-[30px]'>
                        <button className="btn">Properties</button>
                        <button className="btn">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
