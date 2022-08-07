import {useRef} from "react";
import {useParams, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import ReactToPrint from "react-to-print";

function PropertyDetail() {
    const {propertyId} = useParams()
    const {properties} = useSelector(state => state.property)
    const {heatTypes} = useSelector(state => state.heatType)
    const {propertyTypes} = useSelector(state => state.propertyType)
    const {advertisementTypes} = useSelector(state => state.advertisementType)
    const property = properties.filter(p => p.id === +propertyId)[0]
    const propertyRef = useRef()
    if (!property) {
        return <Navigate to="/"/>
    }
    const heatType = heatTypes.filter(p => p.id === +property.heat_type_id)[0]
    const propertyType = propertyTypes.filter(p => p.id === +property.property_type_id)[0]
    const advertisementType = advertisementTypes.filter(p => p.id === +property.advertisement_type_id)[0]
    return (
        <>
            <div className="flex justify-between">
                <div></div>
                <ReactToPrint
                    trigger={() => <button
                        className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Print
                    </button>}
                    content={() => propertyRef.current}
                />
            </div>
            <main className="p-5" ref={propertyRef}>
                <div className="container mx-auto">
                    <div className="grid gap-6 grid-cols-4">
                        <img src="https://placehold.jp/900x500.png" className="col-span-full col-start-2" alt=""/>
                        <h1 className="text-lg font-semibold col-start-2 col-span-2 text-center">{property.title}</h1>
                        <div className="text-xl font-bold mb-6 col-start-2 col-span-2 text-center">{property.price} ₺
                        </div>
                        <div className="text-gray-500 mb-6 wysiwyg-content col-start-2 col-span-2 text-center">
                            <div className="grid grid-cols-2 gap-10">
                                <span>Total Floor</span>
                                <span>{property.totalFloor}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                <span>Current Floor</span>
                                <span>{property.currentFloor}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                <span>Number of Rooms</span>
                                <tspan>{property.roomNumber}</tspan>
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                <tspan>Square Meter</tspan>
                                <tspan>{property.squareMeter} m<sup>2</sup></tspan>
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                <tspan>Furnished</tspan>
                                <tspan>{property.isFurnished ? "Eşyalı" : "Eşyasız"}</tspan>
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                <tspan>Address</tspan>
                                <tspan>{property.address}</tspan>
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                <tspan>Heat Type</tspan>
                                <tspan>{heatType.type}</tspan>
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                <span>Property Type</span>
                                <span>{propertyType.type}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                <span>Advertisement Type</span>
                                <span>{advertisementType.type}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PropertyDetail