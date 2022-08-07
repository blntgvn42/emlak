import Moment from "react-moment";
import {Link} from "react-router-dom";

function PropertyItem({property, companyName}) {
    return (
        <div className="w-full" key={property.id}>
            <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div className="py-3 px-6 border-b border-gray-300">
                    From {companyName}
                </div>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{property.title}</h5>
                    <p className="text-gray-700 text-base mb-4">{property.details}</p>
                    <p className="text-gray-700 text-base mb-4">{property.price} ₺</p>
                    <Link to={`/property/${property.id}`}
                          className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">More Details
                    </Link>
                </div>
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <Moment fromNow>{property.created_at}</Moment>
                </div>
            </div>
        </div>
    );
}

export default PropertyItem