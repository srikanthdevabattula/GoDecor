import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const AddAddressModal = ({ onSuccess }) => {
  const [newAddress, setNewAddress] = useState({
    name:'',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    email: '',
    contactNumber: ''
  });
  const token = Cookies.get('token');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://go-decor.vercel.app/api/v1/address',
        {
            name:newAddress.name,
          address: newAddress.address,
          city: newAddress.city,
          state: newAddress.state,
          zipCode: newAddress.zipCode,
          country: newAddress.country,
          email: newAddress.email,
          contactNumber: newAddress.contactNumber
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // Replace with your actual token
          }
        }
      );
      console.log('Address added successfully:', response.data);
      // Reset newAddress state or close the modal upon successful submission
      onSuccess();
      setNewAddress({
        name:'',
        address: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        email: '',
        contactNumber: ''
      });
    } catch (error) {
        alert('enter valid address')
      console.error('Error adding address:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Address</h2>
        <div className='addressfields w-[400px] flex flex-col'>
        <input type="text"  name="name" value={newAddress.name} onChange={handleChange} placeholder="Name" />
         
          <input type="text"  name="address" value={newAddress.address} onChange={handleChange} placeholder="Address" />
          <input type="text" name="city" value={newAddress.city} onChange={handleChange} placeholder="City" />
          <input type="text" name="state" value={newAddress.state} onChange={handleChange} placeholder="State" />
          <input type="text" name="country" value={newAddress.country} onChange={handleChange} placeholder="Country" />
          <input type="text" name="zipCode" value={newAddress.zipCode} onChange={handleChange} placeholder="Zip Code" />
          <input type="email" name="email" value={newAddress.email} onChange={handleChange} placeholder="Email" />
          <input type="text" name="contactNumber" value={newAddress.contactNumber} onChange={handleChange} placeholder="Contact Number" />
        </div>
        <button className=' text-[14px] sm:text-[10px] bg-[orange] p-[5px_10px] rounded-[20px] text-[white] font-semibold' onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default AddAddressModal;
