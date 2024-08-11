import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import clientsService from "../../services/clients";
import complaintsService from "../../services/complaints";
import enquiriesService from "../../services/enquiries";

import { KeyboardArrowUp } from "@mui/icons-material";
import { PermIdentity } from "@mui/icons-material";
import { NewReleases } from "@mui/icons-material";
import { ContactSupport } from "@mui/icons-material";
import ListIcon from '@mui/icons-material/List';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';

import "./Databox.scss";

const Databox = ({ type }) => {
    const [data, setData] = useState(null)
    // let title, icon, link, count;
     
    useEffect (() => {
        const fetchData = async() => {
            try {
                let count;
                switch (type) {
                    case "clients":
                        count = await clientsService.getClientsCount()
                        setData({ 
                            title: "CLIENTS",
                            isMoney: false,
                            count,
                            icon: (
                                <PermIdentity className="icon"/>
                            ),
                            link: "See all clients",
                            linkto: "/clients"
                         })
                        break;
                    case "complaints":
                        count = await complaintsService.getComplaintsCount()
                        setData({
                            title: "COMPLAINTS",
                            isMoney: false,
                            count,
                            icon: (
                                <ListIcon className="icon"/>
                            ),
                            link: "See all complaints",
                            linkto: "/complaints"
                        })
                        break;
                    case "enquiries":
                        count = await enquiriesService.getEnquiriesCount()
                        setData({
                            title: "ENQUIRIES",
                            isMoney: false,
                            count,
                            icon: (
                                <DynamicFormIcon className="icon"/>
                            ),
                            link: "See all enquiries",
                            linkto: "/enquiries"
                        })
                        break;
                    default:
                        break;
                }
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [type])

    if(!data) return null

    return (
        <div className="databox">
            <div className="name-field">
                <p className="title">{data.title}</p>
                <span className="positive">
                    <KeyboardArrowUp />
                    20%
                </span>
            </div>
            <div className="counts">
                {data.isMoney && <NewReleases />}
                {data.count}
            </div>
            <div className="see-item">
                <Link to={data.linkto}>
                    <p className="link">{data.link}</p>
                </Link>
                {data.icon}
            </div>
        </div>
    )
}

export default Databox;