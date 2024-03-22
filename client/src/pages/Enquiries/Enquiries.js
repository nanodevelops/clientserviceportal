import { useEffect, useState } from "react";
import enquiriesService from "../../services/enquiries";
import Enquiry from "../../components/Enquiry/Enquiry";

const Enquiries = () => {
    const [enquiries, setEnquiries] = useState([]);

    useEffect(() => {
        enquiriesService.getEnquiries()
        .then((initialEnquiries) => {
            setEnquiries(initialEnquiries)
        })
        .catch((err) => {
            alert(err)
        })
    }, [setEnquiries])
    return(
        <div>
            <div className="container container-fluid">
                {enquiries && <Enquiry enquiries={enquiries}/>}
            </div>
        </div>
    )
}

export default Enquiries;
