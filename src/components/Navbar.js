import Link from 'next/link';
import React from 'react'


function Navbar() {
  return (
    <nav className='bg-lightBlue py-3 px-3 flex justify-between text-white font-medium text-lg'>
        <Link href="/" ><h1 className=''>Tech Innovate</h1></Link>
        <div>
          <Link className='ml-3' href="/services">Services</Link>
          <Link className='ml-3' href="/portfolio">Portfolio</Link>
          <Link className='ml-3' href="/contact">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar;