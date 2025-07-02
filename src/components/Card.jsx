import React from 'react'
import { TbRulerMeasure2 } from "react-icons/tb";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {baseURL } from "../../API/baseURL"


export default function Card(props) {
  function formatPrice(price) {
    const num = parseInt(price, 10);

    if (num >= 10000000) {
      return (num / 10000000).toFixed(2) + " Crore";
    } else if (num >= 100000) {
      return (num / 100000).toFixed(2) + " Lac";
    } else {
      return num.toLocaleString(); 
    }
  }
  console.log(props.id)
  return (
    <Link to={`/property/${props.id}`} className='hover:scale-[1.02] cursor-pointer duration-500'>
      <div className="bg-[#2C2C2C] shadow-md rounded-md overflow-hidden  relative min-h-[460px] hover:scale-[1.02] cursor-pointer duration-500">
        <p className='bg-[#2C2C2C] absolute top-2 right-2 text-white font-semibold px-[10px] text-[15px] py-[5px] rounded-[5px]'>For {props.type.charAt(0).toUpperCase() + props.type.slice(1)}</p>
        <img
          src={`${baseURL}/images/${props.image}`}
          alt="Property"
          className="w-full h-[250px] object-cover"
        />
        <div className="p-4 bg-[#2C2C2C]  flex flex-col relative h-[200px]">
          <p
            className={`text-md absolute top-3 right-3 font-semibold ${props.soldout ? 'text-red-600' : 'text-green-600'
              }`}
          >
            {props.soldout ? 'Sold Out' : 'Available'}
          </p>
          <p className="text-xl font-semibold text-white mt-[12px]">PKR {formatPrice(props.price)}</p>
          <p className="text-sm  mt-1 text-white">{props.location}</p>
          <p className="text-sm text-white">{props.measurement} {props.unit} <TbRulerMeasure2 className='inline' /> | {props.rooms} <FaBed className='inline text-[13px]' /> | {props.bath} <FaBath className='inline text-[13px]' /></p>
          <p className="text-[13px] mt-2 ">
            {props.description.length > 180
              ? props.description.slice(0, 180) + "..."
              : props.description}
          </p>
          <div className="flex gap-2 mt-auto">
            <button
              className="btn !px-4 !py-1 !text-sm rounded"
              onClick={() => window.open("tel:+923258257153", "_blank")}
            >
              Call
            </button>

            <button
              className="text-sm !text-white px-4 py-1 bg-[#0CC143] rounded flex items-center gap-1"
              onClick={() => window.open("https://wa.me/923258257153", "_blank")}
            >
              <FaWhatsapp /> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
