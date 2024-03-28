import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions, cartSelector } from '../../../redux/reducers/productReducer'
import { CiCircleRemove } from "react-icons/ci";
import { Link } from 'react-router-dom';

const CartItems = () => {
    const cartItems=useSelector(cartSelector)
    
const dispatch =useDispatch()
    const handleIncrement=(id)=>{
        
        dispatch(actions.increaseQuantity(id))
        dispatch(actions.total())
      }
      const handleDecrement=(id)=>{
        dispatch(actions.decreaseQuantity(id))
        dispatch(actions.total())
      }
      const handleDelete=(id)=>{
        dispatch(actions.deleteItem(id))
        dispatch(actions.total())
      }
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
                    <div className='flex items-center'>
                        <div className='flex items-center w-[45%] space-x-4 lg:space-x-2'>
                        <CiCircleRemove onClick={()=>handleDelete(item._id)} className='text-[30px] lg:text-[27px] md:text-[25px] sm:text-[20px] text-[#EE5858]' />
                        <img src={item.images[0]} alt="" className='h-[100px] w-[100px] lg:w-[80px] lg:h-[80px] sm:w-[35px] sm:h-[35px] rounded-[8px]'/>
                        <h3 className='text-[#191C1F] text-[14px] lg:text-[12px] md:text-[11px] sm:text-[7px] font-Roboto'>{item.name}</h3>

                        </div>

                        <div className='w-[15%] '>
                           <h1 className='text-center text-[#475156] text-[14px] lg:text-[12px] md:text-[11px] sm:text-[8px]'>₹ {item.price}</h1> 
                        </div>
                        <div className='space-x-3 sm:space-x-1 flex w-[25%] justify-center items-center  '>
                                <button className='border-[#E4E7E9] border-[1px] p-[7px_15px] lg:p-[5px_10px] md:p-[4px_9px] sm:p-[0px_3px]   text-[16px] lg:text-[14px] sm:text-[8px] rounded-[10px]' onClick={()=>handleDecrement(item._id)}>-</button>
                                <p className='text-[16px] lg:text-[15px] sm:text-[10px]  text-[#475156]'>{item.quantity}</p>
                                <button className='border-[#E4E7E9] border-[1px] p-[7px_15px] lg:p-[5px_10px] md:p-[4px_9px] sm:p-[0px_3px]  text-[16px] lg:text-[14px]  sm:text-[8px] rounded-[10px] ' onClick={()=>handleIncrement(item._id)}>+</button>
                            </div>

                            <div className='w-[15%] text-center text-[14px] lg:text-[12px] md:text-[11px] sm:text-[8px] font-medium text-[#191C1F]'>
                            ₹ {item.price * item.quantity}
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