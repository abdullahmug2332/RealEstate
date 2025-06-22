import React from 'react'
import { TbRulerMeasure2 } from "react-icons/tb";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



export default function Card(props) {
  return (
    <div>
      {/* Card 1 */}
      <div className="bg-[#414141] shadow-md rounded-md overflow-hidden min-h-[470px]">
        <img
          src={props.image}
          alt="Property"
          className="w-full h-[250px] object-cover"
        />
        <div className="p-4 bg-[#414141]  flex flex-col">
          <p className="text-xl font-semibold text-white ">PKR {props.price}</p>
          <p className="text-sm  mt-1 text-white">{props.location}</p>
          <p className="text-sm text-white">{props.measurement} {props.unit} <TbRulerMeasure2  className='inline'/> | {props.bed} <FaBed  className='inline text-[13px]'/> | {props.bath} <FaBath  className='inline text-[13px]'/></p>
          <p className="text-[13px] mt-2 ">
            {props.description.length > 100
              ? props.description.slice(0, 100) + "..."
              : props.description}
          </p>
          <div className="flex gap-2 mt-[20px]">
            <a href="tel:+923258257153" target='_blank'>
              <button className="btn !px-4 !py-1 !text-sm rounded">Call</button>
            </a>
            <a href="https://wa.me/923258257153" target='_blank'>
              <button className="text-sm  text-white px-4 py-1 bg-[#0CC143]  rounded"><FaWhatsapp className='inline'/> WhatsApp</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
