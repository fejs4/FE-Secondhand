import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const response = await axios.get(`http://localhost:5000/products`);
        return response.data.data.products;
    }
);

export const postProducts = createAsyncThunk(
    'product/postProducts',
    async (id) => {
        const response = await axios.post(`http://localhost:5000/products/${id}`);
        return response.data;
    }
);

export const fetchProductsUser = createAsyncThunk(
    'product/fetchProductsUser',
    async () => {
        const response = await axios.get(`http://localhost:5000/product/user`);
        return response.data;
    }
);

export const fetchProductDetail = createAsyncThunk(
    'product/fetchProductDetail',
    async (id) => {
        const response = await axios.get(`http://localhost:5000/product/${id}`);
        return response.data;
    }
);

export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (id) => {
        const response = await axios.put(`http://localhost:5000/product/${id}`);
        return response.data;
    }
);

export const publishProduct = createAsyncThunk(
    'product/publishProduct',
    async (id) => {
        const response = await axios.post(`http://localhost:5000/product/publish/${id}`);
        return response.data;
    }
);

export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (id) => {
        const response = await axios.delete(`http://localhost:5000/product/${id}`);
        return response.data;
    }
);


const initialState = {
    temporary: {},
    loading: Boolean,
    error: null,
    user: {},
    products:{}
}

const productSlice = createSlice({
    name: 'produk',
    initialState,
    reducers: {
        setTemporary: (state, action) => {
            state.temporary = action.payload
        }
    },
    extraReducers: {

        // Fetching Product
        [fetchProducts.pending]: (state, action) => {
            console.log('pending')
            return { ...state, loading: true, error: null, }
        },
        [fetchProducts.fulfilled]: (state, action) => {
            console.log('fulfilled')
            return { ...state, products: action.payload }
        },
        [fetchProducts.rejected]: (state, action) => {
            console.log('rejected')
            return { ...state, error: action.error }
        }
        
        // Fetching Product
    }
})

export const { setTemporary } = productSlice.actions;
export default productSlice.reducer;