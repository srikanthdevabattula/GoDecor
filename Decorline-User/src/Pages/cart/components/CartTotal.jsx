import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectedAddressSelector, totalSelector } from '../../../redux/reducers/productReducer'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
const CartTotal = ({total,cartItems}) => {
    const history = useNavigate();

const selectedAddress=useSelector(selectedAddressSelector)
   const handleCheckout= () => {
  
        if(selectedAddress && total>0&& cartItems.length>0){
            history('/checkout');
        } else{
            alert('select address or check Cart Items')
        }
       
  

 
   
   }
  return (
    <div className='space-y-3'>
        <div className='border-[1px] p-6 lg:p-4 rounded-[8px] font-Roboto'>
            <h1 className='text-[#191C1F] font-medium text-[18px] lg:text-[16px] md:text-[13px] sm:text-[12px] font-Roboto mb-4'>
                Cart Total
            </h1>
            <div className='space-y-3'>
                <div className='flex justify-between'>
                    <h3 className='text-[#5F6C72] text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>Sub-total</h3>
                    <h2 className='text-[#191C1F] font-medium text-[14px]  lg:text-[13px] md:text-[12px] sm:text-[10px'>₹{total}</h2>
                </div>
                <div className='flex justify-between'>
                    <h3  className='text-[#5F6C72] text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>Shipping</h3>
                    <h2  className='text-[#191C1F] font-medium text-[14px]  lg:text-[13px] md:text-[12px] sm:text-[10px'>{total>0?'Free':0}</h2>
                </div>
                <div className='flex justify-between'>
                    <h3  className='text-[#5F6C72] text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>Discount</h3>
                    <h2  className='text-[#191C1F] font-medium text-[14px]  lg:text-[13px] md:text-[12px] sm:text-[10px'>₹0</h2>
                </div>
                <div className='flex justify-between'>
                    <h3  className='text-[#5F6C72] text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>Tax</h3>
                    <h2  className='text-[#191C1F] font-medium text-[14px]  lg:text-[13px] md:text-[12px] sm:text-[10px'>₹0</h2>
                </div>
            </div>
            <div>
                <div className='flex justify-between border-t-[1px] pt-2 my-2'><h1 className='text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[#191C1F]'>Total</h1>
                <h3 className='text-[#191C1F] font-semibold text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px]'>₹{total}  INR</h3></div>
             <button onClick={handleCheckout} className='bg-[#F4F0EC] p-[15px] text-center w-[100%] font-bold text-[16px]  lg:text-[13px] md:text-[14px] sm:text-[12px] rounded-[4px]'>PROCEED TO CHECKOUT →</button>
            </div>
        </div>



        <div className='border-[1px] rounded-[8px] font-Roboto'>
            <h1 className='p-4 text-[#191C1F] font-medium text-[18px] border-b-[1px]  lg:text-[16px] md:text-[14px] sm:text-[12px]'>Coupon Code</h1>
            <div className='p-4 space-y-3'>
                <input type="text" name="" id="" placeholder='Enter Coupon' className='border-[1px] w-[100%] h-[40px] rounded-[5px] outline-none p-2 text-red-400'/>
                <button className='bg-[#023020] rounded-[4px] text-[white] p-3 font-bold text-[14px]  lg:text-[13px] md:text-[12px] sm:text-[10px]'>APPLY COUPON</button>
            </div>
        </div>
    </div>
  )
}

export default CartTotal