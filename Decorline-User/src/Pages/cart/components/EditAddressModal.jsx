import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const EditAddressModal = ({ address, onSuccess }) => {
  const [editedAddress, setEditedAddress] = useState(address);
  const token = Cookies.get('token');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAddress({
      ...editedAddress,
      [name]: value
    });
  };
  console.log(address)

  const handleSubmit = async () => {
    try {
      const {name, address, city, contactNumber, country, email, state, zipCode ,_id} = editedAddress;
  
      const response = await fetch(`https://go-decor.vercel.app/api/v1/address/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            name,
          address,
          city,
          contactNumber,
          country,
          email,
          state,
          zipCode
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to update address');
      }
  
      const data = await response.json();
      console.log('Address updated successfully:', data);
      alert('Address Updated Successfully');
      onSuccess(); // Call onSuccess to close the modal and refresh the address list
    } catch (error) {
      alert('Failed to update address. Please try again later.');
      console.error('Error updating address:', error);
    }
  };
  
  

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onSuccess}>&times;</span>
        <h2>Edit Address</h2>
        <div className=''>
          <label className='' htmlFor="name">Name:</label>
          <input type="text" name="name" value={editedAddress.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" value={editedAddress.address} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" name="city" value={editedAddress.city} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" name="state" value={editedAddress.state} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input type="text" name="country" value={editedAddress.country} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input type="text" name="zipCode" value={editedAddress.zipCode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" value={editedAddress.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="contactNumber">Ph No:</label>
          <input type="text" name="contactNumber" value={editedAddress.contactNumber} onChange={handleChange} />
        </div>
        <button className='mt-3 text-[14px] sm:text-[10px] bg-[orange] p-[5px_10px] rounded-[20px] text-[white] font-semibold' onClick={handleSubmit}>Update Address</button>
      </div>
    </div>
  );
};

export default EditAddressModal;
