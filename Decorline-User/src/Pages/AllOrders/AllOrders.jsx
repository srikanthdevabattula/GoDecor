import React from 'react'
import order from '../../assets/checkout/orders.png'
import sprop from '../../assets/props/sprop.png';
import { IoIosArrowForward } from "react-icons/io";
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
const AllOrders = () => {
    const transition = { duration: 2, type: 'spring' };
	const { ref, inView } = useInView({
		triggerOnce: true, // Only trigger animation once
		threshold: 0.5, // Trigger animation when element is 50% in view
	});
  return (
    <div ref={ref} className=''>
    <motion.div   initial={{ y: '30%' }}
// Start from below
animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
transition={transition}  className='space-y-[80px]'>
<div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={{ backgroundImage: `url(${sprop})` }}>
<div className='bg-[white] flex flex-col items-center justify-center rounded-tl-[37px] rounded-tr-[37px] h-[100px] w-[300px] sm:w-[180px]'>
<h1 className='text-[#292F36] font-DMSerif text-[30px] sm:text-[20px]'>Orders</h1>
<p className='text-[17px] sm:text-[13px] text-[#4D5053]'>Home / Orders</p>
</div>
</div>
    <div className='border-[1px] rounded-[15px] p-2 m-5 font-poppins'>
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
</motion.div>
</div>
  )
}

export default AllOrders