import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TbRulerMeasure2, TbRulerMeasure } from "react-icons/tb";
import { MdHome, MdOutlineBedroomParent } from "react-icons/md";
import { FaBath, FaWhatsapp } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import HomeCards from "./HomeCards";
import axios from "axios";
import { baseURL } from "../../API/baseURL";
import Modal from "react-modal";
import { RxCross1 } from "react-icons/rx";

Modal.setAppElement("#root");

export default function Property() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await axios.get(`${baseURL}/properties/${id}`);
                setProperty(res.data);
                window.scrollTo({ top: 0, behavior: 'smooth' });

            } catch (error) {
                console.error("Error fetching property:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProperty();
    }, [id]);

    const openModal = (index) => {
        setStartIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    if (loading) return <div className="text-center my-10">Loading...</div>;
    if (!property) return <div className="text-center my-10">Property not found</div>;

    return (
        <section >
            {/* Mobile Swiper */}
            <div className="w-[95%] md:w-[80%] mx-auto mt-[40px] block md:hidden">
                <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
                    {property.media.map((item, index) => (
                        <SwiperSlide key={index} className="!flex !items-center !justify-center">
                            <div
                                onClick={() => openModal(index)}
                                className="w-full h-[500px] rounded-lg overflow-hidden cursor-pointer !flex !items-center !justify-center"
                            >
                                {item.type === "image" ? (
                                    <img src={`${baseURL}/images/${item.src}`} alt={`media-${index}`} className="h-full object-contain" />
                                ) : (
                                    <video controls autoPlay className="h-full object-contain">
                                        <source src={`${baseURL}/images/${item.src}`} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop Swiper */}
            <div className="w-[95%] md:w-[90%] xl:w-[80%] h-[70vh] mx-auto mt-[50px] hidden md:flex">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="w-full "
                >
                    {property.media.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                onClick={() => openModal(index)}
                                className="flex justify-center items-center h-[100%]  rounded-lg overflow-hidden shadow cursor-pointer"
                            >
                                {item.type === "image" ? (
                                    <img src={`${baseURL}/images/${item.src}`} alt={`media-${index}`} className="h-full w-full object-contain" />
                                ) : (
                                    <video controls autoPlay className="h-full object-contain">
                                        <source src={`${baseURL}/images/${item.src}`} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Modal with Swiper */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                className="outline-none w-full max-w-[100%] h-[90vh] relative mt-[100px] md:mt-[150px]"
            >
                <button onClick={closeModal} className="absolute top-[40px] md:top-4 right-5 text-white bg-[black]  z-50 text-[30px] border-[2px] border-white p-[5px] rounded-full font-bold over"><RxCross1 className="text-white  z-50 text-[20px] font-bold  " /></button>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    initialSlide={startIndex}
                    className="w-full h-full"
                >
                    {property.media.map((item, index) => (
                        <SwiperSlide key={index} className="!flex items-center justify-center bg-black">
                            {item.type === "image" ? (
                                <img
                                    src={`${baseURL}/images/${item.src}`}
                                    alt={`modal-media-${index}`}
                                    className="max-h-[80vh] md:max-h-[78vh] max-w-full mx-auto object-contain"
                                />
                            ) : (
                                <video controls autoPlay className="max-h-[80vh] md:max-h-[78vh]  mx-auto max-w-full object-contain">
                                    <source src={`${baseURL}/images/${item.src}`} type="video/mp4" />
                                </video>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Modal>

            {/* details in row with icons */}
            <div className="w-[95%] md:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-[10px]  my-[20px]" >
                <div className="flex items-center justify-center gap-[5px] border-x-2  py-[20px]">
                    <MdHome className="text-[30px]" />
                    <p className="pp">
                        For {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                    </p>
                </div>
                <div className="flex items-center justify-center gap-[5px] border-x-2 py-[20px]">
                    <TbRulerMeasure2 className="text-[30px]" />
                    <p className="pp">
                        {property?.measurement}{" "}
                        {property?.measurement > 1
                            ? property.unit === "marla"
                                ? "Marlas"
                                : "Kanals"
                            : property.unit === "marla"
                                ? "Marla"
                                : "Kanal"}
                    </p>
                </div>
                <div className="flex items-center justify-center gap-[5px] border-x-2 py-[20px]">
                    <MdOutlineBedroomParent className="text-[30px]" />
                    <p className="pp">
                        {property.rooms} {property.rooms <= 1 ? "Room" : "Rooms"}
                    </p>
                </div>
                <div className="flex items-center justify-center gap-[5px] border-x-2 py-[20px]">
                    <FaBath className="text-[30px]" />
                    <p className="pp">
                        {property.bath} {property.bath <= 1 ? "Bath" : "Baths"}
                    </p>
                </div>
                <div className="flex items-center justify-center gap-[5px] border-x-2 py-[20px]">
                    <TbRulerMeasure className="text-[30px]" />
                    <p className="pp">
                        {property.front} ft Front
                    </p>
                </div>
                <div className="flex items-center justify-center gap-[5px] py-[20px] border-x-2">
                    <TbRulerMeasure className="text-[30px]" />
                    <p className="pp">
                        {property.back} ft Back
                    </p>
                </div>
            </div>

            {/* description details  */}
            <div className="w-[95%] md:w-[80%] mx-auto my-[100px]" >

                <h3 className="text-2xl font-bold mb-2">
                    {property.measurement} {property.measurement > 1
                        ? property.unit === "marla"
                            ? "Marlas"
                            : "Kanals"
                        : property.unit === "marla"
                            ? "Marla"
                            : "Kanal"}{" "}
                    House for {property.type.charAt(0).toUpperCase() + property.type.slice(1)} in {property.location}
                </h3>

                <h3 className="text-2xl font-bold mb-2">
                    PKR : {property?.price}
                </h3>
                <p className="inline mr-[10px] font-semibold" > Posted At :</p>
                <p className="inline" >
                    {new Date(property.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}
                </p>

                <ul className="space-y-2">
                    <li><span className="font-semibold">Rooms:</span> {property.rooms} {property.rooms > 1 ? "Rooms" : "Room"} </li>
                    <li><span className="font-semibold">Baths:</span> {property.bath} {property.bath > 1 ? "Baths" : "Bath"}</li>
                    <li><span className="font-semibold">Front:</span> {property.front} ft</li>
                    <li><span className="font-semibold">Back:</span> {property.back} ft</li>
                    <li><span className="font-semibold">Location:</span> {property.location}</li>
                </ul>
                <h2 className="text-xl font-semibold mt-2">Description</h2>
                <p >{property.description}</p>

                <div className="flex gap-[5px] my-[40px] flex-wrap">
                    <Link to={"/properties"}><button className="btn2 hover:scale-[1.02] duration-500">View More </button></Link>
                    <a href="tel:+923258257153" target='_blank'>
                        <button className="btn2  rounded hover:scale-[1.02] duration-500">Call</button>
                    </a>
                    <a href="https://wa.me/923258257153" target='_blank'>
                        <button className=" btn2 !text-white px-4 py-1 !bg-[#0CC143] !border-0  rounded hover:scale-[1.02] duration-500"><FaWhatsapp className='inline' /> WhatsApp</button>
                    </a>
                </div>
            </div>
            <HomeCards />
        </section>
    );
}
