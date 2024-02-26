import React, { useEffect, useRef } from 'react'
import props from '../../assets/props/props.png'
import Products from './components/products';

const Props = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${props})`,
        
      };
      const productsRef = useRef(null);

      useEffect(() => {
          // Scroll to the Products component when the component mounts
          productsRef.current.scrollIntoView({ behavior: 'smooth' });
      }, []);
  return (
    <div className=' space-y-4' ref={productsRef}>
        <div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={backgroundImageStyle}>
            <div className='bg-[white] flex flex-col items-center justify-center rounded-tl-[37px] rounded-tr-[37px] h-[100px] w-[300px] sm:w-[180px]'>
                <h1 className='text-[#292F36] font-DMSerif text-[30px] sm:text-[20px]'>Props</h1>
                <p className='text-[17px] sm:text-[13px] text-[#4D5053]'>Home / Props</p>
            </div>
        </div>
            <Products/>

        </div>
  )
}

export default Props