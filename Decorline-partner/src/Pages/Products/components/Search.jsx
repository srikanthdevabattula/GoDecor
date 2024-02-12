import React, { useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions, ProductsSelector } from '../../../redux/reducers/Products';
const Search = () => {
    const products=useSelector(ProductsSelector)
  const dispatch= useDispatch()
    const handleViewProduct=(product)=>{
            dispatch(ProductsActions.setView(true))
            dispatch(ProductsActions.viewProduct(product))
    }

    
    useEffect(() => {
		dispatch(ProductsActions.setView(false))
        dispatch(ProductsActions.viewProduct(null))
	  }, []);

   

  return (
    <div className='font-poppins '>
    <div className=' border-b-[1px] border-[#D5D5D5] h-[62px] sm:h-[100px] flex sm:flex-wrap  items-center space-x-3 sm:space-x-0 px-2' >
       <div className='w-[60%] sm:w-[100%] border-[1.5px] border-[#02302066] rounded-[8px] flex items-center'><input type="search" name="" id="" placeholder='Search' className='w-[90%] outline-none border-[0px] rounded-[8px] mr-1'/><IoSearchOutline/></div>
       <button className=' bg-[#023020] p-3 sm:p-1 w-[40%] sm:w-[100%] text-[13px] sm:text-[11px] text-[white] font-semibold rounded-[8px] sm:h-[30px]' onClick={()=>{dispatch(ProductsActions.setAddproduct(true))}}>Add New Product</button>
        </div>
        <div className='overflow-y-auto scrollbar-hide h-[70vh] '>
        {products.map((product,index)=>(
             <div className='p-2 border-b-[1px] my-1 '
             onClick={()=>handleViewProduct(product)}
             >
                <div className='flex items-center text-[#000000] text-[11px] sm:text-[9px] justify-between'>
                    <div className='flex items-center space-x-4 sm:space-x-2'>
                    <img src={product.img} alt="" className=' rounded-[8px] sm:w-[30%] ' />
                    <div className='space-y-2   '>
                        <h4>{product.name}</h4>
                        <h4>Stock</h4>
                    </div></div>
                    <div className='space-y-2  font-semibold'><h3>₹ {product.cost}</h3> <h4>{product.stock} Units</h4></div>
                   
                </div>
                 </div>
        ))
       
            
       }</div>
       </div>
  )
}

export default Search