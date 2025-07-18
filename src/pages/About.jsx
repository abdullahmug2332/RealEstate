import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Home2 from '../components/Home2';
import Banner from '../components/Banner';
import HomeCards from '../components/HomeCards'
import img1 from '../assets/guide.jpg';
import img2 from '../assets/handshake.jpg';
import heroimg from "../assets/hero.jpg"

export default function About() {
  const hero = {
    bg: "about",
    title: "Learn More About Us",
    content:
      "At Abdullah Real Estate, we don’t just deal in property — we build trust, foster relationships, and help you move toward a better future. Discover who we are, what drives us, and how we strive to bring value to every client interaction.",
  };

  const home2 = {
    image1: img1,
    image2: img2,
    title: "Our Story and Commitment",
    content:
      "Founded on the principles of honesty, dedication, and deep market insight, Abdullah Real Estate has grown to become a trusted name in the real estate industry. Over the years, we’ve helped countless individuals and families make confident, informed decisions about where to live, invest, and grow.<br><br>We believe that buying or selling a property is more than just a transaction — it’s a life milestone that deserves time, care, and expert guidance. That’s why we prioritize truly understanding your needs, communicating with transparency, and delivering personalized solutions that bring lasting value and peace of mind.<br><br>Our team is passionate about real estate, but more importantly, we’re passionate about people. Whether you’re a first-time homebuyer, a seasoned investor looking to expand your portfolio, or someone simply exploring your options, we’re here to offer expert advice, honest recommendations, and unwavering support every step of the way. Your journey is our priority — and we’re committed to making it smooth, successful, and meaningful.",
  };

  const banner = {
    bg: "about",
    title: "Let’s Grow Together",
    content:
      "We’re more than just real estate agents — we’re trusted partners in your journey toward a better future. At Abdullah Real Estate, our mission goes beyond closing deals; we’re dedicated to building meaningful relationships and delivering long-term value. Every client interaction is an opportunity for us to understand your unique goals, provide tailored solutions, and support you at every step of the process — whether you're exploring your first home, expanding your investment portfolio, or simply seeking honest guidance in a complex market.<br><br>Let’s connect and explore how our experience, integrity, and commitment to excellence can help you achieve your property goals with confidence. We welcome your questions, ideas, and feedback, and we’re always open to collaboration. Your success is our success — and we’re always listening, always learning, and always improving to better serve you and the community we proudly represent.",
  };

  return (
    <section className="w-[100vw] overflow-hidden" >
      <Hero title={hero.title} content={hero.content} bg={hero.bg} />
      <Home2 image1={home2.image1} image2={home2.image2} title={home2.title} content={home2.content} />
      <Banner title={banner.title} content={banner.content} bg={banner.bg} />
      <HomeCards/>
    </section>
  );
}
