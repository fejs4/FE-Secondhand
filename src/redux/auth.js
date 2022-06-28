import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const authLogin = createAsyncThunk(
    'auth/Login',
    async (user) => {
         const response = await axios({
                method:"POST",
                data: user,
                url:"http://localhost:5000/login"
            })
        return response.data;
    }
);

export const authRegister = createAsyncThunk(
    'auth/Register',
    async (user) => {
         const response = await axios({
                method:"POST",
                data: user,
                url:"http://localhost:5000/register"
            })
        return response.data;
    }
);

const initialState = {
    userProfile: {},
    message: '',
    success: null,
    error: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.userProfile = action.payload
        },
        setSuccess: (state, action) => {
            state.success = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
    },
    extraReducers: {
        // Login
        [authLogin.pending]: (state, action) => {
            console.log('pending')
            return { ...state, loading: true, error: null, }
        },
        [authLogin.fulfilled]: (state, action) => {
            console.log('fulfilled')
            localStorage.setItem("token", action.payload.data.test.access_token)
            return { ...state, message:action.payload.message, success:action.payload.success }
        },
        [authLogin.rejected]: (state, action) => {
            console.log('rejected')
            console.log(action.payload);
            return { ...state, error: action.error }
        },

        // Register
        [authRegister.pending]: (state, action) => {
            console.log('pending')
            return { ...state, loading: true, error: null, }
        },
        [authRegister.fulfilled]: (state, action) => {
            console.log('fulfilled')
            return { ...state, message:action.payload.message, success:action.payload.success }
        },
        [authRegister.rejected]: (state, action) => {
            console.log('rejected')
            console.log(action.payload);
            return { ...state, error: action.error, success:action.payload.success }
        }
    }
})

export const { setUserLogin, setUserProfile,setSuccess, setMessage } = authSlice.actions;
export default authSlice.reducer;