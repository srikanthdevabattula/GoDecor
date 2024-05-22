import React, { useState, useEffect } from 'react';
import blank from '../../assets/blank-profile-picture-973460_1920.png';
import Cookies from 'js-cookie';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null); // Initialize with null
  const token = Cookies.get('token');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://go-decor.vercel.app/api/v1/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data.data);
        console.log(response.data.data )
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]); // Make sure to include token in the dependency array

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch('https://go-decor.vercel.app/api/v1/user', {
        name: userData.name,
        email: userData.email,
        avatar: userData.avatar
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.success) {
        console.log('User details updated successfully',response);
        // Optionally, update state or show a success message
      } else {
        console.error('Failed to update user details');
        // Optionally, show an error message
      }
    } catch (error) {
      console.error('Error updating user details:', error);
      // Handle error
    }
  };

  const handleImageChange = (e) => {
    // Handle image change
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUserData({ ...userData, avatar: reader.result });
    };
  };

  return (
    <div>
      {userData && (
        <div>
          <div className='flex flex-col items-center justify-center'>
            <img src={userData.avatar || blank} alt='Profile' className='w-[150px] h-[150px] rounded-[100px]' />
            <input type="file" onChange={handleImageChange} accept="image/*" className='ml-[200px] mt-4 text-transparent'/>
             
          </div>
          <form onSubmit={handleSubmit}>
            <div className='profile flex flex-col font-semibold items-center justify-center mt-5 gap-2'>
              <p>Name</p>
              <input type="text" name="name" value={userData.name || ''} onChange={handleInputChange} />
              <p>Email</p>
              <input type="email" name="email" value={userData.email || ''} onChange={handleInputChange} />
              <p>Phone Number</p>
              <input type="text" disabled name="" value={userData.phoneNumber || ''} className='outline-none bg-[#8080803d] px-2' />
             
             <button type="submit" className='bg-[orange] p-2 w-[200px] rounded-[10px] text-[white] font-semibold'>Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
