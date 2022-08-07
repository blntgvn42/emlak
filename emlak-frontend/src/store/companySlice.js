import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    companies: [],
    loggedInCompany: 0
}

export const companySlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        getCompanies: (state, action) => {
            state.companies = action.payload
        },
        createCompany: (state, action) => {
            state.companies = [...state.companies, action.payload]
            state.loggedInCompany = action.payload.id
        },
        loginCompany: (state,action) =>{
            if (!localStorage.getItem('company')) {
                localStorage.setItem('company', action.payload)
            }
            state.loggedInCompany = action.payload
        },
        logoutCompany: (state) =>{
            state.loggedInCompany = 0
            localStorage.removeItem('company')
        }
    }
})

export const {createCompany,getCompanies,loginCompany,logoutCompany} = companySlice.actions
export default companySlice.reducer