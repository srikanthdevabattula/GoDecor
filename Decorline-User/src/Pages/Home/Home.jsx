import Achivements from "./components/Achivements";
import BestSellingProps from "./components/BestSellingProps";
import Discount from "./components/Discount";
import GetEstimate from "./components/GetEstimate";
import Hero from "./components/Hero";
import JoinWithus from "./components/JoinWithus";
import Reviews from "./components/Reviews";
import YourNeeds from "./components/YourNeeds";
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
const Home = () => {
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
    transition={transition} >
			{/* <h1 className="text-center">Home Page</h1> */}
			<Hero />
			<YourNeeds/>
			<GetEstimate/>
			<Reviews/>
			<BestSellingProps/>
			<Achivements/>
			<Discount/>
			<JoinWithus/>
			</motion.div>
		</div>
	);
};

export default Home;
