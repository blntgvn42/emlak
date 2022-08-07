import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    advertisementTypes: []
}

export const advertisementTypeSlice = createSlice({
    name: 'heatTypes',
    initialState,
    reducers: {
        getAdvertisementTypes: (state, action) => {
            state.advertisementTypes = [...action.payload]
        },
    }
})

export const {getAdvertisementTypes} = advertisementTypeSlice.actions
export default advertisementTypeSlice.reducer