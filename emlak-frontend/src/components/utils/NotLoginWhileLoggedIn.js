import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom'

function NotLoginWhileLoggedIn({children}) {
    const {loggedInCompany} = useSelector(state => state.company)
    const {loggedInCustomer} = useSelector(state => state.customer)
    if (loggedInCompany || loggedInCustomer) {
        return <Navigate to="/"/>
    }
    return children
}

export default NotLoginWhileLoggedIn