import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/pro1.png"
import img2 from "../assets/pro2.png"
import img3 from "../assets/pro3.png"
import video from "../assets/video.mp4"
import { motion } from "framer-motion";
import { Autoplay } from 'swiper/modules';
import { TbRulerMeasure2 } from "react-icons/tb";
import { MdHome } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import HomeCards from "./HomeCards";


// Sample data
const property = {
    price: 2000000,
    location: "Bahria Town - Jinnah Block",
    type: "sale",
    measurement: 4,
    unit: "marla",
    rooms: 3,
    bath: 2,
    front: 24,
    back: 25,
    description: "We will provide initial advice for free and the enquiry will be handled by one of our fully qualified Consultant or Director.",
    media: [
        { type: "image", src: img1 },
        { type: "image", src: img2 },
        { type: "image", src: img3 },
        { type: "video", src: video },
    ],
};

export default function Property() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <section className="">
            {/* Mobile Section */}
            <div className="w-[95%] md:w-[80%] mx-auto">
                <div className="w-full block md:hidden">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        className="rounded-lg "
                    >
                        {property.media.map((item, index) => (
                            <SwiperSlide key={index}>
                                {item.type === "image" ? (
                                    <img
                                        src={item.src}
                                        alt={`media-${index}`}
                                        className="w-full   object-contain"
                                    />
                                ) : (
                                    <video
                                        controls
                                        className="w-full object-contain" autoPlay
                                    >
                                        <source src={item.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Laptop Section  */}
            <div className="w-[95%] md:w-[80%] mx-auto hidden md:flex gap-[3px]">
                <img src={property.media[0].src} className="w-[25%] object-cover rounded  h-[100%]" />
                <img src={property.media[1].src} className=" w-[25%] object-cover rounded  h-[100%]" />
                <img src={property.media[2].src} className="w-[25%] object-cover rounded  h-[100%]" />
                <video controls autoPlay className="w-[25%] object-cover rounded   h-[100%]">
                    <source src={property.media[3].src} type="video/mp4" />
                </video>
            </div>

            {/* details  */}
            <div className="w-[95%] md:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-[10px]  my-[20px]" >
                <div className="flex items-center justify-center gap-[5px] border-x-2  py-[20px]">
                    <MdHome className="text-[30px]" />
                    <p className="pp">
                        For {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                    </p>
                </div>
                <div className="flex items-center justify-center gap-[5px] border-x-2 py-[20px]">
                    <TbRulerMeasure2 className="text-[30px]" />
                    <p className="pp">
                        {property.measurement}{" "}
                        {property.measurement > 1
                            ? property.unit === "marla"
                                ? "Marlas"
                                : "Kanals"
                            : property.unit === "marla"
                                ? "Marla"
                                : "Kanal"}
                    </p>
                </div>
                <div className="flex items-center justify-center gap-[5px] border-x-2 py-[20px]">
                    <MdOutlineBedroomParent className="text-[30px]" />
                    <p className="pp">
                        {property.rooms} {property.rooms <= 1 ? "Room" : "Rooms"}
                    </p>
                </div>
                <div className="flex items-center justify-center gap-[5px] border-x-2 py-[20px]">
                    <FaBath className="text-[30px]" />
                    <p className="pp">
                        {property.bath} {property.bath <= 1 ? "Bath" : "Baths"}
                    </p>
                </div>
                <div className="flex items-center justify-center gap-[5px] border-x-2 py-[20px]">
                    <TbRulerMeasure className="text-[30px]" />
                    <p className="pp">
                        {property.front} Front
                    </p>
                </div>
                <div className="flex items-center justify-center gap-[5px] py-[20px] border-x-2">
                    <TbRulerMeasure className="text-[30px]" />
                    <p className="pp">
                        {property.back} Back
                    </p>
                </div>
            </div>

            {/* description details  */}
            <div className="w-[95%] md:w-[80%] mx-auto my-[100px]" >

                <h3 className="text-2xl font-bold mb-2">
                    {property.measurement} {property.measurement > 1
                        ? property.unit === "marla"
                            ? "Marlas"
                            : "Kanals"
                        : property.unit === "marla"
                            ? "Marla"
                            : "Kanal"}{" "}
                    House for {property.type.charAt(0).toUpperCase() + property.type.slice(1)} in {property.location}
                </h3>

                <p >
                    Looking for a well-designed home in a prime area like {property.location}? This {property.measurement}{" "}
                    {property.unit} property is ideal for affordability, style, and comfort.
                </p>

                <ul className="space-y-2">
                    <li><span className="font-semibold">Rooms:</span> {property.rooms} {property.rooms > 1 ? "Rooms" : "Room"} </li>
                    <li><span className="font-semibold">Baths:</span> {property.bath} {property.bath > 1 ? "Baths" : "Bath"}</li>
                    <li><span className="font-semibold">Front:</span> {property.front} ft</li>
                    <li><span className="font-semibold">Back:</span> {property.back} ft</li>
                    <li><span className="font-semibold">Location:</span> {property.location}</li>
                </ul>
                <h2 className="text-xl font-semibold mt-2">Description</h2>
                <p >{property.description}</p>
                <div className="flex gap-[5px] my-[40px] flex-wrap">
                    <Link to={"/properties"}><button className="btn2 hover:scale-[1.02] duration-500">View More </button></Link>
                    <a href="tel:+923258257153" target='_blank'>
                        <button className="btn2  rounded hover:scale-[1.02] duration-500">Call</button>
                    </a>
                    <a href="https://wa.me/923258257153" target='_blank'>
                        <button className=" btn2 !text-white px-4 py-1 !bg-[#0CC143] !border-0  rounded hover:scale-[1.02] duration-500"><FaWhatsapp className='inline' /> WhatsApp</button>
                    </a>
                </div>
            </div>

            {/* home cards */}
            <HomeCards />

        </section>
    );
}
