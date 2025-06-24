import React, { useEffect } from 'react';
import Hero from '../components/Hero';

export default function Contact() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    const hero = {
        bg: "contact",
        title: "Get in Touch with Us",
        content:
            "Have questions or want to book a visit? Our dedicated team is ready to assist you with any inquiry, whether it’s about buying, renting, or investing. Fill out our contact form or reach out via phone or email — we're here to help you take the next step in your real estate journey.",
    };

    return (
        <section className="w-[100vw] overflow-hidden">
            <Hero title={hero.title} content={hero.content} bg={hero.bg} />
        </section>
    );
}
