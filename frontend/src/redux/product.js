import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
    temporary: {}
}

const productSlice = createSlice({
    name: 'produk',
    initialState,
    reducers : {
        setTemporary: (state,action) => {
            state.temporary = action.payload
        }
    }
})

export const { setTemporary } = productSlice.actions;
export default productSlice.reducer;