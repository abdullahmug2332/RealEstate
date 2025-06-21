import React, { useState } from 'react'

export default function Whychooseus() {
    const [data,setdata]=useState([
    {
      "title": "Complete Honesty in Deals",
      "description": "We believe in transparent dealings — the property we show you is exactly what we offer, with no last-minute changes or hidden surprises."
    },
    {
      "title": "Direct Deals Between Buyer and Seller",
      "description": "We connect both parties directly to ensure clear communication, build trust, and avoid misunderstandings. No middleman confusion — just smooth, honest transactions."
    },
    {
      "title": "No Extra Commission Charged",
      "description": "We keep our charges fair and clear. There are no unexpected commissions or hidden fees — what we quote is what you pay."
    },
    {
      "title": "Truthful Property Information",
      "description": "We never lie about land size, location, or specifications. Our team provides accurate and honest details, so you can make decisions with confidence."
    }
  ])
  return (
    <div className='w-[95%] md:w-[80%] mx-auto mb-[40px]'>
      <div className=" text-white">
        <p className='text-[40px] text-center mb-[60px] font-semibold'>Why Choose Us</p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
        {data.map((step, index) => (
          <div key={index} className="space-y-4">
            <div className="text-3xl font-bold ">{index + 1}</div>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm ">{step.description}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center my-[60px]'>
      <button className='btn2  '>Contact US</button>
      </div>
    </div>
    </div>
  )
}
