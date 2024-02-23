import Navbar from '@/components/Navbar@';
import PageTitle from '@/components/PageTitle@';
import React from 'react'

function Index() {
  return (
    <>
      <Navbar />
      <PageTitle title={"Tech Innovate Shaping the Future Through Innovation"} />
      <p className='w-3/4 mx-auto mt-20 font-medium text-darkBlue text-lg'>Welcome to TechInnovate, where groundbreaking ideas meet technological prowess to create a future defined by innovation. As a forward-thinking tech company, TechInnovate is dedicated to pushing the boundaries of what's possible in the ever-evolving landscape of technology. At TechInnovate, we pride ourselves on fostering a culture of creativity and curiosity. Our team of talented professionals is passionate about exploring new horizons, developing cutting-edge solutions, and transforming concepts into reality. Whether it's software development, hardware engineering, or pioneering research, we are committed to driving progress and shaping the digital landscape of tomorrow.</p>

    </>
  )
}

export default Index;