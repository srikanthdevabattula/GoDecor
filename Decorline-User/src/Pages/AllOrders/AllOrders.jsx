import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import orderimg from '../../assets/checkout/orders.png';
import sprop from '../../assets/props/sprop.png';
import { IoIosArrowForward } from "react-icons/io";
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import Loader from '../../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { actions, setAllOrdersSelector } from '../../redux/reducers/productReducer';

const AllOrders = () => {
  // const [orders, setOrders] = useState([]);
  const dispatch=useDispatch()
  const orders=useSelector(setAllOrdersSelector)
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const transition = { duration: 2, type: 'spring' };
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.5, // Trigger animation when element is 50% in view
  });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const token = Cookies.get('token');
      const response = await fetch('https://go-decor.vercel.app/api/v1/orders', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      // setOrders(data.data);
      dispatch(actions.setAllOrders(data.data))
      console.log(orders)
      // Assuming the API returns the orders in data.data
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleItemClick = (orderId, itemId) => {
    history(`/orderDetails/${orderId}/${itemId}`);
  };

  if (loading) {
    return <Loader />;
  }
  const reversedOrders = [...orders].reverse();

  
  return (
    <div ref={ref} className=''>
      <motion.div initial={{ y: '30%' }}
        animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
        transition={transition} className='space-y-[80px]'>
        <div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={{ backgroundImage: `url(${sprop})` }}>
          <div className='bg-[white] flex flex-col items-center justify-center rounded-tl-[37px] rounded-tr-[37px] h-[100px] w-[300px] sm:w-[180px]'>
            <h1 className='text-[#292F36] font-DMSerif text-[30px] sm:text-[20px]'>Orders</h1>
            <p className='text-[17px] sm:text-[13px] text-[#4D5053]'>Home / Orders</p>
          </div>
        </div>
        <div className='border-[1px] rounded-[15px] p-2 m-5 font-poppins'>
          {reversedOrders.map((order, orderIndex) => (
            <div key={orderIndex}>
              {order.cart.map((item, itemIndex) => (
                <div key={itemIndex} className='flex items-center justify-between p-2' onClick={() => handleItemClick(order._id, item._id)}>
                  <div className='flex items-center space-x-4'>
                    <img src={item.productId.images[0]} alt="" className='w-[93px] h-[90px] lg:w-[80px] lg:h-[80px] rounded-[8px]' />
                    <div>
                      <h1 className='text-[#121212] text-[12px]'>{item.productId.name}</h1>
                      <p className='text-[#32C94A] text-[12px]'>{order.createAt.slice(0,10)}</p>
                    </div>
                  </div>
                  <IoIosArrowForward />
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AllOrders;
