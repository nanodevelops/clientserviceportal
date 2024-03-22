import React from "react";
import PageTitle from "../PageTitle/PageTitle";

import "./Enquiry.scss";

const Enquiry = ({ enquiries }) => {
    return(
       <>
        <div className="container">
            <PageTitle title="Enquiries" />
            <div className="enquiries-grid">
                {enquiries.map((enquiry) => (
                    <div className="enquiry-box" key={enquiry.id}>
                    <div className="enquiry-details">
                        <p>Client: {enquiry.client}</p>
                        <p>Vulnerability: {enquiry.vulnerability}</p>
                        <p>Enquiry number: {enquiry.id}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
       </>
    )
}

export default Enquiry;