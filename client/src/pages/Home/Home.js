import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Clients from "../Clients/Clients";
import "./Home.scss";

const Home = () => {
    return(
        <div className="homepage">
            <Navbar />
            <div id="home-content">
                <Sidebar />
                <div className="bg-color"></div>
                <div className="clients-table">
                    <p className="title">Latest additions</p>
                    <Clients />
                </div>  
            </div>
        </div>

    )
}
 
export default Home;

