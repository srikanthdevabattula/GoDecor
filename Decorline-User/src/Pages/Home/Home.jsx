import Achivements from "./components/Achivements";
import BestSellingProps from "./components/BestSellingProps";
import Discount from "./components/Discount";
import GetEstimate from "./components/GetEstimate";
import Hero from "./components/Hero";
import JoinWithus from "./components/JoinWithus";
import Reviews from "./components/Reviews";
import YourNeeds from "./components/YourNeeds";

const Home = () => {
	return (
		<section>
			{/* <h1 className="text-center">Home Page</h1> */}
			<Hero />
			<YourNeeds/>
			<GetEstimate/>
			<Reviews/>
			<BestSellingProps/>
			<Achivements/>
			<Discount/>
			<JoinWithus/>
		</section>
	);
};

export default Home;
