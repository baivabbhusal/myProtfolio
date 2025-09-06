import React from 'react'

const BlueButton = ( { props }) => {
  return (

    <button className='text-2xl bg-[#FDC52C] font-bold p-3 mt-3 rounded-xl'>{props.buttonName}</button>

  );
}
export default BlueButton