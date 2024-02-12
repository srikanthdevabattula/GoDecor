import React from 'react'
import '../Loader/loader.css'
import start from '../../assets/authentication/start.png'
const RightComponent = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${start})`,
        
      };
  return (
    <div className='flex-1 sm:flex-2 sm:w-[100%] bg-cover bg-center h-[100vh]  p-[5%_5%_5%_0%] sm:p-1 ' style={backgroundImageStyle}>
    <div className=' h-[80vh] sm:h-[30vh] border-black border-t-[5px] border-r-[5px] border-b-[5px] sm:border-[5px] flex justify-center items-center '>
    <div className="svg-wrapper">
      {/* copy svg image and past it here */}
      <svg
        height="300"
        viewBox="0 0 100 100"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Loader</title>
        <defs>
          <linearGradient id="ttb" y2="1">

              {/* if you are thinking how it is animating 
                  we have added animation to svg here 
              */}

            <stop offset="100%" stopOpacity="1" stopColor="#322c2c">
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
          <text x="50%" y="40%" textAnchor="middle" alignmentBaseline="middle" fontSize="20" fill="url(#ttb)" className='loading-text'>GoDecor</text>
      </svg>
     
    </div>
    </div>
</div>
  )
}

export default RightComponent