import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import { GrLocationPin } from "react-icons/gr";
import { MdAddCall } from "react-icons/md";
import { IoIosClock } from "react-icons/io";

export default function Contact() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const hero = {
        bg: "contact",
        title: "Get in Touch with Abdullah Real Estate",
        content:
            "Whether you're looking to buy, rent, or invest, Abdullah Real Estate is here to guide you every step of the way. Reach out to our team for expert assistance, property inquiries, or to schedule a consultation. Let’s make your real estate journey smooth and successful.",
    };
    const [formData, setFormData] = useState({
        name: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name,  message } = formData;

        const whatsappMessage = `Hello Abdullah Real Estate,%0A%0AYou have a new inquiry!%0A%0AName: ${name}%0AMessage: ${message}`;

        // Redirect to WhatsApp
        window.open(`https://wa.me/923258257153?text=${whatsappMessage}`, "_blank");
    };

    return (
        <section className="w-[100vw] overflow-hidden">
            <Hero title={hero.title} content={hero.content} bg={hero.bg} />
            <section  id="contact">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className=" text-sm font-semibold uppercase tracking-wide">
                            Contact Us
                        </p>
                        <h2 className="text-3xl sm:text-5xl font-bold ">
                            We're Here to Help
                        </h2>
                        <p className="mt-4 text-xl ">
                            Reach out for property details, consultations, or general inquiries.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Contact Info */}
                        <div>
                            <p className="text-lg  mb-8">
                                At Abdullah Real Estate, we believe in transparent communication and personalized service. Feel free to contact us for any questions regarding listings, property visits, or investment advice.
                            </p>

                            <ul className="space-y-6">
                                {/* Address */}
                                <li >
                                    <a href="https://www.google.com/maps/place/31%C2%B035'45.2%22N+74%C2%B020'29.0%22E/@31.5957718,74.3412226,20z/data=!4m4!3m3!8m2!3d31.5958889!4d74.3413889?entry=ttu&g_ep=EgoyMDI1MDYyMy4wIKXMDSoASAFQAw%3D%3D" target='_blank' className='flex items-center'>
                                        <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#2C2C2C]  text-white rounded">
                                            <GrLocationPin  className='text-[30px]'/>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium ">Office Address</h3>
                                            <p >Abdulllah Real Estate, Ayub Road, New Shadbagh </p>
                                            <p>Lahore, Pakistan</p>
                                        </div>
                                    </a>
                                </li>

                                {/* Contact */}
                                <li className="flex items-center ">
                                    <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#2C2C2C]  text-white rounded">
                                        <MdAddCall className='text-[30px]'/>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">Contact Details</h3>
                                        <a href="tel:+923258257153" target='_blank'>
                                            <p>Phone: +92 325 8257153</p>
                                        </a>
                                        <a href="mailto:abdullahrealestate91@gmail.com">
                                            <p >Email: abdullahrealestate91@gmail.com</p>
                                        </a>
                                    </div>
                                </li>

                                {/* Working Hours */}
                                <li className="flex items-center">
                                    <div className="flex items-center justify-center w-[50px] h-[50px]  bg-[#2C2C2C]  text-white rounded">
                                        <IoIosClock  className='text-[30px]'/>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium ">Business Hours</h3>
                                        <p >Mon - Sun: 02:00 PM - 11:00 PM</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Form */}
                        <div className="p-6   rounded-[3px] focus:outline-0 shadow-md bg-[#2C2C2C] relative top-[30px] ">
                            <h2 className="text-2xl font-bold mb-4 ">Send Us a Message</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-gray-400 rounded-[3px] focus:outline-0 px-3 py-2 bg-transparent text-white"
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="Write your message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full border border-gray-400 rounded-[3px] px-3 py-2 bg-transparent text-white focus:outline-0"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="w-full border border-gray-400 text-white py-3 rounded-[3px] bg-transparent focus:outline-0"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    );
}
