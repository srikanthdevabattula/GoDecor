import React from 'react'
import { useDispatch } from 'react-redux';
import { ProductsActions } from '../../../redux/reducers/Products';
import binImg from '../../../assets/Products/delete.png'

const DeleteModal = () => {
    const dispatch = useDispatch();
   

    return (
        <div className="modal-container  ">
        <div className="modal scrollbar-hide">
          <div className="modal-content flex flex-col items-center gap-3">
           
            <h2>Are You Sure?</h2>
            <img src={binImg} alt="" />

            <p>Once you accept product will be permanently deleted</p>

         <div className='space-x-3 mt-3 w-[100%]'>
          <button   onClick={() => {dispatch(ProductsActions.setDeleteModal(false))}}
            className='border-[1px] p-2 w-[40%] rounded-[20px] text-[#023020] border-[#023020] text-[13px] font-semibold'>Deny</button>
          <button className='border-[1px] p-2 w-[55%] rounded-[20px] bg-[#ED3443] text-[13px] font-semibold text-[white]'>Delete</button>
         </div>

            {/* Add other order details */}
          </div>
        </div>
      </div>
  )
}

export default DeleteModal