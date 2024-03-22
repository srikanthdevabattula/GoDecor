import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllProducts, productsSelector} from "../redux/reducers/productReducer";
import Cookies from "js-cookie";

const MainLayout = () => {
	
	const dispatch = useDispatch();
	const allProducts = useSelector(productsSelector);
	
	useEffect(() => {
        const fetchData = async () => {
            try {
                // Dispatch the fetchAllProducts action
                await dispatch(fetchAllProducts());
            } catch (error) {
                console.log("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, [dispatch]);

    // Log allProducts whenever it changes
    useEffect(() => {
        console.log("Updated products:", allProducts);
    }, [allProducts]);
  
    const token = Cookies.get('token');
    if (!token) {
        return <Navigate to='/login' />;
    }
	
	return (
		<main>
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
};

export default MainLayout;
