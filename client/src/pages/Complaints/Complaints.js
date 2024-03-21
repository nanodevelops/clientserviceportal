import { useEffect, useState } from "react";
import complaintsService from "../../services/complaints";
import Complaint from "../../components/Complaint/Complaint";

const Complaints = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        complaintsService.getComplaints()
        .then((initialComplaints) => {
            setComplaints(initialComplaints)
        })
        .catch((err) => {
            alert(err)
        })
    }, [setComplaints])

    return(
        <div>
            <div className="container container-fluid">
                {complaints && <Complaint complaints={complaints}/>}
            </div>
        </div>
    )
}

export default Complaints;