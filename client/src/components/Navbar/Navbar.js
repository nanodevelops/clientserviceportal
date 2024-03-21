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

    const handleToggle = () => {
        setToggle(!toggle);
        setActiveDropdown(null)
    }

    const renderMenu = (menuItems) => {
        return menuItems.map((menuItem) => (
            <li key={menuItem.id} className={`nav-item ${menuItem.cName}`}>
                <NavLink to={menuItem.path} className="nav-link">
                    {menuItem.title}
                </NavLink>
                {menuItem.children && (
                    <>
                        <ul className={`dropdown-menu ${activeDropdown === menuItem.id ? 'active' : ''}`}>
                            {renderMenu(menuItem.children)}
                        </ul>
                    </>
                )}
            </li>
        ))
    }

    return (
        <div className={`main-nav ${toggle ? 'active' : ''}`}>
           <div className="container">
             {/* NAV MENU LOGO */}
             <div className="menu-logo">
                {toggle ? (
                    <CloseIcon className="menu-icon" onClick={handleToggle} />
                ) : (
                    <MenuIcon className="menu-icon" onClick={handleToggle} />
                )}
                <Link to="/" style={{ textDecoration: "none" }}>
                    <img src={logo} alt="logo" className="img-fluid logo-img"/>
                </Link>
            </div>
            {/* NAV SEARCH FORM */}
            <div className="search" id="search-form">
                <input type="text" placeholder="Search.." name="search-form" />
                <SearchIcon className="search-icon" />
            </div>
            {/* NAV UTILITIES */}
            <div className="menu-items">
                {/* LANGUAGE UTIL */}
                <div className="item language">
                    <LanguageIcon className="language-icon"/>
                    <p>English</p>
                </div>
                {/* LIGHT/DARK MODE UTIL */}
                <div className="item">
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
                {/* TOGGLE FULLSCREEN */}
                <div className="item">
                    <FullscreenExitIcon className="item-icon" />
                </div>
                {/* CHAT UTIL */}
                <div className="item">
                    <ChatBubbleOutlineIcon className="item-icon" />
                    <span className="badge">2</span>
                </div>
                {/* NOTIFICATIONS UTIL */}
                <div className="item">
                    <NotificationsNoneIcon className="item-icon" />
                    <span className="badge">1</span>
                </div>
                <div className="item">
                    <img src={admin} alt="admin" className="admin-pic" />
                </div>
            </div>               
            <nav className="nav-menu">
                <ul>{renderMenu(navbarMenu)}</ul>
            </nav>           
           </div>
        </div>
    )
}


export default Navbar;