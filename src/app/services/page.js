import React from 'react';
import Navbar from '@/components/Navbar@';
import Card from '@/components/Card@';
import PageTitle from '@/components/PageTitle@';


function Services() {
  return (
    <>
      <Navbar />
      <div>
        <PageTitle title={"Nos Services"} />
        <div className='flex flex-row mt-4'>
          <Card title={"Virtual Assistant Services"} body={"In today's fast-paced world, virtual assistant services have become invaluable for individuals and businesses alike. These services provide administrative support remotely, handling tasks such as email management, appointment scheduling, and data entry. Virtual assistants use their organizational and communication skills to streamline operations"} />
          <Card title={"Cloud-Based Data Storage"} body={"In today's fast-paced world, virtual assistant services have become invaluable for individuals and businesses alike. These services provide administrative support remotely, handling tasks such as email management, appointment scheduling, and data entry. Virtual assistants use their organizational and communication skills to streamline operations"} />
          <Card title={"Online Fitness Coaching"} body={"In today's fast-paced world, virtual assistant services have become invaluable for individuals and businesses alike. These services provide administrative support remotely, handling tasks such as email management, appointment scheduling, and data entry. Virtual assistants use their organizational and communication skills to streamline operations"} />
        </div>
      </div>
    </>
  )
}

export default Services;