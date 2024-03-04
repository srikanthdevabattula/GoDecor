import React, { useState } from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineLocationCity } from "react-icons/md";
const Address = () => {
  const [showAddresses, setShowAddresses] = useState(false); // State to control address dropdown visibility
  const [selectedAddress, setSelectedAddress] = useState(""); // State to store the selected address

  // Dummy addresses (replace with your actual addresses)
  const addresses = [
    "43, Electronics City Phase 1, Electronic City",
    "123, Main Street, City Center",
    "789, Park Avenue, Suburbia"
  ];

  // Function to toggle address dropdown visibility
  const toggleAddresses = () => {
    setShowAddresses(!showAddresses);
  };

  // Function to handle address selection
  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setShowAddresses(false);
  };

  return (
    <div className='border-[1px] w-[60%] lg:w-[80%] sm:w-[100%] p-3 rounded-[4px] space-y-4'>
      <div className='flex justify-between items-center text-[#1D1E20] font-Roboto text-[18px] lg:text-[14px] md:text-[12px] sm:text-[9px] font-medium' onClick={toggleAddresses}>
        <h1>Delivery Address</h1>
        <IoIosArrowForward  />
      </div>
      {showAddresses && (
        <div className='flex flex-col items-center space-y-2 border-[1px] p-2'>
          {addresses.map((address, index) => (
            <div key={index} className='flex items-center justify-between w-full'>
              <div className='flex items-center w-[70%] space-x-4'>
                <MdOutlineLocationCity className='text-[#ff7043] text-[35px] lg:text-[30px] md:text-[25px] sm:text-[20px]' />
                <p className='font-poppins text-[14px] lg:text-[13px] md:text-[12px] sm:text-[9px]'>{address}</p>
              </div>
              <input
                type="radio"
                name="deliveryAddress"
                checked={selectedAddress === address} // Check if this radio matches the selected address
                onChange={() => handleAddressSelect(address)} // Handle address selection
              />
            </div>
          ))}
        </div>
      )}
      {selectedAddress && (
        <div className="mt-3 flex justify-between items-center">
          <p className="font-poppins text-[14px] lg:text-[13px] md:text-[12px] sm:text-[9px] flex items-center ">
          <FaMapLocationDot className='text-[#ff7043] text-[35px] lg:text-[30px] md:text-[25px] sm:text-[20px] mr-4' /> {selectedAddress}

          </p>
          <input type="radio" name="" id="" checked/>
        </div>
      )}
    </div>
  );
};

export default Address;
