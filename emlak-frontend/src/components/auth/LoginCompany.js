import {loginCompanyRequest} from "../../api";
import {useDispatch} from "react-redux";
import {Formik} from "formik";

function LoginCustomer() {
    const dispatch = useDispatch();

    return (
        <div className="mx-auto w-[25rem]">
            <Formik
                initialValues={{
                    email: '',
                    password: '',

                }}
                onSubmit={(values => {
                    dispatch(loginCompanyRequest(values))
                })}
            >
                {({values, handleChange, handleBlur, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-center text-3xl my-10">Company Login</h1>

                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Company Email Address
                            </label>
                            <input
                                required
                                type="email"
                                name="email"
                                onBlur={handleBlur}
                                value={values.email}
                                onChange={handleChange}
                                placeholder="Company Email Address"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Company Password
                            </label>
                            <input
                                required
                                type="password"
                                name="password"
                                onBlur={handleBlur}
                                value={values.password}
                                onChange={handleChange}
                                placeholder="Company Password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <button type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default LoginCustomer