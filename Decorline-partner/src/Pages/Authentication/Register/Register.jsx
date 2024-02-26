import React, { useState } from 'react';
import RightComponent from '../RightComponent';
import { IoRemoveOutline } from "react-icons/io5";
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { GoDotFill } from "react-icons/go";
import upload from '../../../assets/authentication/upload.png';
import profile from '../../../assets/authentication/profilepic.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [selectedDocument, setSelectedDocument] = useState('');
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [error, setError] = useState('');
    const [registerTab, setRegisterTab] = useState('name');
    const navigate = useNavigate();
    const handleDocumentChange = (event) => {
        setSelectedDocument(event.target.value);
    };

    const handleFrontImageUpload = (event) => {
        const file = event.target.files[0];
        setFrontImage(file);
    };

    const handleBackImageUpload = (event) => {
        const file = event.target.files[0];
        setBackImage(file);
    };

    const transition = { duration: 2, type: 'spring' };
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once
        threshold: 0.5, // Trigger animation when element is 50% in view
    });

    const handleContinue = () => {
        if (registerTab === 'name') {
            const name = document.getElementById('name').value;
            if (!name) {
                setError('Please enter your name.');
                return;
            }
            setError(''); // Clear error if validation passes
            setRegisterTab('details'); // Switch to the next tab
        } else if (registerTab === 'details') {
            const businessName = document.getElementById('BusinessName').value;
            const addressLine1 = document.getElementById('AddressLine1').value;
            const addressLine2 = document.getElementById('AddressLine2').value;
            const city = document.getElementById('City').value;
            const state = document.getElementById('State').value;
            const pinCode = document.getElementById('PinCode').value;

            if (!businessName || !addressLine1 || !addressLine2 || !city || !state || !pinCode) {
                setError('Please fill out all fields.');
                return;
            }
            setError(''); // Clear error if validation passes
            setRegisterTab('documents'); // Switch to the next tab
        } else if (registerTab === 'documents') {
            if (!selectedDocument) {
                setError('Please select a document.');
                return;
            }
            const documentNo = document.getElementById('documentNo').value;
            if (!documentNo) {
                setError('Please enter document number.');
                return;
            }
            if (!frontImage || !backImage) {
                setError('Please upload both front and back images.');
                return;
            }
            setError(''); // Clear error if validation passes
            // Proceed with the registration process or any other action
        }
       
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (registerTab === 'documents' && selectedDocument && frontImage && backImage) {
            // All fields are filled, navigate to success page
            navigate('/success');
        } else {
            setError('Please fill out all fields.');
        }
    };

    return (
        <div className='h-[100vh]'>
            <div className='flex sm:flex-col items-center sm:items-start'>
                <div className='flex-1 sm:order-2 h-[100vh] p-[5%_0%_5%_5%] sm:p-1 sm:flex-2 w-[100%]'>
                    <div
                        ref={ref} // Add ref to the element you want to animate
                        className='h-[80vh] border-black border-t-[5px] border-l-[5px] border-b-[5px] sm:border-[5px] flex flex-col items-center space-y-[3%]  pt-[5%] pb-[4%] overflow-y-auto scrollbar-hide'>
                        <form action="" onSubmit={handleSubmit}>
                            {registerTab == 'name' &&
                                <motion.div
                                    initial={{ y: '30%' }} // Start from below
                                    animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
                                    transition={transition}
                                    className='space-y-3 mt-[5%]'>
                                    <h1 className='text-[24px] lg:text-[22px] md:text-[19px] sm:text-[16px] font-poppins font-semibold text-[#171717] '>Welcome to GoDecor</h1>
                                    <p className='font-poppins text-[#1C1C1C] text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-light'>Register with us and earn</p>
                                    <div className='space-y-5 flex flex-col items-center mb-6'>
                                        <div>
                                            <div className='space-y-6 flex flex-col items-center'>
                                                <div className='my-3'>
                                                    <img src={profile} alt="" />
                                                </div>
                                                <div className='space-y-1'>
                                                    <h4 className='text-[#2E2E2E] font-poppins text-[16px]  lg:text-[15px] md:text-[14px] sm:text-[12px]'>Name</h4>
                                                    <div className='flex items-center border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px]'>
                                                        <input
                                                            type='text'
                                                            id='name'
                                                            name='name'
                                                            className='outline-none border-none  w-[100%] sm:h-[30px]'
                                                            placeholder='Enter your name'
                                                            required
                                                        />
                                                    </div>
                                                    <div className='flex justify-center items-center py-4'>
                                                        <IoRemoveOutline className='text-[50px] border-[1px] h-[7px] bg-[black] rounded-[10px] w-[30px]' />
                                                        <GoDotFill />
                                                        <GoDotFill />
                                                    </div>
                                                </div>
                                            </div>
                                            <button onClick={handleContinue} className='bg-[#023020] hover:bg-[#342121] text-[white]  w-[400px] h-[57px] md:w-[300px] md:h-[45px] sm:w-[250px]  border-[1px] border-[#5A5A5A] rounded-[10px] text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-medium  '>Continue</button>
                                        </div>
                                    </div>
                                </motion.div>}

                            {registerTab == 'details' &&
                                <motion.div
                                    initial={{ y: '30%' }} // Start from below
                                    animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
                                    transition={transition}
                                    className='space-y-3 mt-[5%] px-[7%]'>
                                    <p className='font-poppins text-[#1C1C1C] text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-light'>Enter your details</p>
                                    <div className='space-y-5 flex flex-col items-center mb-6'>
                                        <div>
                                            <div className='space-y-6 flex flex-col items-center'>
                                                <div className='space-y-3'>
                                                    <div>
                                                        <h4 className='text-[#2E2E2E] font-poppins text-[16px]  lg:text-[15px] md:text-[14px] sm:text-[12px]'>Business Name</h4>
                                                        <div className='flex items-center border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px]'>
                                                            <input
                                                                type='text'
                                                                id='BusinessName'
                                                                name='BusinessName'
                                                                className='outline-none border-none w-[100%] sm:h-[30px]'
                                                                placeholder='Enter your business name (optional)'
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className='text-[#2E2E2E] font-poppins text-[16px]  lg:text-[15px] md:text-[14px] sm:text-[12px]'>Enter your address</h4>
                                                        <div className='space-y-3'>
                                                            <div className='flex items-center border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px]'>
                                                                <input
                                                                    type='text'
                                                                    id='AddressLine1'
                                                                    name='AddressLine1'
                                                                    className='outline-none border-none w-[100%] sm:h-[30px]'
                                                                    placeholder='Address Line 1'
                                                                    required
                                                                />
                                                            </div>
                                                            <div className='flex items-center border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px]'>
                                                                <input
                                                                    type='text'
                                                                    id='AddressLine2'
                                                                    name='AddressLine2 '
                                                                    className='outline-none border-none w-[100%] sm:h-[30px]'
                                                                    placeholder='Address Line 2'
                                                                    required
                                                                />
                                                            </div>
                                                            <div className='flex items-center rounded-[10px] h-[60px]  w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px] space-x-1'>
                                                                <input
                                                                    type='text'
                                                                    id='City'
                                                                    name='City'
                                                                    className='outline-none  w-[50%] h-[100%] border-[1px] rounded-[10px] pl-3'
                                                                    placeholder='City'
                                                                    required
                                                                />
                                                                <input
                                                                    type='text'
                                                                    id='State'
                                                                    name='State'
                                                                    className='outline-none w-[50%]  h-[100%] border-[1px] rounded-[10px] pl-3'
                                                                    placeholder='State'
                                                                    required
                                                                />
                                                            </div>
                                                            <div className='flex items-center border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px]'>
                                                                <input
                                                                    type='text'
                                                                    id='PinCode'
                                                                    name='PinCode'
                                                                    className='outline-none border-none w-[100%] sm:h-[30px]'
                                                                    placeholder='Pin Code'
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
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
                                                                <input type="checkbox" name="" id="" />
                                                            </div>
                                                        </div>
                                                        <div className='2 flex border-b-[1px] py-2'>
                                                            <div className='w-[90%]'>
                                                                <h1 className='font-poppins text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[#1D1B20]'>Interior Props</h1>
                                                                <p className='font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[10px] text-[#49454F]'>Sell your exquisite interior props, amplifying spaces effortlessly with us.</p>
                                                            </div>
                                                            <div className='w-[10%] flex items-center justify-center'>
                                                                <input type="checkbox" name="" id="" />
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

                                                <div className='flex justify-center items-center py-4'>
                                                    <GoDotFill />
                                                    <IoRemoveOutline className='text-[50px] border-[1px] h-[7px] bg-[black] rounded-[10px] w-[30px]' />
                                                    <GoDotFill />
                                                </div>
                                                <button onClick={handleContinue} className='bg-[#023020] hover:bg-[#342121] text-[white]  w-[400px] h-[57px] md:w-[300px] md:h-[45px] sm:w-[250px]  border-[1px] border-[#5A5A5A] rounded-[10px] text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-medium  '>Continue</button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>}

                            {registerTab == 'documents' &&
                                <motion.div
                                    initial={{ y: '30%' }} // Start from below
                                    animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
                                    transition={transition}
                                    className='space-y-3 mt-[5%] px-[7%]'>
                                    <p className='font-poppins text-[#1C1C1C] text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-light'>Enter your document details</p>
                                    <div className='space-y-5 flex flex-col items-center mb-6'>
                                        <div>
                                            <div className='space-y-6 flex flex-col items-center'>
                                                <div className='space-y-3'>
                                                    <div>
                                                        <h4 className='text-[#2E2E2E] font-poppins text-[16px]  lg:text-[15px] md:text-[14px] sm:text-[12px]'>Select Document</h4>
                                                        <div className='flex items-center border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px]'>
                                                            <select
                                                                id='document'
                                                                name='document'
                                                                className='outline-none w-[100%]  sm:h-[40px] text-[13px]'
                                                                value={selectedDocument}
                                                                onChange={handleDocumentChange}
                                                                required
                                                            >
                                                                <option value=''>Select Document</option>
                                                                <option value='aadhar'>Aadhar Card</option>
                                                                <option value='driving_license'>Driving License</option>
                                                                <option value='passport'>Passport</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className='text-[#2E2E2E] font-poppins text-[16px]  lg:text-[15px] md:text-[14px] sm:text-[12px]'>Document Number</h4>
                                                        <div className='flex items-center border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px]'>
                                                            <input
                                                                type='text'
                                                                id='documentNo'
                                                                name='documentNo'
                                                                className='outline-none border-none w-[100%] sm:h-[30px]'
                                                                placeholder='Enter your document number'
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                  <div className='space-y-1 w-[400px] md:w-[300px] sm:w-[250px]'>
                                                    <h4 className='text-[#2E2E2E] font-poppins text-[16px]  lg:text-[15px] md:text-[14px] sm:text-[12px]'>Document Images</h4>
                                                    <div className='flex  space-x-2  px-2 text-[14px] md:text-[10px] font-poppins text-[#828282] '>
                                                        <div className='flex flex-col items-center'>
                                                            <input type="file" accept="image/*" onChange={handleFrontImageUpload} className='text-[8px] md:text-[5px]' required/>
                                                           {frontImage? ( <img src={URL.createObjectURL(frontImage)} alt="front" className='w-[70px] lg:w-[65px] md:w-[60px] mt-3 h-[50px]' />):<img src={upload} className='w-[90px] lg:w-[75px] md:w-[60px] mt-3 h-[70px] md:h-[60px]'/> }
                                                            <h3 className='text-center'>Front</h3>
                                                        </div>
                                                        <div className='flex flex-col items-center'>
                                                            <input type="file" accept="image/*" onChange={handleBackImageUpload} className='text-[8px] md:text-[5px]' required/>
                                                            {backImage ? <img src={URL.createObjectURL(backImage)} alt="back" className='w-[70px] lg:w-[65px] md:w-[60px] mt-3 h-[50px]'/>: <img src={upload} className='w-[90px] lg:w-[75px] md:w-[60px] mt-3 h-[70px] md:h-[60px]'/> }
                                                            <h3 className='text-center'>Back</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                  
                                                </div>
                                                <div className='flex justify-center items-center py-4'>
                                                    <GoDotFill />
                                                    <GoDotFill />
                                                    <IoRemoveOutline className='text-[50px] border-[1px] h-[7px] bg-[black] rounded-[10px] w-[30px]' />
                                                </div>
                                                <button onClick={handleContinue} className='bg-[#023020] hover:bg-[#342121] text-[white]  w-[400px] h-[57px] md:w-[300px] md:h-[45px] sm:w-[250px]  border-[1px] border-[#5A5A5A] rounded-[10px] text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-medium  '>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>}
                        </form>
                    </div>
                </div>
                <div className='flex-1 bg-[#FFB500] sm:order-1 h-[100vh] sm:h-[40vh] flex items-center justify-center sm:hidden'>
                    <RightComponent />
                </div>
            </div>
        </div>
    );
};

export default Register;
