import React from "react";
import Databox from "../../components/Databox/Databox";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Clients from "../Clients/Clients";
import "./Home.scss";

const Home = () => {
    return(
        <div className="homepage">
            <Navbar />
            <div class="" id="home-content">
                <Sidebar />
                <div className="bg-color"></div>
                <div className="home-cards">
                    <Databox type="clients"/>
                    <Databox type="complaints"/>
                    <Databox type="enquiries"/>
                </div>
                <div className="clients-table">
                    <p className="title">Latest additions</p>
                    <Clients />
                </div>  
            </div>
        </div>

    )
}
 
export default Home;

