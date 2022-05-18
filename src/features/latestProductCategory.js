import { createSlice } from '@reduxjs/toolkit';

export const latestProductCategorySlice = createSlice({
    name: "latestProductCategory",
    initialState: {
        category: 'laptop'
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload.category;
        },
    },
});

export const { setCategory, updateProducts } = latestProductCategorySlice.actions;

export default latestProductCategorySlice.reducer;