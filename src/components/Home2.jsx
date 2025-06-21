import React from 'react';
import img1 from '../assets/keys.jpg';
import img2 from '../assets/rounded-border.png';

export default function Home2() {
    return (
        <div className="my-[50px]">
            <div className="flex flex-col items-center lg:items-start lg:flex-row w-[95%] md:w-[80%] mx-auto min-h-[600px]">
                {/* Left Side: Images */}
                <div className="w-full lg:w-[40%] xl:w-[35%] h-full">
                    <div className="flex justify-center items-center h-full relative p-[20px]">
                        <img 
                            src={img1} 
                            alt="Keys" 
                            className="w-full object-cover rounded-[10px] " 
                        />
                        <img 
                            src={img2} 
                            alt="Rounded Border" 
                            className="absolute w-[150px] bottom-0 right-0 rounded-[5px] " 
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-[60%] xl:w-[65%] lg:pl-[40px] pt-[40px] lg:pt-0">
                    <p className="text-[25px] font-semibold mb-[20px]">
                        In the name of Allah, the Most Gracious, the Most Merciful.
                    </p>
                    <p className="mb-[15px]">
                        Finding the right place to live is more than just a transaction — it’s a life-changing decision. Whether you're buying your first home, renting a place that suits your lifestyle, or investing in property for long-term value, we are here to support you every step of the way.
                    </p>
                    <p className="mb-[15px]">
                        At the heart of our mission is your peace of mind. With deep market knowledge, a commitment to transparency, and personalized guidance, we simplify the complex world of real estate and help you make informed choices. We understand that a home is not just about walls and a roof — it’s where memories are made, families grow, and dreams are built.
                    </p>
                    <p className="mb-[15px]">
                        Our expert team is passionate about connecting you with properties that truly match your needs and aspirations. From understanding your goals to handing over the keys, we walk with you through every step of the journey — with honesty, integrity, and care. Let us help you discover the perfect place to call home — where comfort meets opportunity, and every brick tells a story of belonging and hope.
                    </p>
                    <div className="flex gap-[10px] mt-[10px]">
                        <button className="btn2">Properties</button>
                        <button className="btn2">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
