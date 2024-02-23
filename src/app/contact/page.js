import React from 'react';
import Navbar from '@/components/Navbar@';
import InputField from '@/components/InputField@';
import Button from '@/components/Button@';
import PageTitle from '@/components/PageTitle@';


function Contact() {
  return (
    <>
      <Navbar />
      <div className=''>
        <PageTitle title={"Contact Us"} />
        <form className='flex flex-col bg-lightGrey w-4/6 m-auto mt-4 py-10 rounded-lg' action="#">
          <InputField placeholderText="Email" />
          <InputField placeholderText="Full Name" />
          <textarea className='py-3 px-3 w-4/6 m-auto rounded-lg mt-4 h-40 resize-none' placeholder='Content'></textarea>
          <div className='w-4/6 mx-auto flex fle'>
            <Button />
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;
