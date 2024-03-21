import React from "react";
import PageTitle from "../PageTitle/PageTitle";

import "./Complaint.scss";

const Complaint = ({ complaints }) => {
    return(
        <>
            <div className="container">
                <PageTitle title="Complaints" />
                <div className="complaints-grid">
                    {complaints.map((complaint) => (
                        <div className="complaint-box" key={complaint.id}>
                            <div className="complaint-details">
                                <p>Client: {complaint.client}</p>
                                <p>Vulnerability: {complaint.vulnerability}</p>
                                <p>Complaint number: {complaint.id}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Complaint;