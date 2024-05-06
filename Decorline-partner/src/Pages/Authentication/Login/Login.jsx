import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import axios from 'axios'; // Import axios for HTTP requests
import {useNavigate , Navigate } from 'react-router-dom'; // Import useHistory for navigation
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin from @react-oauth/google

const Login = () => {
    const transition = { duration: 2, type: 'spring' };
    const [showOtp, setShowOtp] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const token = Cookies.get('token');
    if (token) {
        return <Navigate to='/' />;
    }

  

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://go-decor.vercel.app/api/v1/sendOtp',
                {
                    phoneNumber,
                    role: 'vendor'
                }
            );

            if (response.status === 200) {
                console.log('OTP sent successfully!');
            } else {
                console.error('Failed to send OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://go-decor.vercel.app/api/v1/verifyOtp',
                {
                    phoneNumber,
                    role: 'vendor',
                    otp
                }
            );

            if (response.status === 200) {
                Cookies.set('token', response.data.data.token, { expires: 7 });
                history('/');
                console.log('OTP verified successfully!');
            } else {
                console.error('Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };

    const handleToggleOtp = () => {
        setShowOtp(!showOtp);
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <div className='h-[100vh]'>
            <div className='flex sm:flex-col items-center sm:items-start'>
                <div className='flex-1 sm:order-2 h-[100vh] p-[5%_0%_5%_5%] sm:p-1 sm:flex-2 w-[100%]'>
                    <div
                        ref={ref}
                        className='h-[80vh] border-black border-t-[5px] border-l-[5px] border-b-[5px] sm:border-[5px] flex flex-col items-center space-y-[3%]  pt-[10%] pb-[4%] overflow-y-auto scrollbar-hide'>
                        <motion.div
                            initial={{ y: '30%' }}
                            animate={{ y: inView ? '100%' : '0%' }}
                            transition={transition}>
                            <h1 className='text-[24px] lg:text-[22px] md:text-[19px] sm:text-[16px] font-poppins font-semibold text-[#171717] '>
                                Continue with your mobile no.
                            </h1>
                            <form
                                onSubmit={handleVerifyOtp}
                                className='space-y-5 flex flex-col items-center mb-6'>
                                <div className='space-y-6 flex flex-col items-center'>
                                    <div className='space-y-1'>
                                        <h4 className='text-[#737373] font-poppins text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px]'>
                                            Phone
                                        </h4>
                                        <div className='border-[1px] rounded-[10px] text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px] flex items-center'>
                                            <h4 className='text-[#737373]  w-[10%]'>+91 &nbsp;</h4>
                                            <input
                                                type='text'
                                                id='Phone'
                                                name='Phone'
                                                inputmode='numeric'
                                                pattern='[0-9]*'
                                                className='outline-none border-0 text-[13px] h-[50px] w-[70%] sm:h-[30px]'
                                                placeholder='9876543210'
                                                required
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                            />
                                            <button
                                                type='button'
                                                onClick={handleLoginSubmit}
                                                className=' text-[#4F90F0] font-poppins '>
                                                Send Otp
                                            </button>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h4 className='text-[#737373] font-poppins text-[16px]  lg:text-[15px] md:text-[14px] sm:text-[12px]'>
                                            OTP
                                        </h4>
                                        <div className='flex items-center border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px]'>
                                            <input
                                                type={showOtp ? 'text' : 'password'}
                                                id='otp'
                                                name='otp'
                                                className='outline-none  border-0 w-[90%] sm:h-[30px]'
                                                placeholder='Enter OTP'
                                                required
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                            />
                                            {showOtp ? (
                                                <IoEyeOffOutline onClick={handleToggleOtp} />
                                            ) : (
                                                <IoEyeOutline onClick={handleToggleOtp} />
                                            )}
                                        </div>
                                        <h3 className='font-poppins text-[14px]  lg:text-[13px] md:text-[12px] sm:text-[10px] text-[#737373]'>
                                            OTP has been sent to your mobile no
                                        </h3>
                                    </div>
                                </div>
                                {/* Google OAuth Integration */}
                              <button
                                    type='submit'
                                    className='bg-[#023020] hover:bg-[#342121] text-[white]  w-[400px] h-[57px] md:w-[300px] md:h-[45px] sm:w-[250px]  border-[1px] border-[#5A5A5A] rounded-[10px] text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-medium  '>
                                    Login
                                </button>
                            </form>
                        </motion.div>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
