import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import { DesignsActions, deleteDesignSelector, editDesignSelector, viewDesignSelector } from '../../../redux/reducers/Designs';


const OrderDetails = () => {
    const dispatch= useDispatch()
   
    const designDetails=useSelector(viewDesignSelector)
    
    const show=useSelector(editDesignSelector)
    const showDelete=useSelector(deleteDesignSelector)
  return (
    <div className='bg-[white] w-[100%] font-poppins  p-[2%] rounded-[15px] h-[80vh] space-y-3 overflow-y-auto scrollbar-hide' style={{boxShadow: '4px 4px 15px 0px #0000001C'
    }}>
      
       <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
        {designDetails.images.map((data,index)=>(
        <SwiperSlide><img src={data} alt="" /></SwiperSlide>
         ))} </Swiper>

<div className='border-[1px] font-poppins text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px] '>
     <h1>Design Details</h1>
     <div className='flex justify-between   items-center '>
      <h1>Design Name</h1>
      <h3 className='font-normal'>{designDetails.name}</h3>
     </div>
     <div className='flex justify-between   items-center '>
      <h1>Price</h1>
      <h3 className='font-normal'>₹ {designDetails.price}</h3>
     </div>
     <div className='flex justify-between   items-center '>
      <h1>Design ID</h1>
      <h3 className='font-normal'>{designDetails.id}</h3>
     </div>
     <div className='flex justify-between   items-center '>
      <h1>Dimensions</h1>
      <h3 className='font-normal'>70ft X 36ft</h3>
     </div>
       </div>



       <div className='border-[1px] font-poppins text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px] '>
     <h1>Price Breakdown</h1>
     <div className='flex justify-between   items-center '>
      <h1>Grey Sofa 3X1</h1>
      <h3 className='font-normal'>{designDetails.price}</h3>
     </div>
     <div className='flex justify-between   items-center '>
      <h1>3 X Sofa Chairs</h1>
      <h3 className='font-normal'>₹ {designDetails.price}</h3>
     </div>
     <div className='flex justify-between   items-center '>
      <h1>2 X Square Chairs</h1>
      <h3 className='font-normal'>{designDetails.price}</h3>
     </div>
     <div className='flex justify-between   items-center '>
      <h1>Service and Design Fee</h1>
      <h3 className='font-normal'>₹ 2,00,000</h3>
     </div>
       </div>


       <div className='border-[1px] text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px] '>
     <h1>Description</h1>
     <p className='text-justify text-[11px] text-[black] font-normal'>Introducing our eco-conscious Vegan Leather Chair, a perfect blend of style, comfort, and sustainability. Crafted with high-quality, cruelty-free materials, this chair embodies luxurious comfort while being environmentally friendly. <br /> <br />

Designed with a sleek and modern aesthetic, our Vegan Leather Chair complements any space, whether it's your office, living room, or study. Its supple vegan leather upholstery provides the look and feel of genuine leather without compromising on ethics.</p>
       </div>

       <div className='space-x-1 font-semibold text-[13px]'>
        <button className='w-[48%] h-[36px] text-[#ED3443] border-[#ED3443] border-[1px] rounded-[20px]' onClick={()=>{dispatch(DesignsActions.setDeleteDesign(true))}}>Delete</button>
        <button className='w-[48%] h-[36px] text-[white] rounded-[20px] bg-[#023020]' onClick={()=>{dispatch(DesignsActions.setEditDesign(true))}}>Edit</button>
       </div>
     
<div>

   
</div>
{show&&
<EditModal  />}
{showDelete&&
<DeleteModal  />} 


    </div>
  )
}

export default OrderDetails