import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createTransaksi = createAsyncThunk(
    'transaksi/createTransaksi',
    async (data) => {
        const token = localStorage.getItem('token');
        const response = await axios({
            method: "POST",
            data: data,
            url:`https://be-kel1.herokuapp.com/transaksi`,
            headers: {
                Authorization: token,
            }
        })
        return response.data;
    }
)

export const updateTransaksi = createAsyncThunk(
    'transaksi/updateTransaksi',
    async ({data, id}) => {
        const token = localStorage.getItem('token');
        const response = await axios({
            method: "PUT",
            data: data,
            url:`https://be-kel1.herokuapp.com/transaksi/${id}`,
            headers: {
                Authorization: token,
            }
        })
        return response.data;
    }
);

export const fetchTransaksiSeller = createAsyncThunk(
    'transaksi/fetchTransaksi',
    async () => {
        const token = localStorage.getItem('token')
        const response = await axios.get(`https://be-kel1.herokuapp.com/transaksi`,
        {headers: {
            Authorization: token,
        }})
        return response.data;
    }
);


const initialState = {
    loading: false,
    error: null,
    message:'',
    success: false,
    transaksiSeller: {}

}

const transaksiSlice = createSlice({
    name: 'tawar',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setSuccess: (state, action) => {
            state.success = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
    },
    extraReducers: {

        // Create Transaksi 
        [createTransaksi.pending]: (state, action) => {
            console.log('fetching pending')
            return { ...state, loading: true, error: null, }
        },
        [createTransaksi.fulfilled]: (state, action) => {
            console.log('fetching fulfilled')
            console.log(action.payload)
        },
        [createTransaksi.rejected]: (state, action) => {
            console.log('fetching rejected')
            return { ...state, error: action.error }
        },

        // Update Transaksi 
        [updateTransaksi.pending]: (state, action) => {
            console.log('fetching pending')
            return { ...state, loading: true, error: null, }
        },
        [updateTransaksi.fulfilled]: (state, action) => {
            console.log('fetching fulfilled')
            console.log(action.payload)
        },
        [updateTransaksi.rejected]: (state, action) => {
            console.log('fetching rejected')
            console.log(action.payload)
            return { ...state, error: action.error }
        },

        // fetchTransaksiSeller
        [fetchTransaksiSeller.pending]: (state, action) => {
            return { ...state, loading: true, error: null, }
        },
        [fetchTransaksiSeller.fulfilled]: (state, action) => {
            return { ...state, transaksiSeller: action.payload.data }
        },
        [fetchTransaksiSeller.rejected]: (state, action) => {
            return { ...state, error: action.error }
        },
         
    }
})
export const { setLoading,setSuccess ,setMessage } = transaksiSlice.actions;
export default transaksiSlice.reducer;