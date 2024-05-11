import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions, cartSelector } from '../../../redux/reducers/productReducer'
import { CiCircleRemove } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
const CartItems = ({setTotal}) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
      fetchCartItems();
  }, [cartItems]);

//   useEffect(() => {
//     calculateTotal();
// }, [cartItems]);

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
         setCartItems(data.data[0].cart);
          setTotal(data.data[0].totalPrice)
         
      } catch (error) {
          console.error('Error fetching cart items:', error);
      }
  };
 
    
const dispatch =useDispatch()
const handleIncrement=async (productId) => {
  try {
      const token = Cookies.get('token');
      const response = await fetch(`https://go-decor.vercel.app/api/v1/cart/${productId}/increaseProductQuantity`, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          },
         
      });

      if (response.ok) {
          const responseData = await response.json();
          console.log('Product added to cart successfully:', responseData);
          // Perform any necessary actions after successful addition to cart
      } else {
          console.error('Failed to add product to cart:', response.statusText);
          // Handle error response
      }

      // Regardless of the response status, log the response from https://go-decor.vercel.app/api/v1/cart
      const cartResponse = await fetch('https://go-decor.vercel.app/api/v1/cart', {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });

      if (cartResponse.ok) {
          const cartData = await cartResponse.json();
          console.log('Response from https://go-decor.vercel.app/api/v1/cart:', cartData.data[0].cart);
          setCartItems(cartData.data[0].cart);
        
         
          
      } else {
          console.error('Failed to fetch cart:', cartResponse.statusText);
          // Handle error response
      }
     
  } catch (error) {
      console.error('Error adding product to cart:', error.message);
      // Handle network error
  }
};
const handleDecrement=async (productId) => {
  try {
      const token = Cookies.get('token');
      const response = await fetch(`https://go-decor.vercel.app/api/v1/cart/${productId}/decreaseProductQuantity`, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          },
         
      });

      if (response.ok) {
          const responseData = await response.json();
          console.log('Product added to cart successfully:', responseData);
          // Perform any necessary actions after successful addition to cart
      } else {
          console.error('Failed to add product to cart:', response.statusText);
          // Handle error response
      }

      // Regardless of the response status, log the response from https://go-decor.vercel.app/api/v1/cart
      const cartResponse = await fetch('https://go-decor.vercel.app/api/v1/cart', {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });

      if (cartResponse.ok) {
          const cartData = await cartResponse.json();
          console.log('Response from https://go-decor.vercel.app/api/v1/cart:', cartData.data[0].cart);
          setCartItems(cartData.data[0].cart);
        
          
      } else {
          console.error('Failed to fetch cart:', cartResponse.statusText);
          // Handle error response
      }
     
  } catch (error) {
      console.error('Error adding product to cart:', error.message);
      // Handle network error
  }
};
// const calculateTotal = () => {
//   let newTotal = 0;
//   cartItems.forEach(item => {
//       newTotal += item.productId.price * item.quantity;
//   });
//   setTotal(newTotal);
// };
      
        const handleDelete=async (productId) => {
          try {
              const token = Cookies.get('token');
              const response = await fetch(`https://go-decor.vercel.app/api/v1/cart/${productId}`, {
                  method: 'DELETE',
                  headers: {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/json'
                  },
                 
              });
        
              if (response.ok) {
                  const responseData = await response.json();
                  console.log('Product added to cart successfully:', responseData);
                  // Perform any necessary actions after successful addition to cart
              } else {
                  console.error('Failed to add product to cart:', response.statusText);
                  // Handle error response
              }
        
              // Regardless of the response status, log the response from https://go-decor.vercel.app/api/v1/cart
              const cartResponse = await fetch('https://go-decor.vercel.app/api/v1/cart', {
                  headers: {
                      'Authorization': `Bearer ${token}`
                  }
              });
        
              if (cartResponse.ok) {
                  const cartData = await cartResponse.json();
                  console.log('Response from https://go-decor.vercel.app/api/v1/cart:', cartData.data[0].cart);
                  setCartItems(cartData.data[0].cart);
                
                  
              } else {
                  console.error('Failed to fetch cart:', cartResponse.statusText);
                  // Handle error response
              }
             
          } catch (error) {
              console.error('Error adding product to cart:', error.message);
              // Handle network error
          }
        };
  return (
    <div>
        <div className='border-[1px] rounded-[8px]'>
            <h1 className='p-4 font-Roboto text-[#191c1f] text-[18px] font-medium'>Shopping Card</h1>
            <div className='bg-[#F2F4F5] border-[#E4E7E9] border-[1px] flex p-3 font-Roboto text-[12px] lg:text-[11px] md:text-[10px] sm:text-[7px] esm:text-[6px] font-medium text-[#475156]'>
                <h1 className='w-[45%]'>PRODUCTS</h1>
                <h1 className='w-[15%] text-center'>PRICE</h1>
                <h1 className='w-[25%] text-center'>QUANTITY</h1>
                <h1 className='w-[15%] text-center'>SUB-TOTAL</h1>
            </div>
            <div className='space-y-3 p-3 font-Roboto'>
                {cartItems.map((item,index)=>(
                    <div key={index} className='flex items-center'>
                        <div className='flex items-center w-[45%] space-x-4 lg:space-x-2'>
                        <CiCircleRemove onClick={()=>handleDelete(item.productId._id)} className='text-[30px] lg:text-[27px] md:text-[25px] sm:text-[20px] text-[#EE5858]' />
                        <img src={item.productId.images[0]} alt="" className='h-[100px] w-[100px] lg:w-[80px] lg:h-[80px] sm:w-[35px] sm:h-[35px] rounded-[8px]'/>
                        <h3 className='text-[#191C1F] text-[14px] lg:text-[12px] md:text-[11px] sm:text-[7px] font-Roboto'>{item.productId.name}</h3>

                        </div>

                        <div className='w-[15%] '>
                           <h1 className='text-center text-[#475156] text-[14px] lg:text-[12px] md:text-[11px] sm:text-[8px]'>₹ {item.productId.price}</h1> 
                        </div>
                        <div className='space-x-3 sm:space-x-1 flex w-[25%] justify-center items-center  '>
                                <button className='border-[#E4E7E9] border-[1px] p-[7px_15px] lg:p-[5px_10px] md:p-[4px_9px] sm:p-[0px_3px]   text-[16px] lg:text-[14px] sm:text-[8px] rounded-[10px]' onClick={()=>handleDecrement(item.productId._id)}>-</button>
                                <p className='text-[16px] lg:text-[15px] sm:text-[10px]  text-[#475156]'>{item.quantity}</p>
                                <button className='border-[#E4E7E9] border-[1px] p-[7px_15px] lg:p-[5px_10px] md:p-[4px_9px] sm:p-[0px_3px]  text-[16px] lg:text-[14px]  sm:text-[8px] rounded-[10px] ' onClick={()=>handleIncrement(item.productId._id)}>+</button>
                            </div>

                            <div className='w-[15%] text-center text-[14px] lg:text-[12px] md:text-[11px] sm:text-[8px] font-medium text-[#191C1F]'>
                            ₹ {item.productId.price * item.quantity}
                            </div>
                    </div>
               
                ))
               
                }
            </div>
            <div className='border-t-[1px] p-6'>
              <Link to='/props'>  <button className='bg-[#023020] rounded-[2px] p-[14px] md:p-10px] sm:p-[8px] text-[white] font-Roboto font-bold text-[14px] lg:text-[13px] md:text-[12px] sm:text-[9px]'>← RETURN TO SHOP</button></Link>
            </div>
        </div>
    </div>
  )
}

export default CartItems