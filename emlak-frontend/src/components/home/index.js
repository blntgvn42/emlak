import {useSelector} from "react-redux";
import Search from "../search";
import {useEffect, useRef, useState} from "react";
import PropertyItem from "./PropertyItem";
import ReactToPrint from "react-to-print";

function Home() {
    const [modal, setModal] = useState(false)
    const {properties, filteredProperties, filtered} = useSelector(state => state.property)
    const {companies} = useSelector(state => state.company)
    const propertyRef = useRef()

    useEffect(() => {
        setModal(false)
    }, [filteredProperties])

    const getCompany = (id) => {
        return companies.filter(c => c.id === +id)[0].name
    }

    return (
        <>
            <div className="flex justify-between">
                <button onClick={() => setModal(prevState => !prevState)}
                        className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Search
                </button>
                {filtered ?
                    <ReactToPrint
                        trigger={() => <button
                            className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Print
                        </button>}
                        content={() => propertyRef.current}
                    />
                    : null}
            </div>
            {modal ? <Search/> : null}
            <div className="grid grid-cols-4 gap-10" ref={propertyRef}>
                {
                    filtered
                        ? (
                            filteredProperties.length
                                ? filteredProperties.map(property => (
                                    <PropertyItem companyName={getCompany(property.company_id)} property={property}/>))
                                : <span>No item found</span>
                        )
                        : properties.map(property => (
                            <PropertyItem companyName={getCompany(property.company_id)} property={property}/>)
                        )
                }
            </div>
        </>
    )
}

export default Home