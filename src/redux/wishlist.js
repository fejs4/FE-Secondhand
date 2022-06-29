import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWishlist = createAsyncThunk(
    'wishlist/fetchWishlist',
    async (id) => {
        const token = localStorage.getItem('token')
        const response = await axios.get(`https://be-kel1.herokuapp.com/wishlist${id}`)
        return response.data.data.wishlist;
    }
);

export const postWishlist = createAsyncThunk(
    'wishlist/postWishlist',
    async (wishlist) => {
        const token = localStorage.getItem('token');
        const response = await axios({
            method: "POST",
            data: wishlist,
            url:`https://be-kel1.herokuapp.com/wishlist`,
            headers: {
                Authorization: token,
            }
        })
        return response.data;
    }
);
export const deleteWishlist = createAsyncThunk(
    'wishlist/deleteWishlist',
    async (wishlist) => {
        const token = localStorage.getItem('token');
        const response = await axios({
            method: "DELETE",
            data: wishlist,
            url:`https://be-kel1.herokuapp.com/wishlist${id}`,
            headers: {
                Authorization: token,
            }
        })
        return response.data;
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
            console.log('fetching pending')
            return { ...state, loading: true, error: null, }
        },
        [fetchWishlist.fulfilled]: (state, action) => {
            console.log('fetching fulfilled')
            return { ...state, wishlist: action.payload }
        },
        [fetchWishlist.rejected]: (state, action) => {
            console.log('fetching rejected')
            return { ...state, error: action.error }
        },

         // Post Wishlist
         [postWishlist.pending]: (state, action) => {
            console.log('post pending')
            return { ...state, loading: true, error: null }
        },
        [postWishlist.fulfilled]: (state, action) => {
            console.log('post fulfilled')
            console.log(action.payload);
        },
        [postWishlist.rejected]: (state, action) => {
            console.log('post rejected')
            return { ...state, error: action.error }
        },

        // Delete Wishlist
        [deleteWishlist.pending]: (state, action) => {
            console.log('delete pending')
            return { ...state, loading: true, error: null }
        },
        [deleteWishlist.fulfilled]: (state, action) => {
            console.log('delete fulfilled')
            console.log(action.payload);
        },
        [deleteWishlist.rejected]: (state, action) => {
            console.log('delete rejected')
            return { ...state, error: action.error }
        },

    }
})
export const { setLoading } = productSlice.actions;
export default productSlice.reducer;