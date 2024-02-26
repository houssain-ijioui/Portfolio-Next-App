"use client"
import React, { useState } from 'react';
import Navbar from '@/components/Navbar@';
import InputField from '@/components/InputField@';
import Button from '@/components/Button@';
import PageTitle from '@/components/PageTitle@';


function Contact() {
  const [ toEmail, setToEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ body, setBody ] = useState('');

  const sendMail = async (e) => {
    e.preventDefault()

    await fetch('/api/send_email', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        toEmail,
        subject,
        body
      })
    })
  } 



  return (
    <>
      <Navbar />
      <div className=''>
        <PageTitle title={"Contact Us"} />
        <form className='flex flex-col bg-lightGrey w-4/6 m-auto mt-4 py-10 rounded-lg' onSubmit={sendMail}>
          <InputField placeholderText="Email" type="email" value={toEmail} setValue={setToEmail} />
          <InputField placeholderText="Subject" type="text" value={subject} setValue={setSubject} />
          <textarea value={body} onChange={(e) => {
            setBody(e.target.value)
          }} required className='py-3 px-3 w-4/6 m-auto rounded-lg mt-4 h-40 resize-none' placeholder='Content'></textarea>
          <div className='w-4/6 mx-auto flex fle'>
            <Button />
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;
