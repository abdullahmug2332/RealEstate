import React, { useEffect, useState } from 'react';
import img1 from "../assets/pro1.png";
import img2 from "../assets/pro2.png";
import img3 from "../assets/pro3.png";
import video from "../assets/video.mp4";
import Card from './Card';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';

export default function HomeCards() {

     const [properties, setProperties] = useState([]);

    useEffect(() => {
    const fetchProperties = async () => {
        try {
            const res = await axios.get("http://localhost:5000/properties");
            const available = res.data.filter(
                (property) => property.soldout == false && property.rentedOut == false
            );
            const sorted = available
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .slice(0, 5); // latest 5 available properties
            setProperties(sorted);
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    };

    fetchProperties();
}, []);

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
                    {properties?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                id={item.id}
                                image={item.media[0].src} // First image
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
