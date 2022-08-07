import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    propertyTypes: []
}

export const propertyTypeSlice = createSlice({
    name: 'propertyTypes',
    initialState,
    reducers: {
        getPropertyTypes: (state, action) => {
            state.propertyTypes = [...action.payload]
        },
    }
})

export const {getPropertyTypes} = propertyTypeSlice.actions
export default propertyTypeSlice.reducer