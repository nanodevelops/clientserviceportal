/* eslint-disable jsx-a11y/anchor-is-valid */
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import LanguageIcon from "@mui/icons-material/Language";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import React, { useContext, useState } from "react";

import "./Navbar.scss";
import logo from "../../assets/logo.png";
import admin from "../../assets/user/admin-user.png";


import { Link, NavLink } from "react-router-dom";
import { ColorContext } from "../../ColorContext/darkContext";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null)
    const {darkMode, dispatch} = useContext(ColorContext)

    // NAVIGATION MENU
    const navbarMenu = [
        {
            id: 1,
            title: "Clients",
            path: "/clients",
            cName: 'nav-item dropdown',
            children: [
                {
                    id: 1,
                    title: "Add New",
                    path: "/clients/addnew",
                    cName: "dropdown-item"
                },
                {
                    id: 2,
                    title: "View All",
                    path: "/clients/view-all",
                    cName: "dropdown-item"
                }
            ]
        },
        {
            id: 2,
            title: "Complaints",
            path: "/complaints",
            cName: 'nav-item dropdown',
            children: [
                {
                    id: 1,
                    title: "View All",
                    path: "/complaints/view-all",
                    cName: "dropdown-item"
                }
            ]
        },
        {
            id: 3,
            title: "Enquiries",
            path: "/enquiries",
            cName: 'nav-item dropdown',
            children: [
                {
                    id: 1,
                    title: "View All",
                    path: "/enquiries/view-all",
                    cName: "dropdown-item"
                }
            ]
        },
        {
            id: 4,
            title: "Reports",
            path: "/reports",
            cName: 'nav-item dropdown',
            children: [
                {
                    id: 1,
                    title: "Clients Report",
                    path: "/reports/clients-report",
                    cName: 'dropdown-item'
                },
                {
                    id: 2,
                    title: "Complaints Report",
                    path: "/reports/complaints-report",
                    cName: 'dropdown-item'
                },
                {
                    id: 3,
                    title: "Enquiries Report",
                    path: "/reports/enquiries-report",
                    cName: 'dropdown-item'
                }
            ]
        },
        {
            id: 5,
            title: "Archive",
            path: "/archive",
            cName: 'nav-item'
        },
    ]

    const renderMenu = (menuItems) => {
        return menuItems.map((menuItem) => (
            <li key={menuItem.id} className={`nav-item ${menuItem.children ? "dropdown" : ""}`}>
                {menuItem.children ? (
                    <>
                        <NavLink to={menuItem.path} className="nav-link dropdown-toggle" id={`navbarDropdown${menuItem.id}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {menuItem.title}
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby={`navbarDropdown${menuItem.id}`}>
                            {renderMenu(menuItem.children)}
                        </ul>
                    </>
                ) : (
                    <NavLink to={menuItem.path} className="nav-link"> 
                        {menuItem.title}
                    </NavLink>
                )}
            </li>
        ))
    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" width="13.333%" className="rounded-pill"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${toggle ? "show" : ""}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {renderMenu(navbarMenu)}
                    </ul>
                    <div className="d-flex">
                        <div className="nav-item language">
                            <LanguageIcon className="language-icon"/>
                        </div>
                        <div className="nav-item">
                            {!darkMode ? (
                                <DarkModeIcon 
                                    className="item-icon"
                                    onClick={() => dispatch({ type: "TOGGLE" })}
                                />
                            ) : (
                                <LightModeIcon 
                                    className="item-icon light"
                                    onClick={() => dispatch({ type: "TOGGLE" })}
                                />
                            )}
                        </div>
                        <div className="nav-item">
                            <form action="" className="d-flex">
                                <input type="search" className="form-control me-2" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">
                                    <SearchIcon />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;