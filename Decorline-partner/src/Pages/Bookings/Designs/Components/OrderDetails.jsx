import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DesignActions, DesignStatusSelector, OrderDataSelector } from '../../../../redux/reducers/DesignBookings'
import { MdOutlineFileDownload } from "react-icons/md";
const OrderDetails = () => {
    const dispatch= useDispatch()
    const status=useSelector(DesignStatusSelector)
 
    const orderDetails=useSelector(OrderDataSelector)
   console.log(orderDetails.designs)

  return (
    <div className='bg-[white] font-poppins w-[100%] p-[2%] rounded-[15px] h-[80vh] space-y-3 overflow-y-auto scrollbar-hide' style={{boxShadow: '4px 4px 15px 0px #0000001C'
    }}>
        <div className='border-[1px] text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px] '>
            <h3><h1 className='text-[13px]'>Order Details</h1></h3>
            <div className='flex items-center justify-between'><h1>Design Name</h1><p className='font-normal'>{orderDetails.name}</p></div>
            <div className='flex items-center justify-between'><h1>Order ID</h1><p className='font-normal'>{orderDetails.id}</p></div>
            <div className='flex items-center justify-between'><h1>Booking Date</h1 ><p className='font-normal'>{orderDetails.dateTime}</p></div>
        </div>

        <div className='border-[1px] text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px]'>
            <h1 className='text-[13px]'>User Preferences</h1>
            <div className='flex items-center justify-between'><h1>Budget</h1><p className='font-normal'>₹ 10,00,000 - ₹ 15,00,000</p></div>
            <div className='flex items-center justify-between'><h1>Space Measurements</h1><p className='font-normal'>10 ft X 15 ft</p></div>
            <div className='flex items-center justify-between'><h1>Design Type</h1 ><p className='font-normal'>Minimalist Design</p></div>
            <div className='flex items-center justify-between'><h1>Color Preference</h1 ><p className='font-normal'>Teal Green</p></div>
            <div>
            <h3 className='text-[13px]'>User Comments</h3>
            <p className='font-normal text-justify'>Looking for a minimalist kitchen design with clean lines, subtle tones, and functional yet elegant elements. Open to sleek storage solutions and a clutter-free, modern layout.</p>
            </div>
             </div>

             <div className='border-[1px] text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px]'>
            <h1 className='text-[13px]'>Coordinator Details</h1>
            <div className='flex items-center justify-between'><div className='flex items-center space-x-3'><img className='w-[30px]' src={orderDetails.profilePic} alt="" /><h3>{orderDetails.name}</h3></div><p className='font-normal text-[#0088D4] underline cursor-pointer'> Chat with Coordinator</p></div>
            <div className='flex items-center justify-between'><h1>Mobile No.</h1><p className='font-normal'>+91 1234567890</p></div>
       </div>
       {status==='Active'&&<div>
       {orderDetails.designs?
       <div className='border-[1px] text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px]'>
     <h4 className='text-[13px] font-poppins text-[#1C1C1C]'>Your Designs & Comments</h4>
     <button className='border-[1px] flex items-center rounded-[8px] text-[#023020] border-[#023020] p-2 text-[12px] font-medium'><MdOutlineFileDownload /><p>Download Designs</p></button>
    <div>
     <h3 className='text-[13px]'>Cost Estimate</h3>
     <p className='text-[12px]'>₹ {orderDetails.costEstimate}</p>
     </div>
     <div>
        <h3 className='text-[13px]'>Designer Comments</h3>
        <p className='text-[12px]'>{orderDetails.comments}</p>
     </div>
     </div>
    : <form action="" >
     <div className='border-[1px] text-[#1C1C1C] space-y-3 font-medium text-[13px] border-[#EDEDED] rounded-[15px] p-[10px]'>
         <h1 className='text-[13px] '>Upload Designs and Comments</h1>
         <div className='space-y-4'>
          <div className='border-[1px] border-[#023020] text-[#023020] rounded-[100px] w-[150px] h-[40px] flex items-center justify-center'>+ Upload Design</div>
          <p>Designs should be in jpeg, jpg, png or pdf format</p>
         </div>

         <div className='space-y-2'>
          <h4>Cost Estimate</h4>
          <input type="number" className='w-[100%] h-[46px] border-[1px] border-[#79747E] p-3 rounded-[4px]' placeholder={`Enter cost estimate ($)`}/><br />

         </div>

         <div className='space-y-2'>
          <h4>Designer Comments</h4>
         <input type="text" placeholder='Add your comments'  name="" id="" className='w-[100%] h-[100px] rounded-[4px] border-[1px] border-[#79747E] '/> </div>
        </div>
        <div className='px-3'>
        <button type="submit" className='border-[1px] w-[100%]  h-[40px] rounded-[10px]  bg-[#023020] text-[white] font-semibold text-[13px]'>Submit</button>
        </div>
</form>
} </div>}

{status==='Completed'&&<div>
      
       <div className='border-[1px] text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px]'>
     <h4 className='text-[13px] font-poppins text-[#1C1C1C]'>Your Designs & Comments</h4>
     <button className='border-[1px] flex items-center rounded-[8px] text-[#023020] border-[#023020] p-2 text-[12px] font-medium'><MdOutlineFileDownload /><p>Download Designs</p></button>
  
     <div>
        <h3 className='text-[13px]'>Designer Comments</h3>
        <p className='text-[12px]'>{orderDetails.comments}</p>
     </div>
     <div className='flex justify-between'><h3>Total Earnings</h3>
     <h4>₹ {orderDetails.costEstimate}</h4></div>
     </div></div>}
    </div>
  )
}

export default OrderDetails