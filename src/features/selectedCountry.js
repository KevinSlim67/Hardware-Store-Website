import { createSlice } from '@reduxjs/toolkit';

export const selectedCountrySlice = createSlice({
    name: "selectedCountry",
    initialState: {
        country: null
    },
    reducers: {
        changeCountry: (state, action) => {
            state.country = action.payload.country;
        },
    },
});

export const { changeCountry } = selectedCountrySlice.actions;

export default selectedCountrySlice.reducer;