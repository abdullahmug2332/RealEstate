import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Stats() {
    const statsData = [
        { count: 4, label: 'Years of Experience' },
        { count: 32, label: 'Happy Clients' },
        { count: 43, label: 'Properties Sold' },
        { count: 57, label: 'Properties Rented' },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div ref={ref} className="p-4 md:p-6 text-white my-[90px] w-[95%] md:w-[80%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                Our Achievements
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
                {statsData.map((item, index) => (
                    <div key={index} className="px-6 py-9 text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold">
                            {inView ? <CountUp end={item.count} duration={3} /> : 0}+
                        </h2>
                        <p className="font-semibold mt-2">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
