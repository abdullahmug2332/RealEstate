import React from 'react'
import Hero from '../components/Hero'
import Home2 from '../components/Home2'
import Whychooseus from '../components/Whychooseus'

export default function Home() {
  return (
    <section className='w-[100vw] overflow-hidden'>
      <Hero/>
      <Home2/>
      <Whychooseus/>
    </section>
  )
}
