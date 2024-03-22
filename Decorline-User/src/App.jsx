import React, { useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Routers from "./routes";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";



function ScrollToTop() {
 
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  

function App() {



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
