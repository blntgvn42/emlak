import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {createPropertyRequest} from "../../api";

function PropertyCreate() {
    const dispatch = useDispatch()
    const {loggedInCompany} = useSelector(state => state.company)
    const {advertisementTypes} = useSelector(state => state.advertisementType)
    const {heatTypes} = useSelector(state => state.heatType)
    const {propertyTypes} = useSelector(state => state.propertyType)
    return (
        <div className="mx-auto w-[50rem]">
            <Formik
                initialValues={{
                    title: '',
                    isFurnished: false,
                    squareMeter: 0,
                    roomNumber: 0,
                    totalFloor: 0,
                    currentFloor: 0,
                    address: '',
                    details: '',
                    price: 0,
                    companyId: 1,
                    heatTypeId: 1,
                    propertyTypeId: 1,
                    advertisementTypeId: 1,
                }}
                onSubmit={values => {
                    const {
                        title, isFurnished, squareMeter, roomNumber, totalFloor, currentFloor, address, details, price
                    } = values
                    const property = {
                        title, isFurnished, squareMeter, roomNumber,
                        totalFloor, currentFloor, address, details, price,
                    }
                    const companyId = +loggedInCompany
                    const heatTypeId = values.heatTypeId
                    const propertyTypeId = values.propertyTypeId
                    const advertisementTypeId = values.advertisementTypeId
                    dispatch(createPropertyRequest({
                        property,
                        companyId,
                        heatTypeId: +heatTypeId,
                        propertyTypeId: +propertyTypeId,
                        advertisementTypeId: +advertisementTypeId
                    }))
                    setTimeout(() => {
                        document.location.href = "/";
                    }, 1500)
                }}
            >
                {({values, handleChange, handleBlur, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-center text-3xl my-10">Create an Advertisement</h1>

                        <div className="mb-6">
                            <label
                                htmlFor="title"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Property Title
                            </label>
                            <input
                                required
                                type="text"
                                name="title"
                                onBlur={handleBlur}
                                value={values.title}
                                onChange={handleChange}
                                placeholder="Property Title"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="isFurnished"
                                   className="block mb-2 text-sm font-medium text-gray-900">Property Furnished</label>
                            <select
                                name="isFurnished"
                                onBlur={handleBlur}
                                value={values.isFurnished}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="true">Eşyalı</option>
                                <option value="false">Eşyasız</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="squareMeter"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Property Square Meter
                            </label>
                            <input
                                required
                                type="number"
                                name="squareMeter"
                                onBlur={handleBlur}
                                value={values.squareMeter}
                                onChange={handleChange}
                                placeholder="Property Square Meter"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="roomNumber"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Property Number of Room
                            </label>
                            <input
                                required
                                type="number"
                                name="roomNumber"
                                onBlur={handleBlur}
                                value={values.roomNumber}
                                onChange={handleChange}
                                placeholder="Property Number of Room"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="totalFloor"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Property Total Floor
                            </label>
                            <input
                                required
                                type="number"
                                name="totalFloor"
                                onBlur={handleBlur}
                                value={values.totalFloor}
                                onChange={handleChange}
                                placeholder="Property Total Floor"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="currentFloor"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Property Current Floor
                            </label>
                            <input
                                required
                                type="number"
                                name="currentFloor"
                                onBlur={handleBlur}
                                value={values.currentFloor}
                                onChange={handleChange}
                                placeholder="Property Current Floor"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="address"
                                   className="block mb-2 text-sm font-medium text-gray-900">Property Address</label>
                            <input
                                required
                                type="text"
                                name="address"
                                onBlur={handleBlur}
                                value={values.address}
                                onChange={handleChange}
                                placeholder="Property Address"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="details"
                                   className="block mb-2 text-sm font-medium text-gray-900">Property Details</label>
                            <input
                                required
                                type="text"
                                name="details"
                                onBlur={handleBlur}
                                value={values.details}
                                onChange={handleChange}
                                placeholder="Property Details"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="price"
                                   className="block mb-2 text-sm font-medium text-gray-900">Property Price</label>
                            <input
                                required
                                type="text"
                                name="price"
                                onBlur={handleBlur}
                                value={values.price}
                                onChange={handleChange}
                                placeholder="Property Price"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="heatTypeId"
                                   className="block mb-2 text-sm font-medium text-gray-900">Heat Type</label>
                            <select
                                name="heatTypeId"
                                onBlur={handleBlur}
                                value={values.heatTypeId}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {heatTypes.map(heatType => <option key={heatType.id}
                                                                   value={heatType.id}>{heatType.type}</option>)}
                            </select>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="propertyTypeId"
                                   className="block mb-2 text-sm font-medium text-gray-900">Property Type</label>
                            <select
                                name="propertyTypeId"
                                onBlur={handleBlur}
                                value={values.propertyTypeId}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {propertyTypes.map(propertyType => <option key={propertyType.id}
                                                                           value={propertyType.id}>{propertyType.type}</option>)}
                            </select>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="advertisementTypeId"
                                   className="block mb-2 text-sm font-medium text-gray-900">Advertisement Type</label>
                            <select
                                name="advertisementTypeId"
                                onBlur={handleBlur}
                                value={values.advertisementTypeId}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {advertisementTypes.map(advertisementType => <option key={advertisementType.id}
                                                                                     value={advertisementType.id}>{advertisementType.type}</option>)}
                            </select>
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

export default PropertyCreate