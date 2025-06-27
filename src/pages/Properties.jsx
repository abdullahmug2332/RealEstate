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
import axios from "axios";


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
    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        axios.get("http://localhost:5000/properties")
            .then(res => {
                const availableProperties = res.data.filter(
                    (property) => property.status === "available"
                );
                setData(availableProperties);
            })
            .catch(err => {
                console.error("Failed to fetch properties", err);
            });
    }, []);



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
                            {data?.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card
                                        id={item.id}
                                        image={item.media[0]?.src}
                                        media={item.media}
                                        price={item.price}
                                        location={item.location}
                                        type={item.type}
                                        measurement={item.measurement}
                                        unit={item.unit}
                                        rooms={item.rooms}
                                        bath={item.bath}
                                        front={item.front}
                                        back={item.back}
                                        description={item.description}
                                        soldout={item.soldout}
                                        soldByUs={item.soldByUs}
                                        buyerName={item.buyerName}
                                        sellerName={item.sellerName}
                                        commission={item.commission}
                                        createdAt={item.createdAt}
                                        soldAt={item.soldAt}
                                        status={item.status}
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
