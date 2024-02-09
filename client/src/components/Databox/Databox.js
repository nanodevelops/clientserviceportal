import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clientsService from "../../services/clients";
import complaintsService from "../../services/complaints";
import enquiriesService from "../../services/enquiries";

import { KeyboardArrowUp } from "@mui/icons-material";
import { PermIdentity } from "@mui/icons-material";
import { NewReleases } from "@mui/icons-material";
import { ContactSupport } from "@mui/icons-material";

const Databox = ({ type, totalCount }) => {
    const [data, setData] = useState(null)
    // let title, icon, link, count;



    

    switch(type) {
        case "Clients":
            data = {
                title: "Clients",
                icon: (
                    <PermIdentity 
                    style= {
                        { 
                            color: "#ff74b1", 
                            backgroundColor: "#ffd6ec" 
                        }
                    } 
                    className = "icon"
                    />
                ),
                link: "See all clients",
                linkto: "/clients",
                count: totalCount,
            };
            break;
        case "Complaints":
            data = {
                title: "Complaints",
                icon: (
                    <NewReleases 
                    style = {
                        {
                            color: "#AC7088",
                            backgroundColor: "#FFF38C"
                        }
                    }
                    className= "icon"
                    />
                ),
                link: "See all complaints",
                linkto: "/complaints",
                count: totalCount,
            };
            break;
        case "Enquiries":
            data = {
                title: "Enquiries",
                icon: (
                    <ContactSupport
                    style = {
                        {
                            color: "#367E18",
                            backgroundColor: "#A7FFE4"
                        }
                    } 
                    className= "icon"
                    />
                ),
                link: "See all enquiries",
                linkto: "/enquiries",
                count: totalCount
            };
            break;
        default:
            break;
    }

    return (
        <div className="databox">
            <div className="name-field">
                <p>{data.title}</p>
                <span className="positive">
                    <KeyboardArrowUp />
                    20%
                </span>
            </div>
            <div className="counts">
                {data.count}
            </div>
            <div className="see-item">
                <Link to={data.linkto}>
                    <p>{data.link}</p>
                </Link>
                {data.icon}
            </div>
        </div>
    )
}

export default Databox;