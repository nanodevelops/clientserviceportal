import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Clients from "../Clients/Clients";
import "./Home.scss";

const Home = () => {
    return(
        <>
            <Navbar />
            <div id="home">
                <Sidebar />
                <div className="bg-color"></div>
                <div className="clients-table">
                    <p className="title">Latest additions</p>
                    <Clients />
                </div>  
            </div>
        </>

    )
}
 
export default Home;

