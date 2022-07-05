import { createSlice } from '@reduxjs/toolkit';

export const selectedLocation = createSlice({
    name: "selectedCountry",
    initialState: {
        country: null,
        region: null
    },
    reducers: {
        changeCountry: (state, action) => {
            state.country = action.payload.country;
        },

        changeRegion: (state, action) => {
            state.region = action.payload.region;
        },
    },
});

export const { changeCountry, changeRegion } = selectedLocation.actions;

export default selectedLocation.reducer;