import {createSlice} from "@reduxjs/toolkit";
import {doItemPropertiesEqualEveryBoundSelectedOption, omit} from "../utils/util";
import {toast} from "react-toastify";

const initialState = {
    properties: [],
    filtered: false,
    filteredProperties: []
}

export const propertySlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        getProperties: (state, action) => {
            state.properties = [...action.payload].sort((p1, p2) => new Date(p2.created_at).getTime() - new Date(p1.created_at).getTime())
        },
        createProperty: (state, action) => {
            state.properties = [...state.properties, action.payload].sort((p1, p2) => new Date(p2.created_at).getTime() - new Date(p1.created_at).getTime())
        },
        filterProperty: (state, action) => {
            let myObj = action.payload
            let minPrice = 0, maxPrice = 0
            if (myObj.hasOwnProperty('isFurnished')) {
                myObj.isFurnished = myObj.isFurnished === 'true'
            }
            if (myObj.hasOwnProperty('heatTypeId')) {
                myObj.heat_type_id = +myObj.heatTypeId
                delete myObj.heatTypeId
            }
            if (myObj.hasOwnProperty('propertyTypeId')) {
                myObj.property_type_id = +myObj.propertyTypeId
                delete myObj.propertyTypeId
            }
            if (myObj.hasOwnProperty('advertisementTypeId')) {
                myObj.advertisement_type_id = +myObj.advertisementTypeId
                delete myObj.advertisementTypeId
            }
            if (myObj.hasOwnProperty('minPrice')) {
                minPrice = myObj.minPrice
                delete myObj.minPrice
            }
            if (myObj.hasOwnProperty('maxPrice')) {
                maxPrice = myObj.maxPrice
                delete myObj.maxPrice
            }

            const result = state.properties
                .filter(doItemPropertiesEqualEveryBoundSelectedOption, myObj)

            if (result.length) {
                state.filteredProperties = result
                if (minPrice && maxPrice) {
                    state.filteredProperties = state.filteredProperties
                        .filter(product => minPrice <= product.price && product.price <= maxPrice)
                }
                if (maxPrice) {
                    state.filteredProperties = state.filteredProperties
                        .filter(product => product.price <= maxPrice)
                }

                if (minPrice) {
                    state.filteredProperties = state.filteredProperties
                        .filter(product => minPrice <= product.price)
                }
                state.filtered = true
            } else {
                state.filteredProperties = []
                state.filtered = false
            }
        },
        resetFilterProperty: (state) => {
            state.filteredProperties = []
            state.filtered = false
        },
    },
})

export const {getProperties, createProperty, filterProperty, resetFilterProperty} = propertySlice.actions
export default propertySlice.reducer