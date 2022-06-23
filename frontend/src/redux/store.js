import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product" 
import authReducer from "./auth" 

const rootReducer = {
    product: productReducer,
    auth: authReducer
}

const store = configureStore({
    reducer: rootReducer
});

export default store;