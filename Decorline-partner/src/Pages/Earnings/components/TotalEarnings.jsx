import React from 'react'
import consultation from '../../../assets/earnings/consultation.png'
import design from '../../../assets/earnings/Designs.png'
import products from '../../../assets/earnings/products.png'
const TotalEarnings = () => {
  return (
    <div className='p-3 font-poppins space-y-3'>
        <h3 className='text-right text-[#444444] text-[17px] sm:text-[12px]'>This Month</h3>
        <div className='bg-gradient-to-r from-[#023020] to-[#3D5B51] text-[#E0E0E0] h-[123px] rounded-[15px] space-y-[8px] p-[25px_35px] sm:p-[20px]'>
            <h2 className='text-[13px] font-medium'>Total Earnings</h2>
            <h1 className='text-[#E6E6E6] text-[30px] sm:text-[24px]'>₹ 647388</h1>
        </div>

        <div className=' flex items-center space-x-5 sm:space-x-3 border-[#87CFB6] border-[1px] h-[123px] rounded-[15px] p-[20px_30px] sm:p-[13px_16px]'>
            <img src={consultation} alt="" className='sm:w-[50px]'/>
            <div className='space-y-3'>
                <h3 className='text-[#023020] font-medium text-[14px]'>Consultation</h3>
                <p className='text-[#7B6F72] text-[13px]'>₹ 60000</p>
            </div>
        </div>
        <div className=' flex items-center space-x-5 sm:space-x-3 border-[#87CFB6] border-[1px] h-[123px] rounded-[15px] p-[20px_30px] sm:p-[13px_16px]'>
            <img src={design} alt="" className='sm:w-[50px]'/>
            <div className='space-y-3'>
                <h3 className='text-[#023020] font-medium text-[14px]'>Design Projects</h3>
                <p className='text-[#7B6F72] text-[13px]'>₹ 60000</p>
            </div>
        </div>
        <div className=' flex items-center space-x-5 sm:space-x-3 border-[#87CFB6] border-[1px] h-[123px] rounded-[15px] p-[20px_30px] sm:p-[13px_16px]'>
            <img src={products} alt="" className='sm:w-[50px]'/>
            <div className='space-y-3'>
                <h3 className='text-[#023020] font-medium text-[14px]'>Products</h3>
                <p className='text-[#7B6F72] text-[13px]'>₹ 60000</p>
            </div>
        </div>
    </div>
  )
}

export default TotalEarnings