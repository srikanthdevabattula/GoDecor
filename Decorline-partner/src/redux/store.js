import { configureStore } from "@reduxjs/toolkit";

import { sidebarReducer } from "./reducers/sidebar";

import { ConsultationStatusReducer } from "./reducers/Consultation";
import { designBookingsReducer } from "./reducers/DesignBookings";
import { productBookingsReducer } from "./reducers/ProductBookings";
import { ProductsReducer } from "./reducers/Products";

export const store = configureStore({
    reducer:{
        sidebarReducer,
        ConsultationStatusReducer,
        designBookingsReducer,
        productBookingsReducer,
        ProductsReducer
        
    }
})