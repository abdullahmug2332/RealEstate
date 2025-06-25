import React, { useState } from 'react';
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

export default function HomeCards() {
    const [data] = useState([
        {
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
        },
        {
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
        },
        {
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
        },
        {
            price: 3500000,
            location: "DHA Phase 6 - Sector A",
            type: "sale",
            measurement: 5,
            unit: "marla",
            rooms: 4,
            bath: 3,
            front: 26,
            back: 24,
            description: "This modern and stylish home offers comfort, convenience, and excellent investment value.",
            media: [
                { type: "image", src: img2 },
                { type: "image", src: img3 },
            ],
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
            back: 30,
            description: "Located in one of the most desirable neighborhoods, this spacious home combines premium construction with elegant design.",
            media: [
                { type: "image", src: img3 },
                { type: "image", src: img1 },
            ],
        },
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
