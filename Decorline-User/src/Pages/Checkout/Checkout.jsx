import React, { useState } from 'react'
import sprop from '../../assets/props/sprop.png';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
    LanguageSelect,
  } from "react-country-state-city";
  import "react-country-state-city/dist/react-country-state-city.css";
  
const Checkout = () => {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
  return (
    <div className='space-y-[80px]'>
    <div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={{ backgroundImage: `url(${sprop})` }}>
<div className='bg-[white] flex flex-col items-center justify-center rounded-tl-[37px] rounded-tr-[37px] h-[100px] w-[300px] sm:w-[180px]'>
   <h1 className='text-[#292F36] font-DMSerif text-[30px] sm:text-[20px]'>Cart</h1>
   <p className='text-[17px] sm:text-[13px] text-[#4D5053]'>Home / Cart</p>
</div>
</div>

<div className='px-[10%]'>
    <div className='w-[70%] text-[#191C1F] font-Jost'> 
    <div className='billing'>
        <h1 className=' font-Jost font-semibold text-[18px]'>Billing Information</h1>
        <form action="" className='font-Jost  text-[#191C1F] text-[14px] space-y-[20px]'>
            <div className='flex space-x-2 items-center '>
                <div className='w-[25%] space-y-2'>
                    <h3>User name</h3>
                    <input type="text" name="" placeholder='First name' id="" className='w-[100%] border-[1px] rounded-[4px] p-2 outline-none' />
                </div>
                <div className='w-[25%]  space-y-2'>
                    <h3>Last name</h3>
                    <input type="text" name="" placeholder='Last name' id="" className='w-[100%] border-[1px] rounded-[4px] p-2 outline-none'/>
                </div>
                <div className='w-[50%]  space-y-2'>
                    <h3>Company Name <span className='text-[#929FA5]'>(Optional)</span></h3>
                    <input type="text" name="" id="" className='w-[100%] border-[1px] rounded-[4px] p-2 outline-none'/>
                </div>
            </div>
            <div>
                <h3>Address</h3>
                <input type="text" name="" id="" className='w-[100%] border-[1px] rounded-[4px] p-2 outline-none' />
            </div>

            <div>
            <div className='flex space-x-3 h-[44px]'>
                <div className='w-25%]'>
      <h6>Country</h6>
      <CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
        }}
        placeHolder="Select Country"
      />
      </div>
      <div className='w-[25%]'>
      <h6>State</h6>
      <StateSelect
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);
        }}
        placeHolder="Select State"
      />
      </div>
      <div className='w-[25%]'>
      <h6>City</h6>
      <CitySelect
        countryid={countryid}
        stateid={stateid}
        onChange={(e) => {
          console.log(e);
        }}
        placeHolder="Select City"
      />
      </div>

      <div className='w-[25%] '>
      <h6>Zip Code</h6>
      <input type="text" name="" id="" className='border-[1px] rounded-[4px] h-[100%] w-[100%]'/>
      </div>
     
    </div>
            </div>
       <div className='flex w-[100%] space-x-3 pt-[20px]'>
                <div className='w-[50%]'>
                    <h3>Email</h3>
                    <input type="email" name="" id="" className='w-[100%] border-[1px] rounded-[4px] p-2 outline-none'/>
                </div>
                <div className='w-[50%]'>
                    <h3>
                        Phone Number
                    </h3>
                    <input type="tel" name="" id="" className='w-[100%] border-[1px] rounded-[4px] p-2 outline-none'/>
                </div>
            </div>
           



        </form>
        </div>
         </div>
    <div>  </div>
</div>

</div>
  )
}

export default Checkout