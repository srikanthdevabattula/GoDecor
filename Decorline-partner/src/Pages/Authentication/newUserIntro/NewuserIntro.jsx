import React from 'react';
import { LuFacebook, LuTwitter, LuYoutube } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RightComponent from '../RightComponent';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import the useInView hook

const NewuserIntro = () => {
  const transition = { duration: 2, type: 'spring' };

  // Use the useInView hook to detect when the element is in view
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
            className='h-[80vh] border-black border-t-[5px] border-l-[5px] border-b-[5px] sm:border-[5px] flex flex-col items-center justify-between pt-[3%] pb-[4%]'>
            <motion.div
              initial={{ y: '50%' }} // Start from below
              animate={{ y: inView ? '0%' : '100%' }} // Animate to top when in view
              transition={transition}
              className='h-[70%] flex flex-col items-center justify-end pt-[3%] pb-[8%] space-y-[5%]'>
              <h1 className='font-poppins text-[35px] lg:text-[30px] md:text-[22px] font-bold text-center'>
                Elevate Your Interior <br /> Design Business with Us
              </h1>
              <Link to='/login'>
                <button className='bg-[#023020] hover:bg-[#241c1c] hover:text-[#eca7a7] text-[#ffffff] h-[56px] lg:h-[45px] w-[247px] lg:w-[220px] md:w-[190px] rounded-[8px] text-[22px] lg:text-[20px] md:text-[15px] font-Roboto font-bold flex justify-center items-center'>
                  Get Started
                </button>
              </Link>
            </motion.div>
            <div className='flex space-x-6'>
              <LuFacebook className='hover:text-[#c4ba54]' /> <FaInstagram className='hover:text-[#c4ba54]' />{' '}
              <LuTwitter className='hover:text-[#c4ba54]' /> <LuYoutube className='hover:text-[#c4ba54]' />
            </div>
          </div>
        </div>
        <RightComponent />
      </div>
    </div>
  );
};

export default NewuserIntro;
