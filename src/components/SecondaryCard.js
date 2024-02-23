import React from 'react'

function SecondaryCard({ title, body }) {
  return (
    <div class=" p-4 rounded-md shadow-md bg-secondaryBlue">
        <h2 class="text-xl font-semibold mb-2">{title}</h2>
        <p className='text-thirdBlue'>{body}</p>
    </div>
  )
}

export default SecondaryCard
