import React from 'react'
import order from '../../../assets/checkout/orders.png'
import { IoIosArrowForward } from "react-icons/io";
const PastOrders = () => {
  return (
    <div className='border-[1px] rounded-[15px] p-2 font-poppins'>
        <div className='flex items-center justify-between p-2'>
           <div className='flex items-center space-x-4'>
             <img src={order} alt="" className='w-[93px] lg:w-[80px] rounded-[8px]'/>
            <div>
                <h1 className='text-[#121212] text-[12px] '>Jan Sflanaganvik sofa</h1>
                <p className='text-[#32C94A] text-[12px]'>Expected Delivery by 30-Dec-2023</p>
            </div>
            </div>
            <IoIosArrowForward />
        </div>


        <div className='flex items-center justify-between p-2'>
           <div className='flex items-center space-x-4'>
             <img src={order} alt="" className='w-[93px] lg:w-[80px] rounded-[8px]'/>
            <div>
                <h1 className='text-[#121212] text-[12px] '>Jan Sflanaganvik sofa</h1>
                <p className='text-[#32C94A] text-[12px]'>Expected Delivery by 30-Dec-2023</p>
            </div>
            </div>
            <IoIosArrowForward />
        </div>
    </div>
  )
}

export default PastOrders