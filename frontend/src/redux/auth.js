import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userProfile: {},
    userLogin: {}

}

const productSlice = createSlice({
    name: 'produk',
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.userLogin = action.payload
        },
        setUserProfile: (state, action) => {
            state.userProfile = action.payload
        },
    },
    extraReducers: {

    }
})

export const { setUserLogin, setUserProfile } = productSlice.actions;
export default productSlice.reducer;