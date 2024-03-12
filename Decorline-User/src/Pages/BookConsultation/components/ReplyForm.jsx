import React from 'react'

const ReplyForm = () => {
  return (
    <div className='space-y-5'>
        <h3 className='font-DMSerif text-[25px] lg:text-[22px] md:text-[18px] sm:text-[15px] text-[#292F36]'>Leave a Reply</h3>
<form action="" className='space-y-3 text-[22px] lg:text-[19px] md:text-[16px] sm:text-[13px]'>
<div className='flex space-x-3'>
<input type="text" name="" id="" placeholder='Name' className='w-[50%] outline-none border-b-[1px] border-[#000000] placeholder:text-[#4D5053] py-2'/>
<input type="text" name="" id="" placeholder='Email' className='w-[50%]  outline-none border-b-[1px] border-[#000000] placeholder:text-[#4D5053] py-2' />
</div>
<div className='flex space-x-3'>
<input type="text" name="" id="" placeholder='Website' className='w-[50%] outline-none border-b-[1px] border-[#000000] placeholder:text-[#4D5053] py-2'/>
<input type="tel" name="" id="" placeholder='Phone' className='w-[50%]  outline-none border-b-[1px] border-[#000000] placeholder:text-[#4D5053] py-2' />
</div>
<textarea name="" id="" placeholder='Hello Iam Intrested in..' className='w-[100%] h-[150px] md:h-[100px] border-b-[1px] outline-none border-[black] placeholder:text-[#4D5053] py-2'></textarea>
   <div className='flex gap-1 items-center text-[#CDA274] text-[17px] lg:text-[15px] md:text-[12px] sm:text-[9px]'>
    <input type="checkbox" name="" id="" />
    <p>Save my name, email, and website in this browser for the next time I comment.</p>
   </div>
   <button className='bg-[#292F36] p-[25px_50px] lg:p-[20px_40px] md:p-[15px_30px] sm:p-[10px_20px] text-[white] rounded-[18px] font-Jost font-semibold text-[18px] lg:text-[16px] md:text-[13px] sm:text-[11px]'>Send Now →</button>
</form>
    </div>
  )
}

export default ReplyForm