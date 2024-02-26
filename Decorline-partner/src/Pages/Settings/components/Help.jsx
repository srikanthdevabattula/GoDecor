import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
const Help = () => {
    const [question1DD,setQuestion1DD]=useState(false);
    const [question2DD,setQuestion2DD]=useState(false);
    const [question3DD,setQuestion3DD]=useState(false);
    const [question4DD,setQuestion4DD]=useState(false);
    const [question5DD,setQuestion5DD]=useState(false);

    const question1=()=>{
        setQuestion1DD(!question1DD)
    }

    const question2=()=>{
        setQuestion2DD(!question2DD)
    }


    const question3=()=>{
        setQuestion3DD(!question3DD)
    }


    const question4=()=>{
        setQuestion4DD(!question4DD)
    }


    const question5=()=>{
        setQuestion5DD(!question5DD)
    }

  return (
    <div className='p-4 space-y-3 flex flex-col justify-between font-poppins h-[70vh] overflow-y-auto scrollbar-hide '>
  <div className='faq-dd  py-3 font-Roboto space-y-8 sm:space-y-3'>

<div className='dd-1 border-[0.5px] border-[#D3D3D3] rounded-[8px]  '>
    <div className='border-b-[0.5px] border-[#D3D3D3] flex justify-between items-center  font-medium text-[14px] md:text-[12px] sm:text-[10px] p-[15px] sm:p-[15px]' onClick={question1}><h1>Services we Offer</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
   { question1DD? <div className='p-[10px] sm:p-[5px] text-[13px] sm:text-[10px] font-medium space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>



<div className='dd-2 border-[0.5px] border-[#D3D3D3] rounded-[8px] '>
<div className='border-b-[0.5px] border-[#D3D3D3] flex justify-between items-center  font-medium text-[14px] md:text-[12px] sm:text-[10px] p-[15px] sm:p-[15px]' onClick={question2}><h1>How do I add an Interior Design</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
   { question2DD?<div className='p-[10px] sm:p-[5px] text-[13px] sm:text-[10px] font-medium space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>

<div className='dd-3 border-[0.5px] border-[#D3D3D3] rounded-[8px] '>
<div className='border-b-[0.5px] border-[#D3D3D3] flex justify-between items-center  font-medium text-[14px] md:text-[12px] sm:text-[10px] p-[15px] sm:p-[15px]' onClick={question3}><h1>How do I change my address</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
  { question3DD? <div className='p-[10px] sm:p-[5px] text-[13px] sm:text-[10px] font-medium space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>

<div className='dd-4 border-[0.5px] border-[#D3D3D3] rounded-[8px] '>
<div className='border-b-[0.5px] border-[#D3D3D3] flex justify-between items-center  font-medium text-[14px] md:text-[12px] sm:text-[10px] p-[15px] sm:p-[15px]' onClick={question4}><h1>How do I delete my account?</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
  { question4DD? <div className='p-[10px] sm:p-[5px] text-[13px] sm:text-[10px] font-medium space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>

<div className='dd-5 border-[0.5px] border-[#D3D3D3] rounded-[8px]  '>
<div className='border-b-[0.5px] border-[#D3D3D3] flex justify-between items-center  font-medium text-[14px] md:text-[12px] sm:text-[10px] p-[15px] sm:p-[15px]' onClick={question5}><h1>How do I exit this app?</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
  { question5DD?<div className='p-[10px] sm:p-[5px] text-[13px] sm:text-[10px] font-medium space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>

</div>

<div className='flex justify-between text-[#023020] text-[14px] sm:text-[10px]'>
    <button className='w-[48%] border-[1px] h-[41px] rounded-[10px] border-[#023020] flex items-center justify-center'><CiMail className='mr-3'/> Write To Us</button>
    <button className='w-[48%] border-[1px] h-[41px] rounded-[10px] border-[#023020] flex items-center justify-center'><IoCallOutline className='mr-3'/> Call Us</button>
</div>
    </div>
  )
}

export default Help