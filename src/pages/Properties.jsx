import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import Hero from '../components/Hero';
import { BiAbacus } from "react-icons/bi";
import { motion } from "framer-motion";
import axios from "axios";
import { baseURL } from '../../API/baseURL';

export default function Properties() {

    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        from: '',
        to: '',
        unit: '',
        type: '',
        rooms: '',
        bath: '',
        front: '',
        back: '',
    });

    const hero = {
        bg: "properties",
        title: "Explore Our Properties",
        content:
            "Discover a wide range of properties tailored to your lifestyle, needs, and investment goals. At Abdullah Real Estate, we offer hand-picked homes, apartments, commercial spaces, and land options to help you make confident and informed decisions. Whether you're buying, renting, or investing — your perfect property starts here.",
    };

    useEffect(() => {
        axios.get(`${baseURL}/properties`)
            .then(res => {
                const available = res.data.filter(
                    (property) => property.soldout == false && property.rentedOut == false
                );
                setData(available);
                setFilteredData(available); // ✅ show all by default
            })
            .catch(err => {
                console.error("Failed to fetch properties", err);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const applyFilters = () => {
    const filtered = data.filter((item) => {
        const price = Number(item.price) || 0;
        const measurement = Number(item.measurement) || 0;
        const rooms = Number(item.rooms) || 0;
        const bath = Number(item.bath) || 0;
        const front = Number(item.front) || 0;
        const back = Number(item.back) || 0;

        return (
            (filters.minPrice === '' || price >= Number(filters.minPrice)) &&
            (filters.maxPrice === '' || price <= Number(filters.maxPrice)) &&
            (filters.from === '' || measurement >= Number(filters.from)) &&
            (filters.to === '' || measurement <= Number(filters.to)) &&
            (filters.unit === '' || item.unit === filters.unit) &&
            (filters.type === '' || item.type === filters.type) &&
            (filters.rooms === '' || rooms === Number(filters.rooms)) &&
            (filters.bath === '' || bath === Number(filters.bath)) &&
            (filters.front === '' || front == Number(filters.front)) &&
            (filters.back === '' || back == Number(filters.back))
        );
    });

    setFilteredData(filtered);
};

    const clearFilters = () => {
        setFilters({
            minPrice: '',
            maxPrice: '',
            from: '',
            to: '',
            unit: '',
            type: '',
            rooms: '',
            bath: '',
            front: '',
            back: '',
        });
        setFilteredData(data);
    };

    return (
        <section className="w-[100vw] ">
            <Hero title={hero.title} content={hero.content} bg={hero.bg} />
            <div className='my-[80px]'>
                <p className='text-[30px] md:text-[40px] text-center mb-[20px] font-semibold'>All Properties</p>
                <div className='w-[95%] lg:w-[80%]  mx-auto gap-[10px] flex flex-col md:flex-row'>
                    {/* FILTER PANEL */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className={`sticky top-0 left-0 w-full md:w-[30%] xl:w-[25%] ${toggle ? "h-[470px]" : "h-[47px] md:h-[470px]"} duration-500  bg-[#2c2c2c]  py-2 px-5 rounded-[10px] overflow-hidden`}
                    >
                        <div className='flex justify-between'>
                            <p className='font-semibold text-[25px]'>Filter</p>
                            <BiAbacus className='text-[35px] ' onClick={() => setToggle(!toggle)} />
                        </div>
                        <hr className='mt-[5px]' />
                        <p className='mt-[10px] text-[17px] font-medium'>Purpose:</p>
                        <select name="type" value={filters.type} onChange={handleInputChange} className='filterinput !w-full mt-[5px]'>
                            <option value="">All </option>
                            <option value="sale" className='text-black'>For Sale</option>
                            <option value="rent" className='text-black'>For Rent</option>
                        </select>

                        <p className='mt-[10px] text-[17px] font-medium'>Price Range:</p>
                        <div className='flex gap-[5px]'>
                            <input type="number" name="minPrice" value={filters.minPrice} onChange={handleInputChange} className='filterinput' placeholder='Min Price' />
                            <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleInputChange} className='filterinput' placeholder='Max Price' />
                        </div>

                        <p className='mt-[10px] text-[17px] font-medium'>Measurement:</p>
                        <div className='flex gap-[5px]'>
                            <input type="number" name="from" value={filters.from} onChange={handleInputChange} className='filterinput' placeholder='From' />
                            <input type="number" name="to" value={filters.to} onChange={handleInputChange} className='filterinput' placeholder='To' />
                        </div>

                        <select name="unit" value={filters.unit} onChange={handleInputChange} className='filterinput !w-full mt-[5px]'>
                            <option value="">Unit</option>
                            <option value="marla" className='text-black'>Marla</option>
                            <option value="kanal" className='text-black'>Kanal</option>
                        </select>

                        <div className='flex gap-[5px] mt-[5px]'>
                            <input type="number" name="rooms" value={filters.rooms} onChange={handleInputChange} className='filterinput' placeholder='Bed' />
                            <input type="number" name="bath" value={filters.bath} onChange={handleInputChange} className='filterinput' placeholder='Bath' />
                        </div>

                        <div className='flex gap-[5px] mt-[5px]'>
                            <input type="number" name="front" value={filters.front} onChange={handleInputChange} className='filterinput' placeholder='Front' />
                            <input type="number" name="back" value={filters.back} onChange={handleInputChange} className='filterinput' placeholder='Back' />
                        </div>

                        <div className="flex gap-2 mt-4">
                            <button onClick={applyFilters} className='bg-[#ffffff11] border border-[#ccc] text-white w-full mt-[10px] py-[6px] rounded-[3px]'>Find</button>
                            <button onClick={clearFilters} className='bg-[#eeeeee22] border border-[#ccc] text-white w-full mt-[10px] py-[6px] rounded-[3px]'>Clear</button>
                        </div>
                    </motion.div>

                    {/* PROPERTIES DISPLAY */}
                    <div className='w-full md:w-[70%] xl:w-[75%] '>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
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
                                ))
                            ) : (
                                <p className='text-center text-gray-500 col-span-full'>No properties match your criteria.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
