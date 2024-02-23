import React from 'react'

const Card = ({ title, body }) => {
  return (
    <div className='bg-secondaryBlue py-10 px-12 rounded-lg m-5'>
      <h1 className='text-darkBlue text-2xl font-bold mb-4'>{title}</h1>
      <p className='text-thirdBlue'>{body}</p>
    </div>
  )
}

export default Card;
