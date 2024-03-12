import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PricingAndPlan from "../Pages/PricingAndPlan/PricingAndPlan";
import Faq from "../Pages/FAQ/Faq";
import Props from "../Pages/Props/Props";

import ProductDetails from "../Pages/SingleProp/SingleProp";
import Cart from "../Pages/cart/Cart";
import NotFound from "../Pages/NotFound/NotFound";
import Services from "../Pages/services/Services";
import Checkout from "../Pages/Checkout/Checkout";
import Orders from "../Pages/Orders/Orders";
import BookConsultation from "../Pages/BookConsultation/BookConsultation";

// export const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <MainLayout></MainLayout>,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Home />,
// 			},
// 			{
// 				path: "/aboutus",
// 				element: <AboutUs />,
// 			},
// 		],
// 	},
// ]);

const Routers = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<MainLayout></MainLayout>}
			>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/contactUs"
					element={<ContactUs />}
				/>
				<Route 
				path='/pricing'
				element={<PricingAndPlan/>}
				/>
					<Route 
				path='/faq'
				element={<Faq/>}
				/>
				<Route 
				path='/props'
				element={<Props/>}
				/>
				<Route
				path='/productDetails/:id'
				element={<ProductDetails/>}
				/>
				<Route 
				path='/cart'
				element={<Cart/>}
				/>
				<Route 
				path='/services'
				element={<Services/>}
				/>
				<Route 
				path='/checkout'
				element={<Checkout/>}
				/>
				<Route 
				path='/orders'
				element={<Orders/>}
				/>
				<Route 
				path='/bookConsultation'
				element={<BookConsultation/>}
				/>
				 <Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default Routers;
