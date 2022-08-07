import {
    getAllAdvertisementTypes,
    getAllCompanies,
    getAllCustomers,
    getAllHeatTypes,
    getAllProperties,
    getAllPropertyTypes
} from "./api";
import {useDispatch} from "react-redux";

import {Routes, Route} from "react-router-dom"
import RegisterCompany from "./components/auth/RegisterCompany";
import Navbar from "./components/navbar";
import Home from "./components/home";
import {useEffect} from "react";
import RegisterCustomer from "./components/auth/RegisterCustomer";
import LoginCustomer from "./components/auth/LoginCustomer";
import LoginCompany from "./components/auth/LoginCompany";
import Error404 from "./components/error/404";
import NotLoginWhileLoggedIn from "./components/utils/NotLoginWhileLoggedIn";
import PropertyCreate from "./components/property/PropertyCreate";
import CantCreateWithoutLogin from "./components/utils/CantCreateWithoutLogin";
import PropertyDetail from "./components/property/PropertyDetail";
import {loginCompany} from "./store/companySlice";
import {loginCustomer} from "./store/customerSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCompanies());
        dispatch(getAllCustomers());
        dispatch(getAllHeatTypes());
        dispatch(getAllPropertyTypes());
        dispatch(getAllProperties());
        dispatch(getAllAdvertisementTypes());
        if (localStorage.getItem('customer')) {
            dispatch(loginCustomer(+localStorage.getItem('customer')))
        }
        if (localStorage.getItem('company')) {
            dispatch(loginCompany(+localStorage.getItem('company')))
        }
    }, [])

    return (
        <>
            <Navbar/>
            <div className="mt-5 container mx-auto">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/property/:propertyId" element={<PropertyDetail/>}/>
                    <Route path="/property/create"
                           element={<CantCreateWithoutLogin><PropertyCreate/></CantCreateWithoutLogin>}/>
                    <Route path="/login/company"
                           element={<NotLoginWhileLoggedIn><LoginCompany/></NotLoginWhileLoggedIn>}/>
                    <Route path="/register/company"
                           element={<NotLoginWhileLoggedIn><RegisterCompany/></NotLoginWhileLoggedIn>}/>
                    <Route path="/login/customer"
                           element={<NotLoginWhileLoggedIn><LoginCustomer/></NotLoginWhileLoggedIn>}/>
                    <Route path="/register/customer"
                           element={<NotLoginWhileLoggedIn><RegisterCustomer/></NotLoginWhileLoggedIn>}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
