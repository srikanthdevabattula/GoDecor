import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { BestProducts } from '../../../data/bestSelling'
import { productsSelector } from '../../../redux/reducers/productReducer'
import arrow from '../../../assets/products/arrow.png'
import { Link } from 'react-router-dom';
const BestSellingProps = () => {
  const products=useSelector(productsSelector)
  const bestSellingProducts=products.slice(0,4)

  return (
    <div>
        <h1 className='text-[50px] lg:text-[40px] md:text-[35px] sm:text-[25px] text-center my-[40px] text-[#292F36] font-DMSerif'>Best Selling Props</h1>
        <div className='px-[10%] sm:px-[5%] flex justify-center flex-wrap gap-10 sm:gap-5'>
          {
            bestSellingProducts.map((product,index)=>(
              <Link to={`/productDetails/${product._id}`} key={index}> <div className='w-[400px] lg:w-[350px] md:w-[250px] sm:w-[120px]'>
               <div className='space-y-2'>
               {product.images && (
  <img src={product.images.slice(0,1)} alt=""className='w-[100%] h-[400px] md:h-[250px] sm:h-[120px]'/>
)}
                <div className='flex justify-between items-center'>
                  <div className='space-y-2'>
                    <h1 className='text-[#292F36] font-DMSerif text-[25px] lg:text-[22px] md:text-[17px] sm:text-[10px]'>{product.name}</h1>
                    <p className='font-poppins font-semibold text-[22px] lg:text-[18px] md:text-[15px] sm:text-[9px]'>$ {product.price}</p>
                  </div>
                  <img src={arrow} alt=""  className='md:w-[30px] lg:w-[40px] w-[50px] sm:w-[25px]'/>
                </div>
               </div>
              </div></Link>
            ))
          }
            
        </div>
        
        <div className='text-center text-[#4E5471] font-poppins text-[40px] lg:text-[35px] md:text-[30px] sm:text-[18px] mt-5'>
         <Link to='/props'><button>View All 🡪</button></Link> 
        </div>
    </div>
  )
}

export default BestSellingProps