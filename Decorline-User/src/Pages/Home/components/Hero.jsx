import hero from '../../../assets/home/Photo.jpg'

const Hero = () => {
	const backgroundImageStyle = {
        backgroundImage: `url(${hero})`,
        
      };
	return (
		<div className=" bg-cover bg-center h-[80vh] md:h-[60vh] sm:h-[40vh] rounded-bl-[200px] sm:rounded-bl-[0px]" style={backgroundImageStyle}>
		

		<div className='flex flex-col h-[100%]  justify-center sm:items-center pl-[10%] sm:pl-0 w-[40%] sm:w-[100%] space-y-2 '>
			<h1 className='text-[#292F36] font-DMSerif text-[70px] lg:text-[55px] md:text-[40px] sm:text-[25px]'>High Quality 
Furniture</h1>
<p className='text-[#4D5053] text-[18px] lg:text-[16px] md:text-[14px] sm:text-[11px] text-center font-Jost'>Visit our services where we provide high-quality furniture for your space.</p>
<button className='bg-[#292F36] rounded-[18px] text-[white] text-[13px] lg:text-[12px]  w-[210px] md:w-[170px] p-3 font-Jost font-semibold'>Get Started <span className='text-[#CDA274]'>🡪</span></button>
		</div>
		</div>
	);
};

export default Hero;
