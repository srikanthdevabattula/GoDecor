import React, { useState } from 'react';
import sprop from '../../assets/props/sprop.png';
import amazon from '../../assets/checkout/amazon.png';
import v from '../../assets/checkout/v.png';
import paypal from '../../assets/checkout/paypal.png';
import creditcard from '../../assets/checkout/CreditCard.png';
import doller from '../../assets/checkout/doller.png';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
    LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import OrderSummery from './components/OrderSummery';

const Checkout = () => {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('cash');

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    return (
        <div className='space-y-[80px]'>
            <div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={{ backgroundImage: `url(${sprop})` }}>
                <div className='bg-[white] flex flex-col items-center justify-center rounded-tl-[37px] rounded-tr-[37px] h-[100px] w-[300px] sm:w-[180px]'>
                    <h1 className='text-[#292F36] font-DMSerif text-[30px] sm:text-[20px]'>Cart</h1>
                    <p className='text-[17px] sm:text-[13px] text-[#4D5053]'>Home / Cart</p>
                </div>
            </div>

            <div className='px-[8%] lg:px-[5%] md:px-[10%] flex md:flex-col gap-3'>
                <div className='w-[70%] md:w-[100%] text-[#191C1F] font-Jost'>
                    <div className='billing'>
                        <h1 className=' font-Jost font-semibold text-[18px]'>Billing Information</h1>
                        <form action="" className='font-Jost  text-[#191C1F] text-[14px] space-y-[20px]'>
                            <div className='space-y-[20px]'>
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
            <div className='flex sm:flex-wrap space-x-3 sm:space-x-0 sm:gap-2 h-[44px] '>
                <div className='w-25%] sm:w-[45%] sm:text-[7px]'>
      <h6>Country</h6>
      <CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
        }}
        placeHolder="Select Country"
      />
      </div>
      <div className='w-[25%] sm:w-[45%] sm:text-[7px]'>
      <h6>State</h6>
      <StateSelect
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);
        }}
        placeHolder="Select State"
      />
      </div>
      <div className='w-[25%] sm:w-[45%] sm:text-[7px]'>
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

      <div className='w-[25%] sm:w-[45%] sm:text-[7px] '>
      <h6>Zip Code</h6>
      <input type="text" name="" id="" className='border-[1px] rounded-[4px] h-[100%] sm:h-[35px] w-[100%]'/>
      </div>
     
    </div>
            </div>
       <div className='flex w-[100%] space-x-3 pt-[20px] sm:pt-[50px] text-[12px] sm:text-[10px]'>
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

            {/* <div className='flex items-center space-x-2'>
                <input type="checkbox" name="" id="" />
                <p className='text-[14px] font-Roboto text-[#475156]'>Ship into different addres</p>
            </div> */}
            </div>

                              
                            <div className='paymentOptions text-[#191C1F] border-[1px] rounded-[4px]'>
                                <h3 className='text-[18px] font-Jost font-[600] p-[20px] '>
                                    Payment Option
                                </h3>

                                <div className='border-t-[1px] border-b-[1px] text-[14px] lg:text-[13px] md:text-[12px] flex flex-wrap items-center gap-2 justify-center py-[30px]'>
                                    <div className='flex flex-col items-center space-y-2 px-[40px] lg:px-[30px] md:px-[20px] border-r-[1px]'>
                                        <img src={doller} alt="$" className='lg:w-[25px] md:w-[20px]' />
                                        <p>Cash on Delivery</p>
                                        <input type="radio" name="paymentMethod" id="cash" checked={paymentMethod === 'cash'} onChange={() => handlePaymentMethodChange('cash')} />
                                    </div>
                                    <div className='flex flex-col items-center space-y-2 px-[40px] lg:px-[30px] md:px-[20px] border-r-[1px] '>
                                        <img src={creditcard} alt="d/c" className='lg:w-[25px] md:w-[20px]' />
                                        <p>Debit/Credit Card</p>
                                        <input type="radio" name="paymentMethod" id="card" checked={paymentMethod === 'card'} onChange={() => handlePaymentMethodChange('card')} />
                                    </div>

                                </div>
                            </div>

                            {paymentMethod === 'card' && (
                                <div className='p-4 text-[#191C1F] font-Jost space-y-3 cardDetails'>
                                    {/* Card details input fields */}
                                    <div className='space-y-2'>
                                        <h4 className='text-[14px] '>Name on Card</h4>
                                        <input type="text" name="" id="" className='w-[100%] px-2 outline-none border-[1px] rounded-[4px] h-[40px]' />
                                    </div>
                                    <div className='space-y-2'>
                                        <h4 className='text-[14px] '>Card Number</h4>
                                        <input type="text" name="" id="" className='w-[100%] px-2 outline-none border-[1px] rounded-[4px] h-[40px]' />
                                    </div>
                                    <div className='flex space-x-3'>
                                        <div className='space-y-2 w-[50%]'>
                                            <h4 className='text-[14px] '>Expire Date</h4>
                                            <input type="text" name="" id="" placeholder='DD/YY' className='w-[100%] px-2 outline-none border-[1px] rounded-[4px] h-[40px]' />
                                        </div>
                                        <div className='space-y-2 w-[50%]'>
                                            <h4 className='text-[14px] '>CVV</h4>
                                            <input type="text" name="" id="" className='w-[100%] px-2 outline-none border-[1px] rounded-[4px] h-[40px]' />
                                        </div>
                                    </div>
                                </div>
                            )}

                        </form>
                    </div>
                </div>
                <div className='w-[30%] md:w-[100%]'>
                    <OrderSummery />
                </div>
                <div>  </div>
            </div>

        </div>
    )
}

export default Checkout;
