import React, { useState } from 'react'
import sprop from '../../assets/props/sprop.png';
import Address from './components/Address';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
const Cart = () => {
    const [total, setTotal] = useState(0);
	const transition = { duration: 2, type: 'spring' };
	const { ref, inView } = useInView({
		triggerOnce: true, // Only trigger animation once
		threshold: 0.5, // Trigger animation when element is 50% in view
	});
	return (

		   <div ref={ref} className=' m-[2%] '>
          <motion.div   initial={{ y: '30%' }}
     // Start from below
    animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
    transition={transition} className='space-y-[40px]'>
         <div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={{ backgroundImage: `url(${sprop})` }}>
    <div className='bg-[white] flex flex-col items-center justify-center rounded-tl-[37px] rounded-tr-[37px] h-[100px] w-[300px] sm:w-[180px]'>
        <h1 className='text-[#292F36] font-DMSerif text-[30px] sm:text-[20px]'>Cart</h1>
        <p className='text-[17px] sm:text-[13px] text-[#4D5053]'>Home / Cart</p>
    </div>
</div>

<div className='px-[10%]  sm:px-[5%] flex md:flex-col space-x-3 md:space-x-0 md:space-y-3'>
    <div className='l w-[70%] md:w-[100%] space-y-[30px]'>
<Address/>
<CartItems setTotal={setTotal}/>
    </div>
    <div className='r w-[30%] md:w-[100%]'>
        <CartTotal total={total}/>
    </div>
</div>
</motion.div>
</div>
  )
}

export default Cart