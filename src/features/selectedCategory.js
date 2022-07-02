import { createSlice } from '@reduxjs/toolkit';

export const selectedCategorySlice = createSlice({
    name: "selectedCategory",
    initialState: {
        category: 'laptop'
    },
    reducers: {
        changeCategory: (state, action) => {
            state.category = action.payload.category;
        },
    },
});

export const { changeCategory } = selectedCategorySlice.actions;

export default selectedCategorySlice.reducer;