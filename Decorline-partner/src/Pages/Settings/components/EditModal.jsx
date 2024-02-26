import React from 'react'
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { MdEdit } from "react-icons/md";
const EditModal = () => {
    const transition = { duration: 2, type: 'spring' };
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once
        threshold: 0.5, // Trigger animation when element is 50% in view
    });
  return (
    <div className='font-poppins'>
        <div
                        ref={ref} // Add ref to the element you want to animate
                        className='  flex flex-col items-center space-y-[3%]  pt-[5%] pb-[4%] overflow-y-auto scrollbar-hide'>
                  
                  <div className='flex'>    <img src="" alt="pic" />
            <MdEdit/>
            </div> 
            <form action="" >
                           
                                <motion.div
                                    initial={{ y: '30%' }} // Start from below
                                    animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
                                    transition={transition}
                                    className='space-y-3 mt-[1%]'>
                                
                               

                           
                             
                                    <div className='space-y-5 flex flex-col items-center mb-6'>
                                        <div>
                                            <div className='space-y-6  '>
                                                <div className='space-y-3'>
                                                <div className='border-[1px] border-[#BEBEBE] rounded-[8px] pb-3 my-3 '>
                                                  <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[40px] h-[9px] text-[10px] left-[10px] px-1'>Name</h3>
                                                     <input
                                                      type="text"
                                                       name="name"
                                                       value='Jone done'
                                                        id=""
                                                         className='h-[20px] text-[12px] w-[100%] border-none'
                                                           />
                                                    </div>


                                               


                                                    <div className='border-[1px] border-[#BEBEBE] rounded-[8px] pb-3 my-3 '>
                                                  <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[80px] h-[9px] text-[10px] left-[10px] px-1'>Business Name</h3>
                                                     <input
                                                      type="text"
               
                                                       value='ABC Interiors'
                                                       name="name"
                                                        id=""
                                                         className='h-[20px] text-[12px] w-[100%] border-none'
                                                           />
                                                    </div>

                                                    <h1 className='text-[16px]'>Address</h1>

                                                    <div className='border-[1px] border-[#BEBEBE] rounded-[8px] pb-3 my-3 '>
                                                  <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[80px] h-[9px] text-[10px] left-[10px] px-1'>Address Line 1</h3>
                                                     <input
                                                      type="text"
                                                        value='111, ABC Apartments'
               
                                                       name="name"
                                                        id=""
                                                         className='h-[20px] text-[12px] w-[100%] border-none'
                                                           />
                                                    </div>


                                                    <div className='border-[1px] border-[#BEBEBE] rounded-[8px] pb-3 my-3 '>
                                                  <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[80px] h-[9px] text-[10px] left-[10px] px-1'>Address Line 2</h3>
                                                     <input
                                                      type="text"
               
                                                        value='XYZ Road'
                                                       name="name"
                                                        id=""
                                                         className='h-[20px] text-[12px] w-[100%] border-none'
                                                           />
                                                    </div>

                                                    <div className='flex w-[100%] space-x-3'>
                                                    <div className='border-[1px] border-[#BEBEBE] rounded-[8px] pb-3 my-3  w-[50%]'>
                                                  <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[30px] h-[9px] text-[10px] left-[10px] px-1'>City</h3>
                                                     <input
                                                      type="text"
                                                    value='Delhi'

                                                       name="name"
                                                        id="New Delhi"
                                                         className='h-[20px] text-[12px] w-[100%] border-none'
                                                           />
                                                    </div>

                                                    <div className='border-[1px] border-[#BEBEBE] rounded-[8px] pb-3 my-3 w-[50%]'>
                                                  <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[40px] h-[9px] text-[10px] left-[10px] px-1'>State</h3>
                                                     <input
                                                      type="text"
                                                        value='Delhi'
               
                                                       name="name"
                                                        id=""
                                                         className='h-[20px] text-[12px] w-[100%] border-none'
                                                           />
                                                    </div>
                                                    </div>

                                                    <div className='border-[1px] border-[#BEBEBE] rounded-[8px] pb-3 my-3 '>
                                                  <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[60px] h-[9px] text-[10px] left-[10px] px-1'>Pin Code</h3>
                                                     <input
                                                      type="text"
               
                                                        value='000000'
                                                       name="name"
                                                        id=""
                                                         className='h-[20px] text-[12px] w-[100%] border-none'
                                                           />
                                                    </div>
                                                 
                                                </div>

                                                <div className='check-boxes mt-5 '>
                                                    <h1 className='font-poppins font-light text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[#1C1C1C]'>Select services you offer</h1>
                                                    <div className='px-2'>
                                                        <div className='1 flex border-b-[1px] py-2'>
                                                            <div className='w-[90%]'>
                                                                <h1 className='font-poppins text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[#1D1B20]'>Interior Designing</h1>
                                                                <p className='font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[10px] text-[#49454F]'>Craft stunning interiors, unlocking boundless creative potential.</p>
                                                            </div>
                                                            <div className='w-[10%] flex items-center justify-center'>
                                                                <input type="checkbox" name="" id="" checked />
                                                            </div>
                                                        </div>
                                                        <div className='2 flex border-b-[1px] py-2'>
                                                            <div className='w-[90%]'>
                                                                <h1 className='font-poppins text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[#1D1B20]'>Interior Props</h1>
                                                                <p className='font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[10px] text-[#49454F]'>Sell your exquisite interior props, amplifying spaces effortlessly with us.</p>
                                                            </div>
                                                            <div className='w-[10%] flex items-center justify-center'>
                                                                <input type="checkbox" name="" id="" checked />
                                                            </div>
                                                        </div>
                                                        <div className='3 flex border-b-[1px] py-2'>
                                                            <div className='w-[90%]'>
                                                                <h1 className='font-poppins text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[#1D1B20]'>Consultations</h1>
                                                                <p className='font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[10px] text-[#49454F]'>Empower your expertise, connect with clients.</p>
                                                            </div>
                                                            <div className='w-[10%] flex items-center justify-center'>
                                                                <input type="checkbox" name="" id="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                           </div>
                                        </div>
                                    </div>
                                    <button className='w-[100%] bg-[#023020] text-center text-[13px] font-semibold text-[white] rounded-[8px] h-[40px]'>Save</button>
                                </motion.div>

                          
                        </form>
        </div>


    </div>
  )
}

export default EditModal