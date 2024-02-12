import React from 'react'
import './loader.css'
import { motion } from 'framer-motion';
const Loader = () => {
  return (
    <motion.div
    initial={{ opacity:1}}
    animate={{ opacity:0.8 }}
    transition={{ duration: 4 }}
    exit={{ opacity: 0.5}}
     className="loader">
    <div className="svg-wrapper">
      {/* copy svg image and past it here */}
      <svg
        height="300"
        viewBox="0 0 500 100"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Loader</title>
        <defs>
          <linearGradient id="ttb" y2="1">

              {/* if you are thinking how it is animating 
                  we have added animation to svg here 
              */}

            <stop offset="100%" stopOpacity="1" stopColor="#333">
              <animate
                attributeName="offset"
                values="0;1;1;0"
                repeatCount="indefinite"
                repeatDur="05:00"
                dur="4s"
                begin="0s"
              />
            </stop>
            <stop offset="100%" stopOpacity="1" stopColor="#E0E0E0">
              <animate
                attributeName="offset"
                values="0;1;1;0"
                repeatCount="indefinite"
                repeatDur="05:00"
                dur="4s"
                begin="0s"
              />
            </stop>
            
            {/* end */}

          </linearGradient>
        </defs>
        {/* <path
          fill="url(#ttb)"
          d="M 10,30
          A 20,20 0,0,1 50,30
          A 20,20 0,0,1 90,30
          Q 90,60 50,90
          Q 10,60 10,30 z" /> */}
          <text x="82%" y="10%" textAnchor="middle" alignmentBaseline="middle" fontSize="40" fill="url(#ttb)" className='loading-text'>GoDecor</text>
      </svg>
      <div className=" font-bold text-[35px] lg:text-[30px] md:text-[25px] sm:text-[13px] text-center text-[white] font-poppins">Elevate Your Interior Design Business with Us</div>
     
    </div>
  </motion.div>

  )
}

export default Loader