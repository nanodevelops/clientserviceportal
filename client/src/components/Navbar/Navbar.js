import React from "react";
import logo from "../../assets/njsmalogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navbarMenu = [
        {
            name: "Client Services",
            path: "/clientservices"
        },
        {
            name: "Complaints",
            path: "/complaints"
        },
        {
            name: "Enquiries",
            path: "/enquiries"
        },
        {
            name: "Reports",
            path: "/reports"
        },
        {
            name: "Archive",
            path: "/archive"
        },
    ]
    return (
        <div className="main-nav">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* LOGO */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button></button>
                        <div className="collapse navbar-collapse">
                            {/* NAVBAR LINKS */}
                            <ul className="navbar-nav">
                                {
                                    navbarMenu.map((navItem, index) => 
                                        <li className="nav-item" key={index}>
                                            <Link className="nav-link" to={navItem.path}>{navItem.name}</Link>
                                        </li>
                                    )
                                }
                            </ul>
                            <div className="theme-btn">
                                <Link to="/">Log Complaint</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}