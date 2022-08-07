import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {filterProperty, resetFilterProperty} from "../../store/propertySlice";
import {getChangedValues} from "../../utils/util";

const initialValues = {
    isFurnished: "default",
    squareMeter: 0,
    roomNumber: 0,
    totalFloor: 0,
    currentFloor: 0,
    minPrice: 0,
    maxPrice: 0,
    heatTypeId: "default",
    propertyTypeId: "default",
    advertisementTypeId: "default",
}

function Search() {
    const dispatch = useDispatch()
    const {advertisementTypes} = useSelector(state => state.advertisementType)
    const {heatTypes} = useSelector(state => state.heatType)
    const {propertyTypes} = useSelector(state => state.propertyType)
    const handleReset = () => {
        dispatch(resetFilterProperty())
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => {
                const changedValues = getChangedValues(values, initialValues);
                dispatch(filterProperty(changedValues))
            }}
        >
            {({values, handleChange, handleBlur, handleSubmit}) => (
                <form onSubmit={handleSubmit} className="mb-6">
                    <h1 className="text-center text-3xl my-6">Search</h1>
                    <div className="grid grid-cols-5 gap-5 mb-6">
                        <div>
                            <label htmlFor="isFurnished"
                                   className="block mb-2 text-sm font-medium text-gray-900">Property Furnished</label>
                            <select
                                name="isFurnished"
                                onBlur={handleBlur}
                                value={values.isFurnished}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="default">Seçiniz</option>
                                <option value="true">Eşyalı</option>
                                <option value="false">Eşyasız</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="squareMeter"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Property Square Meter
                            </label>
                            <input
                                type="number"
                                min={0}
                                name="squareMeter"
                                onBlur={handleBlur}
                                value={values.squareMeter}
                                onChange={handleChange}
                                placeholder="Property Square Meter"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div>
                            <label
                                htmlFor="roomNumber"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Property Number of Room
                            </label>
                            <input
                                type="number"
                                min={0}
                                name="roomNumber"
                                onBlur={handleBlur}
                                value={values.roomNumber}
                                onChange={handleChange}
                                placeholder="Property Number of Room"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div>
                            <label
                                htmlFor="totalFloor"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Property Total Floor
                            </label>
                            <input
                                type="number"
                                min={0}
                                name="totalFloor"
                                onBlur={handleBlur}
                                value={values.totalFloor}
                                onChange={handleChange}
                                placeholder="Property Total Floor"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div>
                            <label
                                htmlFor="currentFloor"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Property Current Floor
                            </label>
                            <input
                                type="number"
                                min={0}
                                name="currentFloor"
                                onBlur={handleBlur}
                                value={values.currentFloor}
                                onChange={handleChange}
                                placeholder="Property currentFloor"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                        </div>

                        <div className="row-start-2 col-span-full grid grid-cols-3 gap-5">
                            <div>
                                <label htmlFor="heatTypeId"
                                       className="block mb-2 text-sm font-medium text-gray-900">Heat Type</label>
                                <select
                                    name="heatTypeId"
                                    onBlur={handleBlur}
                                    value={values.heatTypeId}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option value="default">Seçiniz</option>
                                    {heatTypes.map(heatType => <option key={heatType.id}
                                                                       value={heatType.id}>{heatType.type}</option>)}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="propertyTypeId"
                                       className="block mb-2 text-sm font-medium text-gray-900">Property Type</label>
                                <select
                                    name="propertyTypeId"
                                    onBlur={handleBlur}
                                    value={values.propertyTypeID}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option value="default">Seçiniz</option>
                                    {propertyTypes.map(propertyType => <option key={propertyType.id}
                                                                               value={propertyType.id}>{propertyType.type}</option>)}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="advertisementTypeId"
                                       className="block mb-2 text-sm font-medium text-gray-900">Advertisement
                                    Type</label>
                                <select
                                    name="advertisementTypeId"
                                    onBlur={handleBlur}
                                    value={values.advertisementTypeId}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option value="default">Seçiniz</option>
                                    {advertisementTypes.map(advertisementType => <option key={advertisementType.id}
                                                                                         value={advertisementType.id}>{advertisementType.type}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="row-start-3 col-span-full grid grid-cols-4 gap-5">
                            <div className="col-start-2">
                                <label htmlFor="minPrice"
                                       className="block mb-2 text-sm font-medium text-gray-900">Min Price</label>
                                <input
                                    type="number"
                                    min={0}
                                    name="minPrice"
                                    onBlur={handleBlur}
                                    value={values.minPrice}
                                    onChange={handleChange}
                                    placeholder="Property Square Meter"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                            </div>
                            <div className="col-start-3">
                                <label htmlFor="maxPrice"
                                       className="block mb-2 text-sm font-medium text-gray-900">Max Price</label>
                                <input
                                    type="number"
                                    min={0}
                                    name="maxPrice"
                                    onBlur={handleBlur}
                                    value={values.maxPrice}
                                    onChange={handleChange}
                                    placeholder="Property Square Meter"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                            </div>
                        </div>


                    </div>
                    <div className="grid grid-cols-6 gap-5">
                        <button type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Apply Filter
                        </button>
                        <button type="button" onClick={handleReset}
                                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Reset Filter
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default Search