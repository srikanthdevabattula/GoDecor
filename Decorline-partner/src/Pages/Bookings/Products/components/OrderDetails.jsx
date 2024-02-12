import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productDetailsSelector, productStatusSelector } from '../../../../redux/reducers/ProductBookings'
import checkbox from '../../../../assets/ProductOrders/Checkbox.png'
import checkbox1 from '../../../../assets/ProductOrders/Checkbox1.png'
import checkbox2 from '../../../../assets/ProductOrders/Checkbox2.png'
const OrderDetails = () => {
    const dispatch= useDispatch()
    const status =useSelector(productStatusSelector)
    const orderDetails=useSelector(productDetailsSelector)
   console.log(orderDetails.designs)

  return (
    <div className='bg-[white] font-poppins w-[100%] p-[2%] rounded-[15px] h-[80vh] space-y-3 overflow-y-auto scrollbar-hide' style={{boxShadow: '4px 4px 15px 0px #0000001C'
    }}>
      
       
      <div className='border-[1px] text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px] '>
           <h1 className='text-[13px]'>Order Details</h1>
            <div className='flex justify-between'>
              <h4>Product Name</h4>
              <h5 className='font-normal'>{orderDetails.itemName}</h5>
            </div>
            <div className='flex justify-between'>
              <h4>Qty</h4>
              <h5 className='font-normal'>1 Nos</h5>
            </div>
            <div className='flex justify-between'>
              <h4>Order ID</h4>
              <h5 className='font-normal'>12345</h5>
            </div>


{status!=='New Orders'?
        <div className='flex space-x-3'>
          
          <div className='flex h-[190px]'>
            <hr className='rotate-90 border-[1px] w-[140px] absolute mt-[89px] ml-[-63px] '/>
            <div className='flex flex-col h-[150px] mt-5 w-[15px] space-y-8 z-[100]'>
            <img src={checkbox} alt="" />
            {orderDetails.status==='Ready'  || orderDetails.status=== 'In-Transit' ||orderDetails.status==='Delivered' ?<img src={checkbox} className='bg-[white]' alt="" />:<img src={checkbox1} className='bg-[white]' alt="" />}
            {orderDetails.status==='In-Transit' || orderDetails.status==='Delivered' ?<img src={checkbox} className='bg-[white]' alt="" />:<img src={checkbox1} className='bg-[white]' alt="" />}
           {orderDetails.status==='Delivered'?<img src={checkbox} className='bg-[white]' alt="" /> :<img src={checkbox2} className='bg-[white]' alt="" />}
     </div>
     
          </div>
          <div className=' mt-3 space-y-3 h-[160px] text-[13px] text-[#A7A7A7]'>
            <div>
              <h1>Order placed</h1>
              <p className='text-[10px] text-[#EC8000]'>July 7 2022 08:00am</p>
            </div>

            <div>
              <h1>Order placed</h1>
              <p className='text-[10px] text-[#EC8000]'>July 7 2022 08:00am</p>
            </div>

            <div>
              <h1>Order in transitready for delivery</h1>
              <p className='text-[10px] text-[#EC8000]'>July 7 2022 08:00am</p>
            </div>

            <div>
              <h1>Order delivered</h1>
              <p className='text-[10px] text-[#EC8000]'>July 7 2022 08:00am</p>
            </div>
          </div>
        </div>:null
}

        </div>

        <div className='border-[1px] text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px] '>
           <h1 className='text-[13px]'>Customer Details</h1>
            <div className='flex items-center space-x-3'>
              <img src={orderDetails.profilePic} alt=""  className='w-[30px]'/>
              <h5 className='font-semibold text-[14px] text-[#1D1617] '>{orderDetails.name}</h5>
            </div>
            <div className='flex justify-between'>
              <h4>Mobile No.</h4>
              <h5 className='font-normal'>+91 1234567890</h5>
            </div>
            <div className='flex justify-between'>
              <h4 className='w-[65%]'>Address</h4>
              <h5 className='font-normal'>{orderDetails.address}</h5>
            </div>
        </div>

        <div className='border-[1px] text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px] '>
           <h1 className='text-[13px]'>Price Breakdown</h1>
            <div className='flex justify-between items-center space-x-3'>
           <h3>Subtotal</h3>
           <h5 className='font-normal '>XXXX</h5>
            </div>
            <div className='flex justify-between'>
              <h4>GST</h4>
              <h5 className='font-normal'>XXXX</h5>
            </div>
            <div className='flex justify-between border-t-[1px] pt-3'>
              <h4 className='w-[65%]'>Total Amount (Paid)</h4>
              <h5 className='font-normal'>XXXXX</h5>
            </div>
            <div className='flex justify-end'>
            <button className='text-[#007BD4] font-normal'>Download invoice</button>
            </div>
        </div>
            
      


    </div>
  )
}

export default OrderDetails