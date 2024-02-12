import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { acceptRequestSelector } from '../../../../redux/reducers/Consultation';
const Accepted = () => {
    const consultationData=useSelector(acceptRequestSelector)
  return (
    <div className='space-y-3 w-[100%] px-[2%]'>
    {consultationData.map((data, index) => {
     return (data.status === 'Accepted' &&
      <div key={index} className='border-[1px] rounded-[15px] w-[100%]   space-y-4 p-[3%]'>
        
        <div className='flex items-center justify-center space-x-5 sm:space-x-2'>
            <img src={data.profilepic} alt="" className='sm:w-[40px]' />
            <div>
                <h1 className='text-[#1D1617] font-poppins font-semibold text-[14px] sm:text-[12px]'>{data.name}</h1>
                <p className='h-[24px] rounded-[4px] text-[#AFB218] font-poppins text-[12px] sm:text-[8px] bg-[#f7f8e8] flex items-center px-1 '>Waiting for user to schedule</p>
                <p className='text-[#7B6F72] font-poppins text-[12px] sm:text-[8px]'>Topic : {data.topic}</p>
            </div>
            <div><FaPhoneAlt/></div>
        </div>
        
        
        </div>);
    })}
  </div>
  )
}

export default Accepted