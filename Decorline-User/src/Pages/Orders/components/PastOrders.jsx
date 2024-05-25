import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import orderImgPlaceholder from '../../../assets/checkout/orders.png'; // Placeholder image
import { setAllOrdersSelector } from '../../../redux/reducers/productReducer';

const PastOrders = () => {
  const orders = useSelector(setAllOrdersSelector);
  const navigate = useNavigate();

  // Get the last four orders
  const lastFourOrders = orders.slice(-3).reverse(); // reverse to show the most recent first

  const handleItemClick = (orderId, itemId) => {
    navigate(`/orderDetails/${orderId}/${itemId}`);
  };

  return (
    <div className='border-[1px] rounded-[15px] p-2 font-poppins'>
      {lastFourOrders.map((order, orderIndex) => (
        order.cart.map((item, itemIndex) => (
          <div
            key={`${orderIndex}-${itemIndex}`}
            className='flex items-center justify-between p-2 cursor-pointer'
            onClick={() => handleItemClick(order._id, item._id)}
          >
            <div className='flex items-center space-x-4'>
              <img src={item.productId.images[0] } alt="img" className='w-[93px] h-[90px] lg:w-[80px] lg:h-[80px] rounded-[8px]' />
              <div>
                <h1 className='text-[#121212] text-[12px]'>{item.productId.name}</h1>
                <p className='text-[#32C94A] text-[12px]'>Order Created At {new Date(item.productId.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
            <IoIosArrowForward />
          </div>
        ))
      ))}
    </div>
  );
};

export default PastOrders;
