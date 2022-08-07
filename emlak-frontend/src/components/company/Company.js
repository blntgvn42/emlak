import {useSelector} from "react-redux";
import CompanyItem from "./CompanyItem";

function Company() {
    const {companies} = useSelector(state => state.company)
    return (
        <div className="grid grid-cols-4 gap-5">
            {companies.map(company => company.id !== 4 ? <CompanyItem key={company.id} company={company}/> : null)}
        </div>
    )
}

export default Company