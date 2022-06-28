import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product" 
import authReducer from "./auth" 
import wishlistReducer from "./wishlist" 

const rootReducer = {
    wishlist: wishlistReducer,
    product: productReducer,
    auth: authReducer
}

const store = configureStore({
    reducer: rootReducer
});

export default store;