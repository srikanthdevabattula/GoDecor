import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { acceptRequestSelector } from '../../../../redux/reducers/Consultation';
const Upcoming = () => {
    const consultationData=useSelector(acceptRequestSelector)
  return (
    <div className='space-y-3 w-[100%] px-[2%]'>
    {consultationData.map((data, index) => {
     return (data.status === 'Upcoming' &&
      <div key={index} className='border-[1px] rounded-[15px] w-[100%]   space-y-4 p-[3%]'>
        
        <div className='flex items-center justify-center space-x-5 sm:space-x-[5%]'>
            <img src={data.profilepic} alt="" className='sm:w-[40px]' />
            <div>
                <h1 className='text-[#1D1617] font-poppins font-semibold text-[14px] sm:text-[12px]'>{data.name}</h1>
                <p className='h-[24px] rounded-[4px] text-[#E59500] font-poppins text-[12px] sm:text-[8px] bg-[#fdf5e6] flex items-center justify-center px-1 w-[85px] '>Upcoming</p>
                <p className='text-[#7B6F72] font-poppins text-[12px] sm:text-[8px]'>Topic : {data.topic}</p>
                <p className='text-[12px] sm:text-[8px] font-poppins text-[#7B6F72]'>{data.dateTime}</p>
            </div>
            <div className='pl-8 sm:pl-4'><FaPhoneAlt/></div>
        </div>
        
        
        </div>);
    })}
  </div>
  )
}

export default Upcoming