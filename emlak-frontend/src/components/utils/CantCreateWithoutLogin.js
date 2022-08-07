import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom'

function CantCreateWithoutLogin({children}) {
    const {loggedInCompany} = useSelector(state => state.company)
    if (loggedInCompany) {
        return children
    }
    return <Navigate to="/login/company"/>
}

export default CantCreateWithoutLogin