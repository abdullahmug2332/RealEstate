import React, { useState } from 'react';
import house from "../assets/house.jpeg";
import Card from './Card';

export default function HomeCards() {
    const [data, setData] = useState([
        {
            image: house,
            price: "2000000",
            location: "Bahria Town - Jinnah Block",
            measurement: "4",
            unit: "Marla",
            bed: "3",
            bath: "2",
            description: "We will provide initial advice for free and the enquiry will be handled by one of our fully qualified Consultant or Director. We have built an enviable reputation for selling a varied portfolio of properties."
        },
        {
            image: house,
            price: "3500000",
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
        }
    ]);

    return (
        <>
            <p className='text-[30px] md:text-[40px] text-center mb-[30px] font-semibold'>Latest Properties</p>
            <div className="w-[95%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        image={item.image}
                        price={item.price}
                        location={item.location}
                        measurement={item.measurement}
                        unit={item.unit}
                        bed={item.bed}
                        bath={item.bath}
                        description={item.description}
                    />
                ))}
            </div>
            <div className=' my-[30px] flex justify-center'>
            <button className='btn2 duration-500 hover:scale-110 '>View Properties</button>
            </div>
        </>
    );
}
