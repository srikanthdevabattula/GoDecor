import React from 'react'
import pricing from '../../assets/Pricing/pricing.png'
const PricingAndPlan = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${pricing})`,
        
      };
  return (
    <div className=' space-y-4'>
        <div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={backgroundImageStyle}>
            <div className='bg-[white] flex flex-col items-center justify-center rounded-tl-[37px] rounded-tr-[37px] h-[100px] w-[300px] sm:w-[180px]'>
                <h1 className='text-[#292F36] font-DMSerif text-[30px] sm:text-[20px]'>Pricing & Plan</h1>
                <p className='text-[17px] sm:text-[13px] text-[#4D5053]'>Home / Priceing</p>
            </div>
        </div>

        <div className='flex sm:flex-col items-center justify-center space-x-[30px] sm:space-x-0 sm:space-y-5 px-[10%] md:px-[5%]'>
            <div className='bg-[#F4F0EC] rounded-[33px] h-[700px] lg:h-[600px] md:h-[500px] w-[30%] sm:w-[70%] '>
                <div className='border-b-[#CDA274] border-b-[1px] flex flex-col text-[#292F36] items-center justify-center h-[40%]'>
                    <h1 className=' font-DMSerif text-[25px] lg:text-[20px] md:text-[17px]'>Design advices</h1>
                    <h3 className='font-DMSerif text-[85px] lg:text-[70px] md:text-[55px]'><span className='text-[25px]'>$</span>29</h3>
                    <p className='text-[25px] lg:text-[22px] md:text-[18px] font-DMSerif'>/month</p>
                </div>
                <div className='font-Jost text-[20px] lg:text-[16px] md:text-[13px] text-[#4D5053] text-center pt-[10%] space-y-3'>
                    <p>General living space advices</p>
<p>Rennovation advices</p>
<p>Interior design advices</p>
<p>Furniture reorganization</p>
<p>Up to 5 hours meetings</p>
                </div>
                <div className=' flex flex-col justify-center items-center mt-5'>
                <button className='text-[white] font-Jost font-semibold text-[18px] lg:text-[15px] md:text-[13px] bg-[#CDA274] rounded-[18px] p-[20px] lg:p-[16px]'>Get Started <span className='text-[#292F36]'>🡪</span></button></div>
            </div>
            <div className='bg-[#F4F0EC] rounded-[33px] h-[700px] lg:h-[600px] md:h-[500px] w-[30%] sm:w-[70%] ' style={{boxShadow: '0px 10px 20px 0px #88888840'}}>
                <div className='border-b-[#292F36] border-b-[1px] flex flex-col text-[#292F36] items-center justify-center h-[40%]'>
                    <h1 className=' font-DMSerif text-[25px] lg:text-[20px] md:text-[17px]'>Complete interior</h1>
                    <h3 className='font-DMSerif text-[85px] lg:text-[70px] md:text-[55px]'><span className='text-[25px]'>$</span><span className='text-[#CDA274]'>39</span></h3>
                    <p className='text-[25px] lg:text-[22px] md:text-[18px] font-DMSerif'>/month</p>
                </div>
                
                <div className='font-Jost text-[20px] lg:text-[16px] md:text-[13px] text-[#4D5053] text-center pt-[10%] space-y-3'>
                    <p>General living space advices</p>
<p>Rennovation advices</p>
<p>Interior design advices</p>
<p>Furniture reorganization</p>
<p>Up to 5 hours meetings</p>
                </div>
                <div className=' flex flex-col justify-center items-center mt-5'>
                <button className='text-[white] font-Jost font-semibold text-[18px] lg:text-[15px] md:text-[13px] bg-[#292F36] rounded-[18px] p-[20px] lg:p-[16px]'>Get Started <span className='text-[#CDA274]'>🡪</span></button></div>
                <h1 className='text-[white] font-Jost font-semibold text-[18px] lg:text-[14px] bg-[#292F36] rounded-[18px] text-center mx-[17%] p-2 relative top-[-49%] lg:top-[-48%] md:top-[-52%]'>Most Popular Plans</h1>
            </div>
            <div className='bg-[#F4F0EC] rounded-[33px] h-[700px] lg:h-[600px] md:h-[500px] w-[30%] sm:w-[70%] '>
                <div className='border-b-[#CDA274] border-b-[1px] flex flex-col text-[#292F36] items-center justify-center h-[40%]'>
                    <h1 className=' font-DMSerif text-[25px] lg:text-[20px] md:text-[17px]'>Furniture design
</h1>
                    <h3 className='font-DMSerif text-[85px] lg:text-[70px] md:text-[55px]'><span className='text-[25px]'>$</span>59</h3>
                    <p className='text-[25px] lg:text-[22px] md:text-[18px] font-DMSerif'>/month</p>
                </div>
                <div className='font-Jost text-[20px] lg:text-[16px] md:text-[13px] text-[#4D5053] text-center pt-[10%] space-y-3'>
                    <p>General living space advices</p>
<p>Rennovation advices</p>
<p>Interior design advices</p>
<p>Furniture reorganization</p>
<p>Up to 5 hours meetings</p>
                </div>
                <div className=' flex flex-col justify-center items-center mt-5'>
                <button className='text-[white] font-Jost font-semibold text-[18px] lg:text-[15px] md:text-[13px] bg-[#CDA274] rounded-[18px] p-[20px] lg:p-[16px]'>Get Started <span className='text-[#292F36]'>🡪</span></button></div>
            </div> </div>
        </div>
  )
}

export default PricingAndPlan