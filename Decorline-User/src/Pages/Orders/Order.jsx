import React from 'react'
import sprop from '../../assets/props/sprop.png';
import orders from '../../assets/checkout/orders.png'
import bar from '../../assets/checkout/bar.png'
import { BiError } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";
import PastOrders from './components/PastOrders';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setAllOrdersSelector } from '../../redux/reducers/productReducer';

const OrderDetails = () => {
    const { orderId, itemId } = useParams();
const allOrders=useSelector(setAllOrdersSelector)
    const transition = { duration: 2, type: 'spring' };
	const { ref, inView } = useInView({
		triggerOnce: true, // Only trigger animation once
		threshold: 0.5, // Trigger animation when element is 50% in view
	});

    const order = allOrders.find(order => order._id === orderId);
    if (!order) {
      console.error('Order not found');
      return <div>Order not found</div>;
    }
  
    // Find the specific item by itemId
    const item = order.cart.find(item => item._id === itemId);
    if (!item) {
      console.error('Item not found');
      return <div>Item not found</div>;
    }
  
    // Log order and item details to the console
    console.log('Order:', order);
    console.log('Item:', item);
  
	return (

		   <div ref={ref} className=' m-[2%] '>
          <motion.div   initial={{ y: '30%' }}
     // Start from below
    animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
    transition={transition}  className='space-y-[80px]'>
    <div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={{ backgroundImage: `url(${sprop})` }}>
<div className='bg-[white] flex flex-col items-center justify-center rounded-tl-[37px] rounded-tr-[37px] h-[100px] w-[300px] sm:w-[180px]'>
   <h1 className='text-[#292F36] font-DMSerif text-[30px] sm:text-[20px]'>Cart</h1>
   <p className='text-[17px] sm:text-[13px] text-[#4D5053]'>Home / Cart</p>
</div>
</div>


<div className='flex md:flex-col px-[5%] gap-6 lg:gap-3'>
    <div className='flex flex-col items-center gap-2 w-[20%] md:w-[100%]'><img src={item.productId.images[0]} alt="" className='w-[120px] h-[120px] sm:w-[80px] sm:h-[80px]'/>
    <h4 className='text-[#272728] font-poppins text-[20px] lg:text-[14px]'>{item.productId.name}</h4>
    <p className='text-[#6E6E70] text-[20px] font-poppins lg:text-[14px]'>{item.productId.dimension.length} * {item.productId.dimension.height} * {item.productId.dimension.breath} (L*H*B) | {item.productId.category}</p>
    </div>

    <div className='border-[1px] rounded-[15px] p-4 font-poppins w-[25%] md:w-[100%]'>
        <div className='space-y-6'>
            <img src={bar} alt="" />
            <div>
                <h1 className='text-[16px] lg:text-[15px] md:text-[13px] text-[#272728]'>Your package is on it’s way</h1>
                <p className='text-[#575758] text-[13px] lg:text-[12px] md:text-[10px]'>Arrival estimate: Dec 30</p>
            </div>
            <div>
                <h1 className='text-[16px] lg:text-[15px] md:text-[13px] text-[#272728]'>Your package is near!</h1>
                <p className='text-[#575758] text-[13px] lg:text-[12px] md:text-[10px]'>Dec 28, 12:05</p>
            </div>
            <div>
                <h1 className='text-[16px] lg:text-[15px] md:text-[13px] text-[#272728]'>Your order is on route</h1>
                <p className='text-[#575758] text-[13px] lg:text-[12px] md:text-[10px]'>Dec 27, 09:25</p>
            </div>
            <div>
                <h1 className='text-[16px] lg:text-[15px] md:text-[13px] text-[#272728]'>Your order left the distribution center</h1>
                <p className='text-[#575758] text-[13px] lg:text-[12px] md:text-[10px]'>Dec 26, 04:47</p>
            </div>

            <button className='w-[100%] py-2 border-[1px] rounded-[12px] text-[#FF4B26]'>Cancel order</button>
        </div>

        <div className='border-t-[1px] p-2 mt-4 space-y-3 font-poppins'>
            <h1 className='text-[#1C1C1C] text-[16px] '>Bill Detail</h1>
            <div className='space-y-2'>
                <div className='flex justify-between text-[14px]'>
                    <h4 className='text-[#1C1C1C] ' >Price({item.quantity} item)</h4>
                    <p className='text-[#6E6E70] '>Rs. {item.totalItemPrice}</p>
                </div>

                <div className='flex justify-between text-[14px]'>
                    <h4 className='text-[#1C1C1C] ' >Tax (X%)</h4>
                    <p className='text-[#6E6E70] '>Rs. 0</p>
                </div>

                <div className='flex justify-between text-[14px]'>
                    <h4 className='text-[#1C1C1C] ' >Discount</h4>
                    <p className='text-[#6E6E70] '>Rs. 0</p>
                </div>

                <div className='flex justify-between text-[14px]'>
                    <h4 className='text-[#1C1C1C] ' >Delivery Charges</h4>
                    <p className='text-[#6E6E70] '>Free Delivery</p>
                </div>

                <div className='flex justify-between text-[14px]'>
                    <h4 className='text-[#1C1C1C] ' >Total</h4>
                    <p className='text-[#6E6E70] '>Rs. {item.totalItemPrice}</p>
                </div>
            </div>

        </div>

    </div>

    <div className='w-[25%] md:w-[100%]'>
        <div className='border-t-[1px] font-poppins p-4 space-y-3 '>
            <h1 className='text-[16px] lg:text-[14px] text-[#272728]'>Shipping info</h1>
            <div>
                <p className='text-[#6E6E70] text-[14px] md:text-[12px]'>Delivery Address</p>
                <h4 className='text-[#272728] text-[14px] lg:text-[12px]'>{order.deliveryInfo.address} {order.deliveryInfo.city} {order.deliveryInfo.country} {order.deliveryInfo.state} {order.deliveryInfo.zipCode} <br /> {order.deliveryInfo.email} <br /> {order.deliveryInfo.contactNumber}</h4>
            </div>
            <div>
                <p className='text-[#6E6E70] text-[14px] md:text-[12px]'>Receives</p>
                <h4 className='text-[#272728] text-[14px] lg:text-[12px]'> {order.deliveryInfo.name}</h4>
            </div>
            <div>
                <p className='text-[#6E6E70] text-[14px] md:text-[12px]'>Tracking ID</p>
                <h4 className='text-[#272728] text-[14px] lg:text-[12px]'>0706502</h4>
            </div>
        </div>

        <div className='border-t-[1px] p-4 font-poppins space-y-2'>
            <div className='flex items-center justify-between'>
                <p className='text-[16px] lg:text-[13px]'>Report a problem</p>
                <BiError />
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-[16px] lg:text-[13px]'>Share order</p>
                <IoShareSocialOutline />
            </div>
        </div>

    </div>

    <div className='w-[30%] md:w-[100%] space-y-3'>
        <h1 className='text-[#292F36] font-DMSerif text-[50px] lg:text-[40px] md:text-[30px]'>Past Orders</h1>
        <PastOrders/>
    </div>
</div>


</motion.div>
</div>
  )
}

export default OrderDetails