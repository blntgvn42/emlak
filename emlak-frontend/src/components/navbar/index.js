import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutCustomer} from "../../store/customerSlice";
import {logoutCompany} from "../../store/companySlice";

function Navbar() {
    const {loggedInCustomer} = useSelector(state => state.customer)
    const {loggedInCompany} = useSelector(state => state.company)
    const dispatch = useDispatch()

    const handleLogout = (type) => {
        if (type === "customer") {
            dispatch(logoutCustomer())
        } else if (type === "company") {
            dispatch(logoutCompany())
        }
    }

    return (
        <header>
            <nav className="shadow">
                <div className="flex justify-between items-center py-6 px-10 container mx-auto">

                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
                            <Link to="/">Real Estate</Link>
                        </h1>
                    </div>

                    <div>

                        <div className="hover:cursor-pointer sm:hidden">
                            <span
                                className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                            <span
                                className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                            <span
                                className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                        </div>
                        <div className="flex items-center">

                            <ul className="sm:flex space-x-4 hidden items-center">
                                <li>
                                    <Link to="/" className="text-gray-700 hover:text-indigo-600 text-md ">Home</Link>
                                </li>
                                {/*<li>*/}
                                {/*    <Link to="/companies"*/}
                                {/*          className="text-gray-700 hover:text-indigo-600 text-md ">Companies</Link>*/}
                                {/*</li>*/}
                                {loggedInCompany ?
                                    <li>
                                        <Link to="/property/create"
                                              className="text-gray-700 hover:text-indigo-600 text-md ">Create Advertisement</Link>
                                    </li>
                                    : null}
                            </ul>

                            <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                                <ul className="sm:flex space-x-4 hidden items-center">
                                    {loggedInCustomer ?
                                        <li>
                                            <button
                                                className="text-gray-700 hover:text-indigo-600 text-md"
                                                type="button" onClick={() => handleLogout("customer")}>
                                                Logout
                                            </button>
                                        </li>
                                        : null}
                                    {loggedInCompany ?
                                        <li>
                                            <button
                                                className="text-gray-700 hover:text-indigo-600 text-md "
                                                type="button" onClick={() => handleLogout("company")}>
                                                Logout
                                            </button>
                                        </li>
                                        : null}
                                    {!loggedInCustomer && !loggedInCompany ? (
                                        <>
                                            <li>
                                                <Link to="/login/company"
                                                      className="text-gray-700 hover:text-indigo-600 text-md ">Company
                                                    Login</Link>
                                            </li>
                                            <li>
                                                <Link to="/register/company"
                                                      className="text-gray-700 hover:text-indigo-600 text-md ">Company
                                                    Register</Link>
                                            </li>
                                            <li>
                                                <Link to="/login/customer"
                                                      className="text-gray-700 hover:text-indigo-600 text-md ">Customer
                                                    Login</Link>
                                            </li>
                                            <li>
                                                <Link to="/register/customer"
                                                      className="text-gray-700 hover:text-indigo-600 text-md ">Customer
                                                    Register</Link>
                                            </li>
                                        </>
                                    ) : null}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar