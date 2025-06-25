import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import homehero from "../assets/hero.jpg";
import abouthero from "../assets/abouthero.png";
import { Link } from 'react-router-dom';

export default function Banner(props) {
  const [bg, setbg] = useState(homehero);

  useEffect(() => {
    if (props.bg === "home") {
      setbg(homehero);
    } else if (props.bg === "about") {
      setbg(abouthero);
    }
  }, [props.bg]);

  return (
    <div
      className='banner my-[40px]'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.343), rgba(0, 0, 0, 0.711)), url(${bg})`,
      }}
    >
      <div className='w-[95%] md:w-[80%] mx-auto p-5'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className='text-[40px] mb-[20px] font-semibold !text-white'>
            {props.title}
          </p>
          <p
            className='!text-white'
            dangerouslySetInnerHTML={{ __html: props.content }}
          ></p>

          <motion.div
            className='flex justify-start gap-[10px] my-[30px]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to={"/properties"} className='btn !text-white !border-white'>
              Properties
            </Link>
            <Link to={"/contact"} className='btn !text-white !border-white'>
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
