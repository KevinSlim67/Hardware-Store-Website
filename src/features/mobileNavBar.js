import { createSlice } from '@reduxjs/toolkit';

export const mobileNavBar = createSlice({
    name: "mobileNavBar",
    initialState: {
        display: 'none'
    },
    reducers: {
        displayNone: (state) => {
            state.display = 'none'
        },
        displayBlock: (state) => {
            state.display = 'block'
        },
    },
});

export const { displayNone, displayBlock } = mobileNavBar.actions;

export default mobileNavBar.reducer;