import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/reducers/sidebar';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Search from './components/Search';
import { ViewSelector, addProductModal } from '../../redux/reducers/Products';
import OrderDetails from './components/OrderDetails';
import OrderDetailsModal from './components/OrderDetailsModal';
import AddProductModal from './components/AddProductModal';

const Products = () => {
    const showAddProduct=useSelector(addProductModal)
   
    const transition = { duration: 2, type: 'spring' };
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once
        threshold: 0.5, // Trigger animation when element is 50% in view
    });
    const show=useSelector(ViewSelector)
    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(actions.update("Products"));
        dispatch(actions.pathUpdate('Pages / Products'))
	  
	  }, []);
  return (
    <div ref={ref} className='flex m-[2%] '>
          <motion.div   initial={{ y: '30%' }}
     // Start from below
    animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
    transition={transition}  className='rounded-[15px]  w-[456px] lg:w-[50%] md:w-[550px]  sm:w-[95%] border-[0.5px] bg-[white] border-[#ECECEC]' style={{boxShadow: '4px 4px 15px 0px #0000001C'
}}>
     <Search />
</motion.div>

{show && <div className='w-[550px] lg:w-[400px] sm:w-[100%] md:w-[0%]'> 
      <OrderDetailsModal/> 
    <div className='md:hidden  ml-6'>
        <OrderDetails/> 
    </div>
    </div>}
   
    {showAddProduct && <AddProductModal/>}
      
      
    </div>
  )
}

export default Products