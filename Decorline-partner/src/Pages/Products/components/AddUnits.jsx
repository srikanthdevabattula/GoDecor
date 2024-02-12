import React from 'react'
import { useDispatch } from 'react-redux';
import { ProductsActions } from '../../../redux/reducers/Products';

const AddUnits = () => {
    const dispatch = useDispatch();
   

    return (
        <div className="modal-container font-poppins ">
        <div className="modal scrollbar-hide">
          <div className="modal-content space-y-2">
           
            <h2 className='text-[14px] text-[#202020]'>Enter number of Units to restock inventory</h2>
            <h4 className='text-[#1C1C1C] font-medium text-[12px]'>No. of Units</h4>
            <input type="number" name="" id="" placeholder='Enter no of new stocks to be added' className='border-[#79747E] border-[1px] outline-none focus:outline-none p-2 w-[100%] text-[12px] rounded-sm'/>
            <button   onClick={() => {dispatch(ProductsActions.setAddStock(false))}}
            className='border-[1px] p-2 w-[40%] rounded-[20px] text-[#ED3443] border-[#ED3443] text-[13px] font-semibold'>Cancel</button>
          <button className='border-[1px] p-2 w-[55%] rounded-[20px] bg-[#023020] text-[13px] font-semibold text-[white]'>Restock</button>
        

            {/* Add other order details */}
          </div>
        </div>
      </div>
  )
}

export default AddUnits