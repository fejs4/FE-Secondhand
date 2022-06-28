import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWishlist = createAsyncThunk(
    'wishlist/wishlist',
    async () => {
        
    }
);

const initialState = {
    loading: false,
    error: null,
    wishlist: {}
}

const productSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    },
    extraReducers: {

        // Fetching Wishlist
        [fetchWishlist.pending]: (state, action) => {
            console.log('pending')
            return { ...state, loading: true, error: null, }
        },
        [fetchWishlist.fulfilled]: (state, action) => {
            console.log('fulfilled')
            return { ...state, wishlist: action.payload }
        },
        [fetchWishlist.rejected]: (state, action) => {
            console.log('rejected')
            return { ...state, error: action.error }
        },

    }
})
export const { setLoading } = productSlice.actions;
export default productSlice.reducer;