import React, { useState } from 'react'
import RightComponent from '../../RightComponent'
import success from '../../../../assets/authentication/success.png'
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
const Success = () => {
    const transition = { duration: 2, type: 'spring' };
  
      const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once
        threshold: 0.5, // Trigger animation when element is 50% in view
      });
  return (
    <div className='h-[100vh]'>
      <div className='flex sm:flex-col items-center sm:items-start'>
        <div className='flex-1 sm:order-2 h-[100vh] p-[5%_0%_5%_5%] sm:p-1 sm:flex-2 w-[100%]'>
          <div
            ref={ref} // Add ref to the element you want to animate
            className='h-[80vh] border-black border-t-[5px] border-l-[5px] border-b-[5px] sm:border-[5px] flex flex-col items-center space-y-[3%]  pt-[10%] pb-[4%] overflow-y-auto scrollbar-hide'>
              <motion.div
               initial={{ y: '30%' }} // Start from below
               animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
               transition={transition} >
              <div className='flex flex-col items-center justify-center mt-[20%]  space-y-2 text-center'>
                <img src={success} alt="" className='md:w-[200px]' />
                <h4 className='text-[#222222] font-poppins font-medium text-[18px] lg:text-[16px] md:text-[14px]'>Your details are sent for 
verification</h4>
                <p className='font-poppins text-[14px] lg:text-[12px] md:text-[10px] text-[#222222]'>you’ll be notified once verification is complete</p>
              </div>
              </motion.div> </div>
        </div>
        <RightComponent />
      </div>
    </div>
  )
}

export default Success