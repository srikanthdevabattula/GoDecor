import React from 'react'
import { Link } from "react-router-dom";
import call from '../../../assets/home/call.png'
import getEst from '../../../assets/home/getEst.jpg'
const GetEstimate = () => {
  return (
    <div className='w-[100%] px-[10%] flex sm:flex-col mt-[50px] '>
       <div className='w-[50%] pr-[5%] space-y-5 sm:order-2 sm:w-[100%]'>
        <h1 className='text-[50px] lg:text-[40px] md:text-[30px] sm:text-[23px] text-[#292F36] font-DMSerif'>Discover Your Dream Space With Our Interior Design App</h1>
        <p className='font-Jost text-[22px] lg:text-[19px] md:text-[15px] sm:text-[12px]  text-[#4D5053]'>It is a long established fact that a reader will be distracted by the of readable content of a page 
when lookings at its layouts the points of using 
that it has a more-or-less normal.</p>

<div className='flex space-x-2 items-center'>
    <img src={call} alt="" className='lg:w-[50px] md:w-[40px]' />
    <div>
        <h5 className='font-Jost font-extrabold text-[24px] lg:text-[21px] md:text-[18px] sm:text-[13px] text-[#4D5053]'>012345678</h5>
        <p className='font-Jost text-[22px] lg:text-[20px] md:text-[16px] sm:text-[12px]'>Call Us Anytime</p>

    </div>
</div>
<Link to='/pricing'> <button className='bg-[#292F36] p-[26px_31px] md:p-[18px_25px] sm:p-[13px_13px] rounded-[18px] text-[white] font-Jost text-[18px] md:text-[15px] font-bold my-4 sm:my-2'>Get Free Estimate <span className='text-[#CDA274]'>🡪</span></button>
</Link> </div>
       <div className='w-[50%] sm:order-1 sm:w-[100%]'><img src={getEst} alt="a" className='rounded-bl-[100px] rounded-tr-[100px] h-[100%]'/></div>
    </div>
  )
}

export default GetEstimate