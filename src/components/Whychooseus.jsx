import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Whychooseus() {
  const [data, setdata] = useState([
    {
      title: 'Complete Honesty in Deals',
      description:
        'We believe in transparent dealings — the property we show you is exactly what we offer, with no last-minute changes or hidden surprises.',
    },
    {
      title: 'Direct Deals Between Buyer and Seller',
      description:
        'We connect both parties directly to ensure clear communication, build trust, and avoid misunderstandings. No middleman confusion — just smooth, honest transactions.',
    },
    {
      title: 'No Extra Commission Charged',
      description:
        'We keep our charges fair and clear. There are no unexpected commissions or hidden fees — what we quote is what you pay.',
    },
    {
      title: 'Truthful Property Information',
      description:
        'We never lie about land size, location, or specifications. Our team provides accurate and honest details, so you can make decisions with confidence.',
    },
  ]);

  return (
    <div className="w-[95%] md:w-[80%] mx-auto mb-[40px]">
      <div className="text-white">

        {/* Heading */}
        <motion.p
          className="text-[30px] md:text-[40px] text-center mb-[60px] font-semibold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.p>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-[40px]">
          {data.map((step, index) => (
            <motion.div
              key={index}
              className="space-y-4 flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold">{index + 1}</div>
              <h3 className="text-lg font-semibold text-center md:text-start">
                {step.title}
              </h3>
              <p className="text-sm relative bottom-2 text-center md:text-start">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          className="flex justify-center my-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/properties" className="btn2">
            View Properties
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
