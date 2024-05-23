import React, { useEffect, useState } from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineLocationCity } from "react-icons/md";
import Cookies from 'js-cookie';
import axios from 'axios';
import AddAddressModal from './AddAddressModal';
import EditAddressModal from './EditAddressModal'; // Import the edit modal component
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectedAddressSelector } from '../../../redux/reducers/productReducer';

const Address = () => {
  const [showAddresses, setShowAddresses] = useState(false);
  const [addAddress, setAddAddress] = useState(false);
  const [editAddress, setEditAddress] = useState(null); // State to manage edit modal visibility and edited address
  const [addresses, setAddresses] = useState([]);
  const token = Cookies.get('token');
  const dispatch = useDispatch();
  const selectedAddress = useSelector(selectedAddressSelector);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get('https://go-decor.vercel.app/api/v1/address', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAddresses(response.data.data);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    if (token) {
      fetchAddresses();
    }
  }, [token, addAddress]);

  const toggleAddresses = () => {
    setShowAddresses(!showAddresses);
  };

  const handleAddressSelect = (address) => {
    console.log(address)
    dispatch(actions.selectedAddress(address));
    setShowAddresses(false);
  };

  const handleSuccess = () => {
    setAddAddress(!addAddress);
     // Close the edit modal upon success
  };
  const handleClose=()=>{
    setEditAddress(null);
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://go-decor.vercel.app/api/v1/address/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      handleSuccess();
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  const handleEdit = (address) => {
    setEditAddress(address);
  };

  return (
    <div className='border-[1px] w-[60%] lg:w-[80%] sm:w-[100%] p-3 rounded-[4px] space-y-4'>
      <div className='flex justify-between items-center text-[#1D1E20] font-Roboto text-[18px] lg:text-[14px] md:text-[12px] sm:text-[9px] font-medium' onClick={toggleAddresses}>
        <h1>Delivery Address</h1>
        <IoIosArrowForward />
      </div>
      {showAddresses && (
        <div className='flex flex-col items-center space-y-2 border-[1px] p-2'>
          {addresses.map((address, index) => (
            <div key={index} className='flex items-center justify-between w-full'>
              <div className='flex items-center w-[70%] space-x-4'>
                <MdOutlineLocationCity className='text-[#ff7043] text-[35px] lg:text-[30px] md:text-[25px] sm:text-[20px]' />
                <p className='font-poppins text-[14px] lg:text-[13px] md:text-[12px] sm:text-[9px]'>{address.address} {address.city} {address.country} {address.zipCode}</p>
              </div>
              <div className='flex gap-3'>
                <CiEdit onClick={() => handleEdit(address)} />
                <MdDeleteForever onClick={() => handleDelete(address._id)} className='text-[red]' />
                <input
                  type="radio"
                  name="selectedAddress"
                  checked={selectedAddress === address}
                  onChange={() => handleAddressSelect(address)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setAddAddress(!addAddress)} className='bg-[orange] p-2 sm:p-1 text-[white] rounded-[20px] text-[16px] md:text-[12px] sm:text-[10px]'>{addAddress ? <>Close</> : <>Add new Address</>}</button>

      {addAddress && <AddAddressModal onSuccess={handleSuccess} />}

      {editAddress && <EditAddressModal address={editAddress} onSuccess={handleClose} />}
      
      {selectedAddress && (
        <div className="mt-3 flex justify-between items-center">
          <p className="font-poppins text-[14px] lg:text-[13px] md:text-[12px] sm:text-[9px] flex items-center ">
          <FaMapLocationDot className='text-[#ff7043] text-[35px] lg:text-[30px] md:text-[25px] sm:text-[20px] mr-4' />{selectedAddress.name} <br />
           {selectedAddress.address} {selectedAddress.city} {selectedAddress.state} {selectedAddress.country} {selectedAddress.zipCode} <br /> {selectedAddress.email} <br /> {selectedAddress.contactNumber}

          </p>
          <input type="radio" name="" id="" checked/>
        </div>
      )}
    </div>
  );
};

export default Address;
