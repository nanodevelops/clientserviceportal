import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TableChartIcon from "@mui/icons-material/TableChart";
import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
    return ( 
        <div className="sidebar" id="sidebar">
            <div className="links">
                <ul className="list-unstyled">
                    <p className="span">Main</p>
                    <li>
                        <DashboardIcon className="icon" />Dashboard
                    </li>
                    <p className="span">Features</p>
                    <li>
                        <PersonIcon className="icon" />Client
                    </li>
                    <li>
                        <TableChartIcon className="icon" />Complaints
                    </li>
                    <li>
                        <CreditCardIcon className="icon" />Enquiry
                    </li>
                    <li>
                        <BarChartIcon className="icon" />Status
                    </li>
                    <p className="span">Settings</p>
                    <li>
                        <AccountCircleIcon className="icon" /> Profile
                    </li>
                    <li>
                        <SettingsRoundedIcon className="icon" /> Setting
                    </li>
                    <li>
                        <LogoutIcon className="icon" /> Log Out
                    </li>
                </ul>
            </div>
            <div className="colors">
                <div className="color_option" />
                <div className="color_option" />
            </div>
        </div>
     );
}
 
export default Sidebar;