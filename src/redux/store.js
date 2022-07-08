import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product" 
import authReducer from "./auth" 
import wishlistReducer from "./wishlist" 
import tawarReducer from "./tawar" 
import transaksiReducer from "./transaksi"


const rootReducer = {
    wishlist: wishlistReducer,
    product: productReducer,
    auth: authReducer,
    tawar: tawarReducer,
    transaksi:transaksiReducer
}

const store = configureStore({
    reducer: rootReducer
});

export default store;