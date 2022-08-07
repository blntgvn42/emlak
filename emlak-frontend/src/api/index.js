import axios from "axios";
import {createCompany, getCompanies, loginCompany} from "../store/companySlice";
import {getPropertyTypes} from "../store/propertyTypeSlice";
import {createCustomer, getCustomers, loginCustomer} from "../store/customerSlice";
import {getHeatTypes} from "../store/heatTypeSlice";
import {getAdvertisementTypes} from "../store/advertisementTypeSlice";
import {createProperty, getProperties} from "../store/propertySlice";
import {toast} from "react-toastify";

const baseURL = "http://localhost:8080/";
const companyURL = "company";
const customerURL = "customer";
const heatTypeURL = "heat-type";
const propertyURL = "property";
const propertyTypeURL = "property-type";
const advertisementTypeURL = "advertisement-type";

// PROPERTY TYPES REQUESTS

export const getAllPropertyTypes = () => async (dispatch) => {
    await axios
        .get(`${baseURL}${propertyTypeURL}`)
        .then(res => dispatch(getPropertyTypes(res.data)));
}

// HEAT TYPES REQUESTS

export const getAllHeatTypes = () => async (dispatch) => {
    await axios
        .get(`${baseURL}${heatTypeURL}`)
        .then(res => dispatch(getHeatTypes(res.data)));
}

// ADVERTISEMENT TYPES REQUESTS

export const getAllAdvertisementTypes = () => async (dispatch) => {
    await axios
        .get(`${baseURL}${advertisementTypeURL}`)
        .then(res => dispatch(getAdvertisementTypes(res.data)));
}

// COMPANY REQUESTS

export const getAllCompanies = () => async (dispatch) => {
    await axios
        .get(`${baseURL}${companyURL}`)
        .then(res => dispatch(getCompanies(res.data)))
}

export const createCompanyRequest = (data) => async (dispatch) => {
    await axios
        .post(`${baseURL}${companyURL}/create`, data)
        .then(res => {
            dispatch(createCompany(res.data))
            toast.success("Successfully logged in to the system.")
        })
        .catch(e => toast.error("This email is already registered"));
    ;
}

export const loginCompanyRequest = (data) => async (dispatch) => {
    await axios
        .post(`${baseURL}${companyURL}/login`, data)
        .then(res => {
            const loggedIn = res.data
            dispatch(loginCompany(loggedIn))
            if (loggedIn) {
                toast.success("Successfully logged in to the system.")
            } else {
                toast.error("Bad Credential")
            }
        });
}

// CUSTOMER REQUESTS

export const getAllCustomers = () => async (dispatch) => {
    await axios
        .get(`${baseURL}${customerURL}`)
        .then(res => dispatch(getCustomers(res.data)));
}

export const createCustomerRequest = (data) => async (dispatch) => {
    await axios
        .post(`${baseURL}${customerURL}/create`, data)
        .then(res => dispatch(createCustomer(res.data)))
        .catch(e => toast.error("This email is already registered"));
}

export const loginCustomerRequest = (data) => async (dispatch) => {
    await axios
        .post(`${baseURL}${customerURL}/login`, data)
        .then(res => {
            const loggedIn = res.data
            dispatch(loginCustomer(loggedIn))
            if (loggedIn) {
                toast.success("Successfully logged in to the system.")
            } else {
                toast.error("Bad Credential")
            }
        });
}

// PROPERTY REQUESTS

export const getAllProperties = () => async (dispatch) => {
    await axios
        .get(`${baseURL}${propertyURL}`)
        .then(res => dispatch(getProperties(res.data)));
}

export const createPropertyRequest = (data) => async (dispatch) => {
    await axios
        .post(`${baseURL}${propertyURL}/create`, data)
        .then(res => {
            toast.success("Advertisement is successfully created.")
            dispatch(createProperty(res.data))
        })
        .catch(e => toast.error("Error occurred"));
}