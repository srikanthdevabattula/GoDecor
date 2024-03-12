import React, { useState } from 'react'
import bc from '../../assets/bc.png'
import bookCon from '../../assets/bookCon.png'
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import BookingForm from './components/BookingForm';
import Categories from './components/Categories';
import ReplyForm from './components/ReplyForm';

  const BookConsultation = () => {
  
  
    const transition = { duration: 2, type: 'spring' };
    const { ref, inView } = useInView({
      triggerOnce: true, // Only trigger animation once
      threshold: 0.5, // Trigger animation when element is 50% in view
    });
    return (
  
         <div ref={ref} className='flex m-[2%] '>
            <motion.div   initial={{ y: '30%' }}
       // Start from below
      animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
      transition={transition}  className='space-y-[30px]'>
        <div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={{ backgroundImage: `url(${bc})` }}>
        </div>
  
        <div className='px-[15%] md:px-[10%] flex sm:flex-col gap-5 pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[30px]'>
          <div className="left w-[65%] sm:w-[100%]">
            <h1 className='text-[#292F36] text-center font-DMSerif text-[50px] lg:text-[40px] md:text-[27px] sm:text-[15px]'>Enter required details below for Booking Consultation</h1>
            <img src={bookCon} alt="" />
            <div className='space-y-[50px] md:space-y-[30px]'>
             <BookingForm/>
             <ReplyForm/>



            </div>

        </div>
        <div className="right w-[35%] sm:w-[100%]">
         <Categories/>
        </div>
    </div>
    
    </motion.div>
    </div>
  )
}

export default BookConsultation