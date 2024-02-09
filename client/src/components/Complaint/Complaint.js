import { Link } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";

const Complaint = ({ complaints }) => {
    return(
        <>
            <div className="container">
                <PageTitle title="Complaints" />
            </div>
        </>
    )
}

export default Complaint;