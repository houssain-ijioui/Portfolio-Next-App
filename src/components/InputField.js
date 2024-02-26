import React from 'react';


const InputField = ({ placeholderText, type, setValue }) => {
  return (
    <input className='py-3 px-3 w-4/6 m-auto rounded-lg mt-4' type={type} placeholder={placeholderText} required onChange={(e) => {
      setValue(e.target.value)
    }} />
  )
}

export default InputField;
