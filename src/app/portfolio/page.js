import React from 'react';
import Navbar from '@/components/Navbar@';
import SecondaryCard from '@/components/SecondaryCard@';
import PageTitle from '@/components/PageTitle@';


function Portfolio() {
  return (
    <>
      <Navbar />
      <div>
        <PageTitle title={"Our Portfolio"} />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 px-5'>
          <SecondaryCard title={"E-commerce Platform"} body={"Developing a robust e-commerce platform with a user-friendly interface, secure payment processing, and advanced product search capabilities for a seamless online shopping experience."} />
          <SecondaryCard title={"IoT Smart Home System"} body={"Building an Internet of Things (IoT) solution that integrates smart devices for home automation. Control lights, thermostats, and security systems through a centralized mobile app for enhanced convenience and security."} />
          <SecondaryCard title={"Health and Fitness App"} body={"Creating a health and fitness application with personalized workout plans, nutrition tracking, and progress analytics. Empowering users to achieve their fitness goals through a comprehensive and user-friendly platform."} />
          <SecondaryCard title={"Educational Gamification"} body={"Designing an educational platform that incorporates gamification elements to make learning enjoyable. Utilizing interactive games to teach complex concepts and promote engagement in various subjects."} />
          <SecondaryCard title={"Sustainable Living App"} body={"Developing an app to promote sustainable living practices, offering tips on eco-friendly habits, tracking carbon footprints, and connecting users with environmentally conscious products and services."} />
          <SecondaryCard title={"Virtual Reality Experience"} body={"Creating an immersive virtual reality experience, whether for educational purposes, virtual tours, or entertainment. Leveraging cutting-edge VR technology to transport users to different environments and scenarios."} />
        </div>
      </div>
    </>
  )
}

export default Portfolio;
