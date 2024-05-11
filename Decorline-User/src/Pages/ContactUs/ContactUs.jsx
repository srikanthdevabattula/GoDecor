import React, { useState } from 'react';
import contact from '../../assets/ContactUs/contact.jpg';
import call from '../../assets/ContactUs/call.png';
import web from '../../assets/ContactUs/web.png';
import mail from '../../assets/ContactUs/mail.png';
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
import map from '../../assets/ContactUs/Map.png';
import Cookies from 'js-cookie';
const ContactUs = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${contact})`,
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = Cookies.get('token');
        try {
            const response = await fetch('https://go-decor.vercel.app/api/v1/contact/addNewContact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                 setFormData({
                name: '',
                email: '',
                phoneNumber: '',
                subject: '',
                message: ''
            });
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while submitting the form');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className=' space-y-4'>
            <div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={backgroundImageStyle}>
                <div className='bg-[white] flex flex-col items-center justify-center rounded-tl-[37px] rounded-tr-[37px] h-[100px] w-[300px] sm:w-[180px]'>
                    <h1 className='text-[#292F36] font-DMSerif text-[30px] sm:text-[20px]'>Contact Us</h1>
                    <p className='text-[17px] sm:text-[13px] text-[#4D5053]'>Home / Contact</p>
                </div>
            </div>

            <div>
                <h1 className='text-[#292F36] font-DMSerif text-[40px] lg:text-[35px] md:text-[25px] my-3 sm:text-[15px] text-center px-[25%] md:px-[15%]'>We love meeting new people and helping them.</h1>

                <div className='flex justify-center sm:flex-col space-x-[50px] sm:space-x-[0px] px-[10%] sm:px-[5%]'>
                    <div className='bg-[#F4F0EC] rounded-[50px] sm:rounded-[20px] text-[#4D5053] font-Jost text-[20px] lg:text-[18px] md:text-[15px] sm:text-[8px] p-[50px_30px] sm:p-[20px_10px] space-y-6'>
                        <div className='flex items-center space-x-3 sm:space-x-2'>
                            <img src={mail} alt="" className='md:w-[25px] sm:w-[18px]' />
                            <p>info@yourdomain.com</p>
                        </div>

                        <div className='flex items-center space-x-3 sm:space-x-2'>
                            <img src={call} alt="" className='md:w-[25px] sm:w-[18px]' />
                            <p>+1 (378) 400-1234</p>
                        </div>
                        <div className='flex items-center space-x-3 sm:space-x-2'>
                            <img src={web} alt="" className='md:w-[25px] sm:w-[18px]' />
                            <p>www.yourdomain.com</p>
                        </div>
                        <div className='flex items-center gap-5 md:gap-3  sm:text-[8px] mt-5'>
                            <Link><FaFacebookF /></Link>
                            <Link><FaTwitter /></Link>
                            <Link><GrLinkedinOption /></Link>
                            <Link><IoLogoInstagram /></Link>
                        </div>
                    </div>
                    <div className='font-Jost py-6'>
                        <form onSubmit={handleSubmit} className='space-y-[30px] md:space-y-[10px] text-[14px] sm:text-[11px]'>
                            <div className='flex  gap-6 md:gap-3'>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className='border-b-[1px] border-[black] py-2 outline-none placeholder:text-[black] w-[300px] lg:w-[200px] md:w-[150px] sm:w-[50%]' placeholder='Name' />
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className='border-b-[1px] border-[black] py-2 outline-none placeholder:text-[black] w-[300px] lg:w-[200px] md:w-[150px] sm:w-[50%]' placeholder='Email' />
                            </div>
                            <div className='flex  gap-6 md:gap-3'>
                                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder='Subject' className='border-b-[1px] border-[black] py-2 outline-none placeholder:text-[black] w-[300px] lg:w-[200px] md:w-[150px] sm:w-[50%]' />
                                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='Phone' className='border-b-[1px] border-[black] py-2 outline-none placeholder:text-[black] w-[300px] lg:w-[200px] md:w-[150px] sm:w-[50%]' />
                            </div>
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Hello I am Interested in..' className='border-b-[1px] border-[black] py-2 outline-none placeholder:text-[black] w-[100%] h-[130px] md:h-[100px]'></textarea>
                            <div className='flex justify-end'>
                                <button type="submit" className='bg-[#292F36] rounded-[18px] p-[20px_30px] md:p-[10px_20px] text-[white] text-[18px] md:text-[13px] sm:text-[11px]'>Send Now <span className='text-[#CDA274]'>🡪</span></button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='px-[10%] mt-[50px]'>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
