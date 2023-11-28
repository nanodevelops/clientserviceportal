/* eslint-disable jsx-a11y/anchor-is-valid */
import SearchIcon from "@mui/icons-material/Search"
import React from "react";
import "./Navbar.scss";

import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const navbarMenu = [
        {
            name: "Client Services",
            path: "/clientservices",
            dropdown: true,
            dropdownItems: [
                {
                    name: "Add New Client",
                    path: "/addnewclient",
                    dropdown: false
                },
                {
                    name: "Client List",
                    path: "/clientlist",
                    dropdown: false
                }
            ]
        },
        {
            name: "Complaints",
            path: "/complaints",
            dropdown: true,
            dropdownItems: [
                {
                    name: "Add New Complaint",
                    path: "/addnewcomplaint",
                    dropdown: false
                },
                {
                    name: "Complaint List",
                    path: "/complaintlist",
                    dropdown: false
                }
            ]
        },
        {
            name: "Enquiries",
            path: "/enquiries",
            dropdown: true,
            dropdownItems: [
                {
                    name: "Add New Enquiry",
                    path: "/addnewenquiry",
                    dropdown: false
                },
                {
                    name: "Enquiry List",
                    path: "/enquirylist",
                    dropdown: false
                }
            ]
        },
        {
            name: "Reports",
            path: "/reports",
            dropdown: true,
            dropdownItems: [
                {
                    name: "Clients Report",
                    path: "/clientsreport",
                    dropdown: false
                },
                {
                    name: "Complaints Report",
                    path: "/complaintsreport",
                    dropdown: false
                },
                {
                    name: "Enquiries Report",
                    path: "/enquiriesreport",
                    dropdown: false
                }
            ]
        },
        {
            name: "Archive",
            path: "/archive",
            dropdown: false
        },
    ]

    const handleAddNewClientClick = (path) => {
        return () => {
            if(path === "/addnewclient"){
                navigate("/addnewclient")
            }
        }
    }

    

    return (
        <div className="main-nav">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="search" id="search-form">
                        <input type="text" placeholder="Search.." name="search-form" />
                        <SearchIcon className="search_icon" />
                    </div>
                    <div className="container-fluid">
                        <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* NAVBAR LINKS */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                    navbarMenu.map((navItem, index) => 
                                        <li className={`nav-item ${navItem.dropdown ? 'dropdown' : ''}`} key={index}>
                                            {navItem.dropdown ? (
                                                <>
                                                    <NavLink 
                                                        className="nav-link dropdown-toggle"
                                                        to="#" 
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        {navItem.name}
                                                    </NavLink>
                                                    <div className="dropdown-menu" aria-labelledby={`navbarDropdown${index}`}>
                                                        {navItem.dropdownItems.map((item, subindex) => (
                                                            <NavLink 
                                                                className="dropdown-item"
                                                                key={subindex}
                                                                to={`/${navItem.path}${typeof item.path === 'string' ? '/' + item.name.replace(/\s+/g, '').toLowerCase() : item.path}`}
                                                                onClick={handleAddNewClientClick(item.path)}
                                                            >
                                                                {typeof item === 'string' ? item : item.name}
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                </>
                                            ): (
                                                <NavLink className="nav-link" to={navItem.path} aria-current={index === 0 ? "page" : undefined}>
                                                    {navItem.name}
                                                </NavLink>
                                            )}
                                        </li>
                                    )
                                }
                            </ul>
                            <div className="theme-btn">
                                <NavLink to="/">Log Complaint</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}


export default Navbar;