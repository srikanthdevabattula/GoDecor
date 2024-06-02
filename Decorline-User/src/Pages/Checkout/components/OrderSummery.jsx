import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector, selectPaymentSelector, selectedAddressSelector, totalSelector } from '../../../redux/reducers/productReducer';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import Loader from '../../../Loader/Loader';

const OrderSummary = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const selectedAddress = useSelector(selectedAddressSelector);
  const paymentMethod = useSelector(selectPaymentSelector);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://go-decor.vercel.app/api/v1/cart', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setCartItems(data.data[0].cart);
      setTotal(data.data[0].totalPrice);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    setLoading(true);
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setLoading(false);
      return;
    }

    const headers = { 'Authorization': `Bearer ${token}` };

    try {
      const result = await axios.post("https://go-decor.vercel.app/api/v1/order/new", { addressId: selectedAddress._id }, { headers });

      if (!result) {
        alert("Server error. Are you online?");
        setLoading(false);
        return;
      }

      const { orderInfo, razorPayment } = result.data.data;

      const options = {
        key: "rzp_test_YxowEUIK2xZcQi",
        amount: orderInfo?.totalPrice * 100,
        currency: "INR",
        name: "Soumya Corp.",
        description: "Test Transaction",
        order_id: razorPayment?.razorpayOrderId,
        handler: async (response) => {
          const data = {
            dbOrderID: orderInfo.orderId,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: razorPayment?.razorpayOrderId,
            razorpay_signature: response.razorpay_signature,
          
           
          };

          const result = await axios.post("https://go-decor.vercel.app/api/v1/order/verify", data, { headers });

          alert(result.data.message);
          navigate('/orders');
        },
        prefill: {
          name: "Soumya",
          email: "SoumyaDey@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Soumya Dey Corporate Office",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error creating order:', error);
    } finally {
      setLoading(false);
    }
  };









  




  const placeOrder = async () => {
    setLoading(true);
    const headers = { 'Authorization': `Bearer ${token}` };
  
    try {
      const result = await axios.post("https://go-decor.vercel.app/api/v1/order/new",
       { addressId: selectedAddress._id }, { headers });
  
      if (!result) {
        alert("Server error. Are you online?");
        setLoading(false);
        return;
      }
      const { orderInfo } = result.data.data;
  
      await axios.post("https://go-decor.vercel.app/api/v1/order/verify", { 
        paymentMethod: 'COD',
        dbOrderID: orderInfo.orderId
      }, { headers });
  
      navigate('/orders');
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Error creating order. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='border-[1px] rounded-[4px]'>
      <h1 className='text-[#191C1F] font-semibold font-Roboto p-4'>Order Summary</h1>
      <div className='p-4 space-y-2 text-[#191C1F] font-Roboto'>
        {cartItems.map((item, index) => (
          <div key={index} className='flex space-x-2 items-center'>
            <img src={item.productId.images[0]} alt="" className='w-[100px] h-[100px] lg:w-[80px] lg:h-[80px] rounded-[8px]' />
            <div>
              <h5 className='text-[14px]'>{item.productId.name}</h5>
              <p className='text-[#5F6C72] font-Roboto text-[14px]'>{item.quantity} X <span className='text-[#2DA5F3] font-semibold'>₹{item.productId.price}</span></p>
            </div>
          </div>
        ))}
      </div>
      <div className='space-y-3 p-4'>
        <div className='flex justify-between'>
          <h3 className='text-[#5F6C72] text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>Sub-total</h3>
          <h2 className='text-[#191C1F] font-medium text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>₹{total}</h2>
        </div>
        <div className='flex justify-between'>
          <h3 className='text-[#5F6C72] text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>Shipping</h3>
          <h2 className='text-[#191C1F] font-medium text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>{total > 0 ? 'Free' : 0}</h2>
        </div>
        <div className='flex justify-between'>
          <h3 className='text-[#5F6C72] text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>Discount</h3>
          <h2 className='text-[#191C1F] font-medium text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>₹0</h2>
        </div>
        <div className='flex justify-between'>
          <h3 className='text-[#5F6C72] text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>Tax</h3>
          <h2 className='text-[#191C1F] font-medium text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>₹0</h2>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex justify-between border-t-[1px] pt-2 my-2'>
          <h1 className='text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[#191C1F]'>Total</h1>
          <h3 className='text-[#191C1F] font-semibold text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px]'>₹{total} INR</h3>
        </div>
        <button onClick={paymentMethod === 'card' ? displayRazorpay : placeOrder} className='bg-[#FA8232] text-white p-[15px] text-center w-[100%] font-bold text-[16px] lg:text-[13px] md:text-[14px] sm:text-[12px] rounded-[4px]'>PLACE ORDER →</button>
      </div>
    </div>
  );
};

export default OrderSummary;
