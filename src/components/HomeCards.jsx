import React, { useState } from 'react';
import house from "../assets/house.jpeg";
import Card from './Card';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HomeCards() {
    const [data] = useState([
        {
            image: house,
            price: "2000000",
            location: "Bahria Town - Jinnah Block",
            measurement: "4",
            unit: "Marla",
            bed: "3",
            bath: "2",
            description: "We will provide initial advice for free and the enquiry will be handled by one of our fully qualified Consultant or Director."
        },
        {
            image: house,
            price: "3500000",
            location: "DHA Phase 6 - Sector A",
            measurement: "5",
            unit: "Marla",
            bed: "4",
            bath: "3",
            description: "This modern and stylish home offers comfort, convenience, and excellent investment value."
        },
        {
            image: house,
            price: "4800000",
            location: "Lake City - Sector M7",
            measurement: "10",
            unit: "Marla",
            bed: "5",
            bath: "4",
            description: "Located in one of the most desirable neighborhoods, this spacious home combines premium construction with elegant design."
        },
        {
            image: house,
            price: "4800000",
            location: "Lake City - Sector M7",
            measurement: "10",
            unit: "Marla",
            bed: "5",
            bath: "4",
            description: "Located in one of the most desirable neighborhoods, this spacious home combines premium construction with elegant design."
        },
        {
            image: house,
            price: "4800000",
            location: "Lake City - Sector M7",
            measurement: "10",
            unit: "Marla",
            bed: "5",
            bath: "4",
            description: "Located in one of the most desirable neighborhoods, this spacious home combines premium construction with elegant design."
        }
    ]);

    return (
        <>
            <p className='text-[30px] md:text-[40px] text-center mb-[30px] font-semibold'>Latest Properties</p>
            <div className="w-[95%] md:w-[80%] mx-auto p-4">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='my-[30px] flex justify-center'>
                <Link to={"/properties"} className='btn2 duration-500 hover:scale-110 '>View Properties</Link>
            </div>
        </>
    );
}
