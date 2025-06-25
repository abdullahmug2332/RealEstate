import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Home2 from '../components/Home2'
import Whychooseus from '../components/Whychooseus'
import Banner from '../components/Banner'
import Card from '../components/Card'
import HomeCards from '../components/HomeCards'
import img1 from '../assets/keys.jpg';
import img2 from '../assets/rounded-border.png';
import Stats from '../components/Stats'

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const hero = {
    bg: "home",
    title: "Find the best properties  deals ever.",
    content: "Discover the perfect place to call home — whether you're buying, renting, or investing. We help you find your dream property with ease, confidence, and expert support every step of the way."
  }
  const home2 = {
    image1: img1,
    image2: img2,
    title: "In the name of Allah, the Most Gracious, the Most Merciful.",
    content: "Finding the right place to live is more than just a transaction — it’s a life-changing decision. Whether you're buying your first home, renting a place that suits your lifestyle, or investing in property for long-term value, we are here to support you every step of the way. <br> <br>  At the heart of our mission is your peace of mind. With deep market knowledge, a commitment to transparency, and personalized guidance, we simplify the complex world of real estate and help you make informed choices. We understand that a home is not just about walls and a roof — it’s where memories are made, families grow, and dreams are built. <br> <br> Our expert team is passionate about connecting you with properties that truly match your needs and aspirations. From understanding your goals to handing over the keys, we walk with you through every step of the journey — with honesty, integrity, and care. Let us help you discover the perfect place to call home — where comfort meets opportunity, and every brick tells a story of belonging and hope. "
  }
  const banner = {
    bg: "home",
    title: "Get in Touch with Us",
    content: "We’re here to help you every step of the way — whether you’re searching for your dream home, exploring rental options, or planning a smart property investment. Our friendly and knowledgeable team is always ready to answer your questions, provide expert advice, and guide you toward the best real estate solutions that match your needs and budget. <br> Have a specific property in mind? Want to schedule a visit? Or simply need more information about our services? Don’t hesitate to reach out. We believe in building strong relationships through clear communication and reliable support. No matter how big or small your query, we’re just a message, call, or visit away — ready to serve you with honesty, dedication, and care."
  }
  return (
    <section className='w-[100vw] overflow-hidden'>
      <Hero title={hero.title} content={hero.content} bg={hero.bg} />
      <Home2 image1={home2.image1} image2={home2.image2} title={home2.title} content={home2.content} />
      <Stats/>
      <Whychooseus />
      <Banner title={banner.title} content={banner.content} />
      <HomeCards />
    </section>
  )
}
