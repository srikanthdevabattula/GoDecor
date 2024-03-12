import React, { useState } from 'react'
import faq from '../../assets/Faq/faq.png'
import faq1 from '../../assets/Faq/faq1.png'
import faq2 from '../../assets/Faq/faq2.png'
import { IoIosArrowDown } from "react-icons/io";
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
const Faq = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${faq})`,
        
      };
      const [question1DD,setQuestion1DD]=useState(false);
      const [question2DD,setQuestion2DD]=useState(false);
      const [question3DD,setQuestion3DD]=useState(false);
      const [question4DD,setQuestion4DD]=useState(false);
      const [question5DD,setQuestion5DD]=useState(false);
  
      const [question1DDD,setQuestion1DDD]=useState(false);
      const [question2DDD,setQuestion2DDD]=useState(false);
      const [question3DDD,setQuestion3DDD]=useState(false);
      const [question4DDD,setQuestion4DDD]=useState(false);
      const [question5DDD,setQuestion5DDD]=useState(false);
  
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

      const question11=()=>{
        setQuestion1DDD(!question1DDD)
    }

    const question22=()=>{
        setQuestion2DDD(!question2DDD)
    }


    const question33=()=>{
        setQuestion3DDD(!question3DDD)
    }


    const question44=()=>{
        setQuestion4DDD(!question4DDD)
    }


    const question55=()=>{
        setQuestion5DDD(!question5DDD)
    }
	const transition = { duration: 2, type: 'spring' };
	const { ref, inView } = useInView({
		triggerOnce: true, // Only trigger animation once
		threshold: 0.5, // Trigger animation when element is 50% in view
	});
	return (

		   <div ref={ref} className=' m-[2%] '>
          <motion.div   initial={{ y: '30%' }}
     // Start from below
    animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
    transition={transition} className='space-y-[40px]'> 
        <div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={backgroundImageStyle}>
    <div className='bg-[white] flex flex-col items-center justify-center rounded-tl-[37px] rounded-tr-[37px] h-[100px] w-[300px] sm:w-[180px]'>

        <h1 className='text-[#292F36] font-DMSerif text-[30px] sm:text-[20px]'>Faq’s</h1>
        <p className='text-[17px] sm:text-[13px] text-[#4D5053]'>Home / Faq</p>
    </div>
</div>
<div className=''>
    <h1 className='font-DMSerif text-[40px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[#292F36] text-center my-[40px]'>Every Question Answered</h1>
    <div className='flex sm:flex-col justify-center w-[100%] gap-[30px] px-[10%] '>
    <div className='faq-dd w-[550px] md:w-[450px] sm:w-[100%]  py-3 font-Roboto space-y-4 sm:space-y-3'>

<div className='dd-1   '>
    <div  className={` border-b-[1px] border-[#CDA274] flex justify-between font-DMSerif ${question1DD ? 'text-[#CDA274]' : 'text-[#292F36]'} items-center   text-[23px] md:text-[17px] sm:text-[13px] p-[15px] sm:p-[15px]`} onClick={question1}><h1>Services we Offer</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
   { question1DD? 
   <div className='p-[10px] sm:p-[5px] text-[20px] md:text-[14px] sm:text-[10px] border-b-[1px] border-[#CDA274] text-[#4D5053] font-Jost   space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>



<div className='dd-2  '>
<div  className={` border-b-[1px] border-[#CDA274] flex justify-between font-DMSerif ${question2DD ? 'text-[#CDA274]' : 'text-[#292F36]'} items-center   text-[23px] md:text-[17px] sm:text-[13px] p-[15px] sm:p-[15px]`} onClick={question2}><h1>How do I add an Interior Design</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
   { question2DD?
   <div  className='p-[10px] sm:p-[5px] text-[20px] md:text-[14px] sm:text-[10px] border-b-[1px] border-[#CDA274] text-[#4D5053] font-Jost   space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>

<div className='dd-3  '>
<div  className={` border-b-[1px] border-[#CDA274] flex justify-between font-DMSerif ${question3DD ? 'text-[#CDA274]' : 'text-[#292F36]'} items-center   text-[23px] md:text-[17px] sm:text-[13px] p-[15px] sm:p-[15px]`} onClick={question3}><h1>How do I change my address</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
  { question3DD? <div  className='p-[10px] sm:p-[5px] text-[20px] md:text-[14px] sm:text-[10px] border-b-[1px] border-[#CDA274] text-[#4D5053] font-Jost   space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>

<div className='dd-4 '>
<div  className={` border-b-[1px] border-[#CDA274] flex justify-between font-DMSerif ${question4DD ? 'text-[#CDA274]' : 'text-[#292F36]'} items-center   text-[23px] md:text-[17px] sm:text-[13px] p-[15px] sm:p-[15px]`} onClick={question4}><h1>How do I delete my account?</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
  { question4DD? <div  className='p-[10px] sm:p-[5px] text-[20px] md:text-[14px] sm:text-[10px] border-b-[1px] border-[#CDA274] text-[#4D5053] font-Jost   space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>

<div className='dd-5  '>
<div className={` border-b-[1px] border-[#CDA274] flex justify-between font-DMSerif ${question5DD ? 'text-[#CDA274]' : 'text-[#292F36]'} items-center   text-[23px] md:text-[17px] sm:text-[13px] p-[15px] sm:p-[15px]`} onClick={question5}><h1>How do I exit this app?</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
  { question5DD?<div  className='p-[10px] sm:p-[5px] text-[20px] md:text-[14px] sm:text-[10px] border-b-[1px] border-[#CDA274] text-[#4D5053] font-Jost   space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>

</div>
        <img src={faq1} alt='faq' className='w-[500px] h-[400px]  md:w-[250px] sm:w-[100%]'/>
    </div>



   
</div>


<div className=''>
    <h1 className='font-DMSerif text-[40px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[#292F36] text-center my-[40px]'>Project related questions</h1>
    <div className='flex sm:flex-col justify-center  w-[100%] gap-[30px] px-[10%] '>
    <div className='faq-dd w-[550px] md:w-[450px] sm:w-[100%]  py-3 font-Roboto space-y-4 sm:space-y-3 order-2'>

<div className='dd-1   '>
    <div  className={` border-b-[1px] border-[#CDA274] flex justify-between font-DMSerif ${question1DDD ? 'text-[#CDA274]' : 'text-[#292F36]'} items-center   text-[23px] md:text-[17px] sm:text-[13px] p-[15px] sm:p-[15px]`} onClick={question11}><h1>Services we Offer</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
   { question1DDD? 
   <div className='p-[10px] sm:p-[5px] text-[20px] md:text-[14px] sm:text-[10px] border-b-[1px] border-[#CDA274] text-[#4D5053] font-Jost   space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>



<div className='dd-2  '>
<div  className={` border-b-[1px] border-[#CDA274] flex justify-between font-DMSerif ${question2DDD ? 'text-[#CDA274]' : 'text-[#292F36]'} items-center   text-[23px] md:text-[17px] sm:text-[13px] p-[15px] sm:p-[15px]`} onClick={question22}><h1>How do I add an Interior Design</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
   { question2DDD?
   <div  className='p-[10px] sm:p-[5px] text-[20px] md:text-[14px] sm:text-[10px] border-b-[1px] border-[#CDA274] text-[#4D5053] font-Jost   space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>

<div className='dd-3  '>
<div  className={` border-b-[1px] border-[#CDA274] flex justify-between font-DMSerif ${question3DDD ? 'text-[#CDA274]' : 'text-[#292F36]'} items-center   text-[23px] md:text-[17px] sm:text-[13px] p-[15px] sm:p-[15px]`} onClick={question33}><h1>How do I change my address</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
  { question3DDD? <div  className='p-[10px] sm:p-[5px] text-[20px] md:text-[14px] sm:text-[10px] border-b-[1px] border-[#CDA274] text-[#4D5053] font-Jost   space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>

<div className='dd-4 '>
<div  className={` border-b-[1px] border-[#CDA274] flex justify-between font-DMSerif ${question4DDD ? 'text-[#CDA274]' : 'text-[#292F36]'} items-center   text-[23px] md:text-[17px] sm:text-[13px] p-[15px] sm:p-[15px]`} onClick={question44}><h1>How do I delete my account?</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
  { question4DDD? <div  className='p-[10px] sm:p-[5px] text-[20px] md:text-[14px] sm:text-[10px] border-b-[1px] border-[#CDA274] text-[#4D5053] font-Jost   space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>

<div className='dd-5  '>
<div className={` border-b-[1px] border-[#CDA274] flex justify-between font-DMSerif ${question5DDD ? 'text-[#CDA274]' : 'text-[#292F36]'} items-center   text-[23px] md:text-[17px] sm:text-[13px] p-[15px] sm:p-[15px]`} onClick={question55}><h1>How do I exit this app?</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
  { question5DDD?<div  className='p-[10px] sm:p-[5px] text-[20px] md:text-[14px] sm:text-[10px] border-b-[1px] border-[#CDA274] text-[#4D5053] font-Jost   space-y-6 sm:space-y-3'> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

</p>

</div>
:null}
        
</div>

</div>
        <img src={faq2} alt='faq' className='w-[500px] h-[400px] md:w-[250px] sm:w-[100%] order-1'/>
    </div>



   
</div>


</motion.div>
</div>
  )
}

export default Faq