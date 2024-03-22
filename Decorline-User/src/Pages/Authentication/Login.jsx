
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo.png';
import loginpage from '../../assets/login.png';
import google from '../../assets/google 2.png';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { initializeApp } from 'firebase/app'; 
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; 
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'; // Import GoogleOAuthProvider and GoogleLogin
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';


const Login = () => {
    const history = useNavigate();
    const [showOtp, setShowOtp] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [userLogin, setLogin] = useState(true);
    const [error, setError] = useState('');
    const token = Cookies.get('token');
    if (token) {
        return <Navigate to='/' />;
    }
    const handleGoogleLoginSuccess = async (credentialResponse) => {
      console.log(credentialResponse)
        const credentialResponseDecoded=jwtDecode(
            credentialResponse.credential
        );
        console.log(credentialResponseDecoded)
        try {
            const { sub: googleId, email } = credentialResponseDecoded; // Extract Google ID and email from the response object
            console.log('Google ID:', googleId);
            console.log('Email:', email);
        
          // Send Google credentials to backend for authentication
          const response = await axios.post('https://go-decor.vercel.app/api/v1/loginUser', {
            "role": 'vendor',
            "googleId":googleId,
            "email": email
          });

          Cookies.set('token', response.data.data.token, { expires: 7 }); // Token expires in 7 days

          history('/')
          // Handle authentication success
          // console.log('Authentication successful:', response.data.data.token);
        } catch (error) {
          // Handle authentication failure
          console.error('Authentication failed:', error);
        }
      };
    const handleError = () => {
      console.log('Login Failed');
    };
  
    const handleToggleOtp = () => {
      setShowOtp(!showOtp);
    };
  
    const handleLoginSubmit = async (e) => {
      e.preventDefault();
      // Add your login logic here
    };
  
    const handleRegistrationSubmit = async (e) => {
      e.preventDefault();
      // Add your registration logic here
    };
  
    return (
      <GoogleOAuthProvider clientId="262341592503-cnh121vfaqm6k2cja7vaifecoiiv73lg.apps.googleusercontent.com"> 
      <div className='p-[50px] sm:p-[10px]'>
        <div className='flex items-center space-x-2'>
          <img src={logo} alt="Logo" />
          <h1 className='text-[#292F36] font-DMSerif text-[40px] md:text-[30px] sm:text-[25px]'>GoDecor</h1>
        </div>
        <div className='flex'>
          <div className='w-[50%] md:hidden p-[3%] lg:p-[1%]'>
            <img src={loginpage} alt="Login Page" className='w-[100%] h-[500px] lg:h-[500px]' />
          </div>
          <div className='w-[50%] md:w-[100%] px-5 sm:px-2'>
            <h1 className='text-[35px] md:text-[30px] sm:text-[25px] mt-4 font-poppins text-center font-medium'>Welcome to GoDecor</h1>
            {userLogin ? (
              <div>
                <h3 className='text-[25px] md:text-[20px] sm:text-[15px] font-poppins font-semibold border-b-[1px] border-[#62B179] w-[180px] mt-4'>LOGIN/SIGNUP</h3>
                <div className='flex items-center justify-center my-[30px]'>
               
                 <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={handleError}
      />
    
              </div>
              <div className='text-[17px] md:text-[14px] sm:text-[12px] text-[#A3A3A3] font-medium font-Roboto text-center my-4'><h1>-OR-</h1></div>
              <div className='px-[5%] sm:px-[2%] '>
                <form onSubmit={handleLoginSubmit} className='space-y-4 text-[17px] md:text-[14px] sm:text-[12px]'>
                  <div className='flex items-center justify-center w-[100%] border-[#E5E5E5] border-[1px] rounded-[8px] p-3'>
                    <h3 className='w-[10%]'>+91</h3>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='w-[65%] outline-none' placeholder='Enter Phone Number' required />
                    <h3 className='w-[25%] text-[#4F90F0] font-poppins text-[14px]  md:text-[12px]'>Send OTP</h3>
                  </div>
                  <div className='flex items-center border-[1px] rounded-[8px] p-3 '>
                    <input type={showOtp ? 'text' : 'password'} value={otp} onChange={(e) => setOtp(e.target.value)} id='otp' name='otp' className='outline-none  border-0 w-[90%]' placeholder='Enter OTP' required />
                    {showOtp ? (
                      <IoEyeOffOutline onClick={handleToggleOtp} />
                    ) : (
                      <IoEyeOutline onClick={handleToggleOtp} />
                    )}
                  </div>
                  <p className='text-[#737373] font-poppins text-[14px] md:text-[12px] sm:text-[10px] px-2'>OTP has been sent to your mobile no</p>
                  <button type="submit" className='text-[white] w-[100%] bg-[#023020] font-poppins font-medium rounded-[8px] border-[1px] border-[#E5E5E5] py-3'>Continue</button>
                  {error && <p className="text-red-500">{error}</p>}
                </form>
              </div>
            </div>
          ) : (
            <div className='space-y-5'>  
                <h3 className='text-[25px] md:text-[20px] sm:text-[20px] font-poppins font-semibold border-b-[1px] border-[#62B179] w-[100px] md:w-[60px] mt-4'>Hello</h3>

                <div>
                    <h1 className='text-[#171717] text-[24px] md:text-[20px] sm:text-[15px] font-poppins font-semibold'>Welcome</h1>
                    <p className='font-poppins text-[20px] md:text-[16px] sm:text-[14px] text-[#171717]'>Enter your name to continue</p>
                </div>
                <div>
                    <form action="" onSubmit={handleRegistrationSubmit} className='space-y-4'>
                        <div>
                        <h3 className='text-[#737373] font-poppins text-[16px] md:text-[13px] sm:text-[11px]'>Name</h3>
                        <input type="text" name="" id=""  placeholder='Enter your name' className='border-[1px] border-[#E5E5E5] rounded-[8px] w-[100%] p-[16px] md:p-[10px]'/>
                        </div>
                        <div>
                        <button type="submit" className='text-[white] w-[100%] bg-[#023020] font-poppins font-medium rounded-[8px] border-[1px] border-[#E5E5E5] py-3'>Continue</button>
                 
                        </div>
                    </form>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </GoogleOAuthProvider> 
  );
};

export default Login;
