import React from 'react'
import sprop from '../../assets/props/sprop.png';
import Address from './components/Address';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
const Cart = () => {
  return (
    <div className='space-y-[40px]'>
         <div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={{ backgroundImage: `url(${sprop})` }}>
    <div className='bg-[white] flex flex-col items-center justify-center rounded-tl-[37px] rounded-tr-[37px] h-[100px] w-[300px] sm:w-[180px]'>
        <h1 className='text-[#292F36] font-DMSerif text-[30px] sm:text-[20px]'>Cart</h1>
        <p className='text-[17px] sm:text-[13px] text-[#4D5053]'>Home / Cart</p>
    </div>
</div>

<div className='px-[10%]  sm:px-[5%] flex md:flex-col space-x-3 md:space-x-0 md:space-y-3'>
    <div className='l w-[70%] md:w-[100%] space-y-[30px]'>
<Address/>
<CartItems/>
    </div>
    <div className='r w-[30%] md:w-[100%]'>
        <CartTotal/>
    </div>
</div>
</div>
  )
}

export default Cart