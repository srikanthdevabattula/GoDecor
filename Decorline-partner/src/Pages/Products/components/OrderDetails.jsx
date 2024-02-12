import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddStockModal, ProductsActions, ViewProductSelector, deleteModalSelector, editModalSelector } from '../../../redux/reducers/Products'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import AddUnits from './AddUnits';


const OrderDetails = () => {
    const dispatch= useDispatch()
   
    const orderDetails=useSelector(ViewProductSelector)
   const showUnits=useSelector(AddStockModal)
    const show=useSelector(editModalSelector)
    const showDelete=useSelector(deleteModalSelector)
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
       
        {orderDetails.images.map((data,index)=>(
        <SwiperSlide><img src={orderDetails.images[index]} alt="" /></SwiperSlide>
         ))} </Swiper>

<div className='border-[1px] font-poppins text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px] '>
     <h1>Product Details</h1>
     <div className='flex justify-between   items-center '>
      <h1>Product Name</h1>
      <h3 className='font-normal'>{orderDetails.name}</h3>
     </div>
     <div className='flex justify-between   items-center '>
      <h1>Price</h1>
      <h3 className='font-normal'>{orderDetails.cost}</h3>
     </div>
     <div className='flex justify-between   items-center '>
      <h1>Product ID</h1>
      <h3 className='font-normal'>{orderDetails.id}</h3>
     </div>
     <div className='flex justify-between   items-center '>
      <h1>Dimensions</h1>
      <h3 className='font-normal'>70" X 36" X 30"</h3>
     </div>
     <div className='flex justify-between   items-center '>
      <h1>Stock</h1>
      <h3 className='font-normal'>{orderDetails.stock} Units <span className='underline text-[#0088D4]' onClick={()=>{dispatch(ProductsActions.setAddStock(true))}}>Add</span></h3>
     </div>
       </div>


       <div className='border-[1px] text-[#1C1C1C] space-y-3 font-medium text-[12px] border-[#EDEDED] rounded-[15px] p-[10px] '>
     <h1>Description</h1>
     <p className='text-justify text-[11px] text-[black] font-normal'>Introducing our eco-conscious Vegan Leather Chair, a perfect blend of style, comfort, and sustainability. Crafted with high-quality, cruelty-free materials, this chair embodies luxurious comfort while being environmentally friendly. <br /> <br />

Designed with a sleek and modern aesthetic, our Vegan Leather Chair complements any space, whether it's your office, living room, or study. Its supple vegan leather upholstery provides the look and feel of genuine leather without compromising on ethics.</p>
       </div>

       <div className='space-x-1 font-semibold text-[13px]'>
        <button className='w-[48%] h-[36px] text-[#ED3443] border-[#ED3443] border-[1px] rounded-[20px]' onClick={()=>{dispatch(ProductsActions.setDeleteModal(true))}}>Delete</button>
        <button className='w-[48%] h-[36px] text-[white] rounded-[20px] bg-[#023020]' onClick={()=>{dispatch(ProductsActions.setEditModal(true))}}>Edit</button>
       </div>
     
<div>

   
</div>
{show&&
<EditModal  />}
{showDelete&&
<DeleteModal  />}
{showUnits&&
<AddUnits/>
}


    </div>
  )
}

export default OrderDetails