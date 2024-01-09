/* eslint-disable jsx-a11y/anchor-is-valid */
import SearchIcon from "@mui/icons-material/Search"
import React from "react";
import "./Navbar.scss";

import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navbarMenu = [
        {
            id: 1,
            title: "Clients",
            path: "/clients",
            cName: 'nav-item',
            children: [
                {
                    id: 1,
                    title: "Add New",
                    path: "/clients/addnew",
                    cName: "submenu-item"
                },
                {
                    id: 2,
                    title: "View All",
                    path: "/clients/view-all",
                    cName: "submenu-item"
                }
            ]
        },
        {
            id: 2,
            title: "Complaints",
            path: "/complaints",
            cName: 'nav-item',
            children: [
                {
                    id: 1,
                    title: "Add New",
                    path: "/complaints/addnew",
                    cName: "submenu-item"
                },
                {
                    id: 2,
                    title: "View All",
                    path: "/complaints/view-all",
                    cName: "submenu-item"
                }
            ]
        },
        {
            id: 3,
            title: "Enquiries",
            path: "/enquiries",
            cName: 'nav-item',
            children: [
                {
                    id: 1,
                    title: "Add New",
                    path: "/enquiries/addnew",
                    cName: "submenu-item"
                },
                {
                    id: 2,
                    title: "View All",
                    path: "/enquiries/view-all",
                    cName: "submenu-item"
                }
            ]
        },
        {
            id: 4,
            title: "Reports",
            path: "/reports",
            children: [
                {
                    id: 1,
                    title: "Clients Report",
                    path: "/reports/clients-report",
                    cName: 'submenu-item'
                },
                {
                    id: 2,
                    title: "Complaints Report",
                    path: "/reports/complaints-report",
                    cName: 'submenu-item'
                },
                {
                    id: 3,
                    title: "Enquiries Report",
                    path: "/reports/enquiries-report",
                    cName: 'submenu-item'
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
            <li key={menuItem.id} className={menuItem.cName}>
                <NavLink to={menuItem.path} className="nav-link">
                    {menuItem.title}
                </NavLink>
                {menuItem.children && (
                    <ul className="submenu">
                        {renderMenu(menuItem.children)}
                    </ul>
                )}
            </li>
        ))
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
                        <ul className="navbar-nav">{renderMenu(navbarMenu)}</ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}


export default Navbar;