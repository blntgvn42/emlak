import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    customers: [],
    loggedInCustomer: 0
}

export const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        getCustomers: (state, action) => {
            state.customers = action.payload
        },
        createCustomer: (state, action) => {
            state.customers = [...state.customers, action.payload]
            state.loggedInCustomer = action.payload.id
        },
        loginCustomer: (state, action) => {
            if (!localStorage.getItem('customer')) {
                localStorage.setItem('customer', action.payload)
            }
            state.loggedInCustomer = action.payload
        },
        logoutCustomer: (state) => {
            state.loggedInCustomer = false
            localStorage.removeItem('customer')
        }
    }
})

export const {getCustomers, createCustomer, loginCustomer, logoutCustomer} = customerSlice.actions
export default customerSlice.reducer