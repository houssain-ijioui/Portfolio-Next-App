import React from 'react';


const InputField = ({ placeholderText }) => {
  return (
    <input className='py-3 px-3 w-4/6 m-auto rounded-lg mt-4' type="text" placeholder={placeholderText} />
  )
}

export default InputField;
