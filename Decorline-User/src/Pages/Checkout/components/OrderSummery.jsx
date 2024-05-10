import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { cartSelector, totalSelector } from '../../../redux/reducers/productReducer'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
const OrderSummery = () => {
    const [cartItems, setCartItems] = useState([]);
const [total,setTotal]=useState(0)
    useEffect(() => {
        fetchCartItems();
    }, []);
  
    useEffect(() => {
      calculateTotal();
  }, [cartItems]);
  
    const fetchCartItems = async () => {
        try {
            // Retrieve authorization token from cookies
            const token = Cookies.get('token');
              const response = await fetch('https://go-decor.vercel.app/api/v1/cart', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            console.log(data.data[0].cart)
            setCartItems(data.data[0].cart);
          
           
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const calculateTotal = () => {
        let newTotal = 0;
        cartItems.forEach(item => {
            newTotal += item.productId.price * item.quantity;
        });
        setTotal(newTotal);
      };
  return (
    <div className=' border-[1px] rounded-[4px]'>
        <h1 className='text-[#191C1F] font-semibold font-Roboto p-4'>Order Summery</h1>

        <div className='p-4 space-y-2 text-[#191C1F] font-Roboto'>
            {cartItems.map((item,index)=>(
                    <div key={index} className='flex space-x-2 items-center'>
                        <img src={item.productId.images[0]} alt="" className='w-[100px] h-[100px] lg:w-[80px] lg:h-[80px] rounded-[8px]'/>
                        <div>
                            <h5 className='text-[14px]'>{item.productId.name}</h5>
                            <p className='text-[#5F6C72] font-Roboto text-[14px]'>{item.quantity} X <span className='text-[#2DA5F3] font-semibold'>₹{item.productId.price}</span></p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='space-y-3 p-4'>
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
                    <h2  className='text-[#191C1F] font-medium text-[14px]  lg:text-[13px] md:text-[12px] sm:text-[10px'>₹{total>0 ? Math.round(total/100 * 15) : 0}</h2>
                </div>
                <div className='flex justify-between'>
                    <h3  className='text-[#5F6C72] text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px]'>Tax</h3>
                    <h2  className='text-[#191C1F] font-medium text-[14px]  lg:text-[13px] md:text-[12px] sm:text-[10px'>₹{Math.round(total/100 * 5)}</h2>
                </div>
            </div>
            <div className='p-4'>
                <div className='flex justify-between border-t-[1px] pt-2 my-2'><h1 className='text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[#191C1F]'>Total</h1>
                <h3 className='text-[#191C1F] font-semibold text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px]'>₹{(Math.round(total/100 * 5)) + total -(total>0 ? Math.round(total/100 * 15) : 0) } INR</h3></div>
              <Link to='/checkout'>  <button className='bg-[#FA8232] text-[white] p-[15px] text-center w-[100%] font-bold text-[16px]  lg:text-[13px] md:text-[14px] sm:text-[12px] rounded-[4px]'>PLACE ORDER →</button></Link>
            </div>
    </div>
  )
}

export default OrderSummery