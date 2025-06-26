import React, { useEffect, useState } from 'react';
import Card from "../components/Card"
import Hero from '../components/Hero';
import house from "../assets/house.jpeg";
import { BiAbacus } from "react-icons/bi";
import { motion } from "framer-motion";
import img1 from "../assets/pro1.png";
import img2 from "../assets/pro2.png";
import img3 from "../assets/pro3.png";
import video from "../assets/video.mp4";

export default function Properties() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    const [toggle, setToggle] = useState(false)
    const hero = {
        bg: "properties",
        title: "Explore Our Properties",
        content:
            "Discover a wide range of properties tailored to your lifestyle, needs, and investment goals. At Abdullah Real Estate, we offer hand-picked homes, apartments, commercial spaces, and land options to help you make confident and informed decisions. Whether you're buying, renting, or investing — your perfect property starts here.",
    };
    const [data, setData] = useState([
        {
            price: 900000000,
            location: "Bahria Town - Jinnah Block",
            type: "rent",
            measurement: 4,
            unit: "marla",
            rooms: 3,
            bath: 2,
            front: 25,
            back: 45,
            description: "We will provide initial advice for free...",
            media: [{ type: "image", src: house }],
            soldout: false
        },
        {
            price: 350000000,
            location: "DHA Phase 6 - Sector A",
            type: "sale",
            measurement: 5,
            unit: "marla",
            rooms: 4,
            bath: 3,
            front: 22,
            back: 38,
            description: "This modern and stylish home offers comfort...",
            media: [{ type: "image", src: house }],
            soldout: true
        },
        {
            price: 4800000,
            location: "Lake City - Sector M7",
            type: "rent",
            measurement: 10,
            unit: "marla",
            rooms: 5,
            bath: 4,
            front: 30,
            back: 32,
            description: "Located in one of the most desirable neighborhoods...",
            media: [{ type: "image", src: house }],
            soldout: false
        },
        {
            price: 2600000,
            location: "Wapda Town - Block N2",
            type: "sale",
            measurement: 6,
            unit: "marla",
            rooms: 3,
            bath: 2,
            front: 24,
            back: 34,
            description: "Affordable and beautifully constructed...",
            media: [{ type: "image", src: house }],
            soldout: true
        },
        {
            price: 5300000,
            location: "Johar Town - Phase 2",
            type: "sale",
            measurement: 7,
            unit: "marla",
            rooms: 4,
            bath: 3,
            front: 26,
            back: 36,
            description: "A premium residential property...",
            media: [{ type: "image", src: house }],
            soldout: false
        },
        {
            price: 4200000,
            location: "Al Rehman Garden - Phase 4",
            type: "sale",
            measurement: 5,
            unit: "marla",
            rooms: 3,
            bath: 2,
            front: 22,
            back: 30,
            description: "A peaceful, gated community...",
            media: [{ type: "image", src: house }],
            soldout: true
        },
        {
            price: 6200000,
            location: "Valencia Town - Block F1",
            type: "sale",
            measurement: 10,
            unit: "marla",
            rooms: 5,
            bath: 4,
            front: 35,
            back: 35,
            description: "This corner plot home offers spacious rooms...",
            media: [{ type: "image", src: house }],
            soldout: false
        },
        {
            price: 3100000,
            location: "Gulshan-e-Ravi - Block H",
            type: "sale",
            measurement: 5,
            unit: "marla",
            rooms: 3,
            bath: 2,
            front: 23,
            back: 27,
            description: "Great investment opportunity...",
            media: [{ type: "image", src: house }],
            soldout: false
        },
        {
            price: 8900000,
            location: "DHA Phase 8 - Ex Air Avenue",
            type: "sale",
            measurement: 12,
            unit: "marla",
            rooms: 6,
            bath: 5,
            front: 40,
            back: 45,
            description: "Luxury house with imported fittings...",
            media: [{ type: "image", src: house }],
            soldout: true
        },
        {
            price: 3800000,
            location: "Pak Arab Housing Scheme",
            type: "sale",
            measurement: 6,
            unit: "marla",
            rooms: 3,
            bath: 2,
            front: 28,
            back: 30,
            description: "Budget-friendly and ready to move in...",
            media: [{ type: "image", src: house }],
            soldout: false
        },
        {
            price: 7500000,
            location: "Askari 11 - Sector B",
            type: "sale",
            measurement: 10,
            unit: "marla",
            rooms: 5,
            bath: 4,
            front: 30,
            back: 32,
            description: "Well-maintained house in a secured Army-managed society...",
            media: [{ type: "image", src: house }],
            soldout: true
        },
        {
            price: 2900000,
            location: "Model Town Extension - Block L",
            type: "sale",
            measurement: 5,
            unit: "marla",
            rooms: 3,
            bath: 2,
            front: 25,
            back: 29,
            description: "A budget-friendly property...",
            media: [{ type: "image", src: house }],
            soldout: false
        }
    ]);


    return (
        <section className="w-[100vw] overflow-hidden">
            <Hero title={hero.title} content={hero.content} bg={hero.bg} />
            <div className='my-[80px]'>
                <p className='text-[30px] md:text-[40px] text-center mb-[20px] font-semibold'>All Properties</p>
                <div className='w-[95%] lg:w-[80%]  mx-auto gap-[10px] flex flex-col md:flex-row'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className={`w-full md:w-[30%] xl:w-[25%] ${toggle ? "h-[450px] md:h-[450px]" : " h-[47px] md:h-[450px]"} duration-500 overflow-hidden bg-[#2c2c2c] sticky top-2 py-2 px-5 rounded-[10px]`}
                    >

                        <div className='flex justify-between'>
                            <p className='font-semibold text-[25px]'>Filter</p>
                            <BiAbacus className='text-[35px] ' onClick={() => setToggle(!toggle)} />
                        </div>
                        <hr className='mt-[5px]' />
                        <p className='mt-[10px] text-[17px] font-medium'>Purpose:</p>
                        <select className='filterinput !w-full mt-[5px]'>
                            <option value="marla" className='text-black'>For Sale</option>
                            <option value="kanal" className='text-black'>For Rent</option>
                        </select>
                        <p className='mt-[10px] text-[17px] font-medium'>Price Range:</p>
                        <div className='flex  gap-[5px]'>
                            <input type="number" className='filterinput ' placeholder='Min Price' />
                            <input type="number" className='filterinput' placeholder='Max Price' />
                        </div>

                        <p className='mt-[10px] text-[17px] font-medium'>Details:</p>
                        <div className='flex  gap-[5px]'>
                            <input type="number" className='filterinput ' placeholder='From' />
                            <input type="number" className='filterinput ' placeholder='To' />
                        </div>

                        <select className='filterinput !w-full mt-[5px]'>
                            <option value="marla" className='text-black'>Marlas</option>
                            <option value="kanal" className='text-black'>Kanals</option>
                        </select>

                        <div className='flex  gap-[5px] mt-[5px]'>
                            <input type="number" className='filterinput ' placeholder='Bed' />
                            <input type="number" className='filterinput ' placeholder='Bath' />
                        </div>
                        <select className='filterinput !w-full mt-[5px]'>
                            <option value="marla" className='text-black'>Shadbagh</option>
                            <option value="kanal" className='text-black'>China Scheme</option>
                        </select>
                        <button className='bg-[transparent] border-[#cccccc] border-2 text-[#ccccc] w-full mt-[13px] py-[5px] rounded-[3px]'>Find</button>
                    </motion.div>
                    <div className='w-full md:w-[70%] xl:w-[75%] '>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 ">
                            {data.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card
                                        image={item.media[0].src}
                                        price={item.price}
                                        location={item.location}
                                        measurement={item.measurement}
                                        unit={item.unit}
                                        bed={item.rooms}
                                        bath={item.bath}
                                        description={item.description}
                                        type={item.type}
                                        front={item.front}
                                        back={item.back}
                                        soldout={item.soldout}
                                    />

                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
}
