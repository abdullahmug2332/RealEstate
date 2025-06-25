import React, { useEffect, useState } from 'react';
import Card from "../components/Card"
import Hero from '../components/Hero';
import house from "../assets/house.jpeg";
import { BiAbacus } from "react-icons/bi";
import { motion } from "framer-motion";

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
            image: house,
            price: "200000000",
            location: "Bahria Town - Jinnah Block",
            measurement: "4",
            unit: "Marla",
            bed: "3",
            bath: "2",
            description: "We will provide initial advice for free and the enquiry will be handled by one of our fully qualified Consultant or Director. We have built an enviable reputation for selling a varied portfolio of properties."
        },
        {
            image: house,
            price: "350000000",
            location: "DHA Phase 6 - Sector A",
            measurement: "5",
            unit: "Marla",
            bed: "4",
            bath: "3",
            description: "This modern and stylish home offers comfort, convenience, and excellent investment value. Guided by our expert consultants, we ensure a smooth and professional process from visit to final deal."
        },
        {
            image: house,
            price: "4800000",
            location: "Lake City - Sector M7",
            measurement: "10",
            unit: "Marla",
            bed: "5",
            bath: "4",
            description: "Located in one of the most desirable neighborhoods, this spacious home combines premium construction with elegant design. Let our experienced team help you explore all the possibilities this home offers."
        },
        {
            image: house,
            price: "2600000",
            location: "Wapda Town - Block N2",
            measurement: "6",
            unit: "Marla",
            bed: "3",
            bath: "2",
            description: "Affordable and beautifully constructed, this home is perfect for small families. Secure neighborhood and all amenities nearby."
        },
        {
            image: house,
            price: "5300000",
            location: "Johar Town - Phase 2",
            measurement: "7",
            unit: "Marla",
            bed: "4",
            bath: "3",
            description: "A premium residential property with modern fixtures and beautiful finishing, located in the heart of the city."
        },
        {
            image: house,
            price: "4200000",
            location: "Al Rehman Garden - Phase 4",
            measurement: "5",
            unit: "Marla",
            bed: "3",
            bath: "2",
            description: "A peaceful, gated community perfect for families looking for both comfort and security."
        },
        {
            image: house,
            price: "6200000",
            location: "Valencia Town - Block F1",
            measurement: "10",
            unit: "Marla",
            bed: "5",
            bath: "4",
            description: "This corner plot home offers spacious rooms, open terrace, and an amazing environment. Ideal for big families."
        },
        {
            image: house,
            price: "3100000",
            location: "Gulshan-e-Ravi - Block H",
            measurement: "5",
            unit: "Marla",
            bed: "3",
            bath: "2",
            description: "Great investment opportunity. Centrally located with all basic utilities and transport access."
        },
        {
            image: house,
            price: "8900000",
            location: "DHA Phase 8 - Ex Air Avenue",
            measurement: "12",
            unit: "Marla",
            bed: "6",
            bath: "5",
            description: "Luxury house with imported fittings, wide car porch, and servant quarter. Ideal for high-end living."
        },
        {
            image: house,
            price: "3800000",
            location: "Pak Arab Housing Scheme",
            measurement: "6",
            unit: "Marla",
            bed: "3",
            bath: "2",
            description: "Budget-friendly and ready to move in house with all necessary facilities in a well-populated area."
        },
        {
            image: house,
            price: "7500000",
            location: "Askari 11 - Sector B",
            measurement: "10",
            unit: "Marla",
            bed: "5",
            bath: "4",
            description: "Well-maintained house in a secured Army-managed society, with parks, schools and shopping nearby."
        },
        {
            image: house,
            price: "2900000",
            location: "Model Town Extension - Block L",
            measurement: "5",
            unit: "Marla",
            bed: "3",
            bath: "2",
            description: "A budget-friendly property with easy access to markets, schools, and public transport. Ideal for small families."
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
                        className={`w-full md:w-[30%] xl:w-[25%] ${toggle ? "h-[410px] md:h-[410px]" : " h-[47px] md:h-[410px]"} duration-500 overflow-hidden bg-[#2c2c2c] sticky top-2 py-2 px-5 rounded-[10px]`}
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
                        <button className='bg-[transparent] border-[#cccccc] border-2 text-[#ccccc] w-full mt-[13px] py-[5px] rounded-[3px]'>Find</button>
                </motion.div>
                <div className='w-full md:w-[70%] xl:w-[75%] '>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    image={item.image}
                                    price={item.price}
                                    location={item.location}
                                    measurement={item.measurement}
                                    unit={item.unit}
                                    bed={item.bed}
                                    bath={item.bath}
                                    description={item.description}
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
