import React, { useState } from 'react'
import RightComponent from '../RightComponent'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import google from '../../../assets/authentication/google.png'
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
const Login = () => {
    const transition = { duration: 2, type: 'spring' };
    const [showOtp, setOTP] = useState(false);
    const handleToggleOtp = () => {
        setOTP(!showOtp);
      };
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
               transition={transition}>
                <h1 className='text-[24px] lg:text-[22px] md:text-[19px] sm:text-[16px] font-poppins font-semibold text-[#171717] '>Continue with your mobile no.</h1>
             <form  className='space-y-5 flex flex-col items-center mb-6'>
               
                <div className='space-y-6 flex flex-col items-center'>
                  <div className='space-y-1'>
                     <h4 className='text-[#737373] font-poppins text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px]'>Phone</h4>
                  <div className='border-[1px] rounded-[10px] text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px] flex items-center'>
                   <h4 className='text-[#737373]  w-[10%]'>+91 &nbsp;</h4>
                   
                   <input
                       type='text'
                       id='Phone'
                       name='Phone'
                       inputmode='numeric'
                        pattern='[0-9]*'
                         className='outline-none border-0 text-[13px] h-[50px] w-[50%] sm:h-[30px]'
                         placeholder='9876543210'
                         required
                         
                          />
                          
                          <button className=' text-[#4F90F0] font-poppins '>Resend OTP(30s)</button>

                    
                  </div>
                  </div> 
                  <div className='space-y-1'>
                     <h4 className='text-[#737373] font-poppins text-[16px]  lg:text-[15px] md:text-[14px] sm:text-[12px]'>OTP</h4>
                  <div className='flex items-center border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px]'>
                  <input
      type={showOtp ? 'text' : 'password'}
      id='otp'
      name='otp'
      className='outline-none  border-0 w-[90%] sm:h-[30px]'
      placeholder='Enter OTP'
      required
    />
    {showOtp ? (
      <IoEyeOffOutline onClick={handleToggleOtp} />
    ) : (
      <IoEyeOutline onClick={handleToggleOtp} />
    )}
  </div>
 <h3 className='font-poppins text-[14px]  lg:text-[13px] md:text-[12px] sm:text-[10px] text-[#737373]'> OTP has been sent to your mobile no</h3>
</div>
                  
                </div>

              <div className='flex justify-center items-center space-x-2 '>
                  <hr className='border-[1px] w-[100px]' /> <h5 className='sm:text-[10px] font-poppins font-medium text-[#171717]'>Or</h5><hr className='border-[1px] w-[100px]' />
                </div>
                <button  className=' w-[400px] h-[57px] md:w-[300px] md:h-[45px] sm:w-[250px]  border-[1px] border-[#5A5A5A] rounded-[10px] text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] flex items-center justify-center text-[#737373] font-poppins font-semibold'><img src={google} alt="" className='mr-2' />Continue with Google</button>
                <button type='submit' className='bg-[#023020] hover:bg-[#342121] text-[white]  w-[400px] h-[57px] md:w-[300px] md:h-[45px] sm:w-[250px]  border-[1px] border-[#5A5A5A] rounded-[10px] text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-medium  '>Login</button>
              </form>
           
              </motion.div> </div>
        </div>
        <RightComponent />
      </div>
    </div>
  )
}

export default Login