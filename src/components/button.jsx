import React from 'react'

const BlueButton = ( { props }) => {
  return (

    <button className='text-2xl bg-[#607DB1] font-bold p-3 mt-1 rounded-xl border-2'>{props.buttonName}</button>

  );
}
export default BlueButton