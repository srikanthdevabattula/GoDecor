import React, { useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Routers from "./routes";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import { fetchAllProducts } from "./redux/reducers/productReducer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    // Fetch products data when component mounts
    store.dispatch(fetchAllProducts())
      .then(() => setIsLoading(false)) // Set loading status to false after successful fetch
      .catch(error => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading status to false on error
      });
  }, []); // Run only once on component mount

  // Render loading indicator while fetching data
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render the app content once data is fetched
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routers />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
