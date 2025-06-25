import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home2(props) {
    return (
        <div className="my-[50px]">
            <div className="flex flex-col items-center lg:items-start lg:flex-row w-[95%] md:w-[80%] mx-auto min-h-[600px]">

                {/* Left Side: Images */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-[40%] xl:w-[35%] h-full"
                >
                    <div className="flex justify-center items-center h-full relative p-[20px]">
                        <img
                            src={props.image1}
                            alt="Keys"
                            className="w-full object-cover rounded-[10px]"
                        />
                        <motion.img
                            src={props.image2}
                            alt="Rounded"
                            className="absolute w-[190px] bottom-0 right-0 border-[7px] border-[#101010] rounded-[13px]"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 1.2 }}
                            viewport={{ once: true }}
                        />
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-[60%] xl:w-[65%] lg:pl-[40px] pt-[40px] px-[20px] lg:pt-0 text-white"
                >
                    <p className="text-[25px] font-semibold mb-[20px] mt-[20px]">
                        {props.title}
                    </p>
                    <p
                        className="mb-[15px]"
                        dangerouslySetInnerHTML={{ __html: props.content }}
                    />
                    <div className="flex gap-[10px] mt-[10px]">
                        <Link to="/properties" className="btn2">
                            Properties
                        </Link>
                        <Link to="/contact" className="btn2">
                            Contact
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
