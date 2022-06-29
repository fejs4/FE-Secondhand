import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (clicked) => {
        const response = await axios.get(`https://be-kel1.herokuapp.com/products`)
        const responseFilter = await axios.get(`https://be-kel1.herokuapp.com/product/filter?cat=${clicked}`)
        if (clicked === 'Semua') {
            return response.data.data.products
        }else{
            return responseFilter.data.data.filtered
        }
    }
);

export const fetchProductsUser = createAsyncThunk(
    'product/fetchProductsUser',
    async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://be-kel1.herokuapp.com/product/user`, {
            headers: { Authorization: token }

        })
        return response.data.data.products;
    }
);


export const fetchProductDetail = createAsyncThunk(
    'product/fetchProductDetail',
    async (id) => {
        const response = await axios.get(`https://be-kel1.herokuapp.com/product/${id}`);
        return response.data.data.product;
    }
);

export const postProducts = createAsyncThunk(
    'product/postProducts',
    async (product) => {
        const token = localStorage.getItem('token');
        const response = await axios({
            method: "POST",
            data: product,
            url:`https://be-kel1.herokuapp.com/product/`,
            headers: {
                Authorization: token,
            }
        })
        return response.data;
    }
);


export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (product,id) => {
        const token = localStorage.getItem('token');
        const response = await axios({
            method: "PUT",
            data: product,
            url:`https://be-kel1.herokuapp.com/product/${id}`,
            headers: {
                Authorization: token,
            }
        })
        return response.data;
    }
);

export const publishProduct = createAsyncThunk(
    'product/publishProduct',
    async (id) => {
        const token = localStorage.getItem('token');
        const response = await axios(
            {
                method: "POST",
                url: `https://be-kel1.herokuapp.com/product/publish/${id}`,
                headers: {
                    Authorization: token,
                }
            })
        return response.data;
    }
);

export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (id) => {
        const response = await axios.delete(`https://be-kel1.herokuapp.com/product/${id}`);
        return response.data;
    }
);


const initialState = {
    loading: false,
    loadingWeb:false,
    error: null,
    user: {},
    products: {},
    detailProduct: {},
    productUser: {},
    idProduct: null
}

const productSlice = createSlice({
    name: 'produk',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setLoadingWeb: (state, action) => {
            state.loadingWeb = action.payload
        },
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
        },

        // Fetching Product User
        [fetchProductsUser.pending]: (state, action) => {
            console.log('pending')
            return { ...state, loading: true, error: null, }
        },
        [fetchProductsUser.fulfilled]: (state, action) => {
            console.log('fulfilled')
            return { ...state, productUser: action.payload }
        },
        [fetchProductsUser.rejected]: (state, action) => {
            console.log('rejected')
            return { ...state, error: action.error }
        },

        // Publish Product
        [publishProduct.pending]: (state, action) => {
            console.log('pending')
            return { ...state, loading: true, error: null }
        },
        [publishProduct.fulfilled]: (state, action) => {
            console.log(action.payload)
            console.log('fulfilled')
        },
        [publishProduct.rejected]: (state, action) => {
            console.log('rejected')
            console.log(action.payload)
            return { ...state, error: action.error }
        },

        // Fetching Product Detail
        [fetchProductDetail.pending]: (state, action) => {
            console.log('pending')
            return { ...state, loading: true, error: null }
        },
        [fetchProductDetail.fulfilled]: (state, action) => {
            console.log('fulfilled')
            return { ...state, detailProduct: action.payload }
        },
        [fetchProductDetail.rejected]: (state, action) => {
            console.log('rejected')
            return { ...state, error: action.error }
        },

        // Post Product
        [postProducts.pending]: (state, action) => {
            console.log('pending')
            return { ...state, loading: true, error: null }
        },
        [postProducts.fulfilled]: (state, action) => {
            console.log('fulfilled')
            console.log(action.payload);
            return { ...state, idProduct: action.payload.data.product.id }
        },
        [postProducts.rejected]: (state, action) => {
            console.log('rejected')
            return { ...state, error: action.error }
        },

        // Post Product
        [updateProduct.pending]: (state, action) => {
            console.log('pending')
            return { ...state, loading: true, error: null }
        },
        [updateProduct.fulfilled]: (state, action) => {
            console.log('fulfilled')
            console.log(action.payload)
        },
        [updateProduct.rejected]: (state, action) => {
            console.log('rejected')
            console.log(action.error)
            return { ...state, error: action.error }
        }
    }
})
export const { setLoading,setLoadingWeb } = productSlice.actions;
export default productSlice.reducer;