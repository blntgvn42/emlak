import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    heatTypes: []
}

export const heatTypeSlice = createSlice({
    name: 'heatTypes',
    initialState,
    reducers: {
        getHeatTypes: (state, action) => {
            state.heatTypes = [...action.payload]
        },
    }
})

export const {getHeatTypes} = heatTypeSlice.actions
export default heatTypeSlice.reducer