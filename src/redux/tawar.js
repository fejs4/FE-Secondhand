import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTawar = createAsyncThunk(
    'tawar/fetchTawar',
    async () => {
        const token = localStorage.getItem('token')
        const response = await axios.get(`https://be-kel1.herokuapp.com/tawar`,
        {headers: {
            Authorization: token,
        }})
        return response.data;
    }
);

export const postTawar = createAsyncThunk(
    'wishlist/postTawar',
    async (data) => {
        const token = localStorage.getItem('token');
        const response = await axios({
            method: "POST",
            data: data,
            url:`https://be-kel1.herokuapp.com/tawar`,
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
    tawar: {}

}

const tawarSlice = createSlice({
    name: 'tawar',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    },
    extraReducers: {

        // Fetching Tawar
        [fetchTawar.pending]: (state, action) => {
            console.log('fetching pending')
            return { ...state, loading: true, error: null, }
        },
        [fetchTawar.fulfilled]: (state, action) => {
            console.log('fetching fulfilled')
            console.log(action.payload)
            return { ...state, tawar: action.payload.data }
        },
        [fetchTawar.rejected]: (state, action) => {
            console.log('fetching rejected')
            return { ...state, error: action.error }
        },

        // Post Tawar
        [postTawar.pending]: (state, action) => {
            console.log('fetching pending')
            return { ...state, loading: true, error: null, }
        },
        [postTawar.fulfilled]: (state, action) => {
            console.log('fetching fulfilled')
            console.log(action.payload)
        },
        [postTawar.rejected]: (state, action) => {
            console.log('fetching rejected')
            return { ...state, error: action.error }
        },

         
    }
})
export const { setLoading } = tawarSlice.actions;
export default tawarSlice.reducer;