import { createSlice } from '@reduxjs/toolkit';

export const notImplementedSlice = createSlice({
    name: "notImplemented",
    initialState: { value: 'none' },
    reducers: {
        displayNone: (state) => {
            state.value = 'none'
        },
        displayFlex: (state) => {
            state.value = 'flex'
        },
    },
});

export const { displayNone, displayFlex } = notImplementedSlice.actions;

export default notImplementedSlice.reducer;