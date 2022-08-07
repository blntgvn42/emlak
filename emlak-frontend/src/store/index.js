import {configureStore} from "@reduxjs/toolkit";
import companySlice from "./companySlice";
import propertyTypeSlice from "./propertyTypeSlice";
import customerSlice from "./customerSlice";
import heatTypeSlice from "./heatTypeSlice";
import advertisementTypeSlice from "./advertisementTypeSlice";
import propertySlice from "./propertySlice";

const store = configureStore({
    reducer: {
        company: companySlice,
        customer: customerSlice,
        heatType: heatTypeSlice,
        property: propertySlice,
        propertyType: propertyTypeSlice,
        advertisementType: advertisementTypeSlice,
        devTools: process.env.NODE_ENV !== 'production',
    }
})

export default store