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
            <div className="container-fluid" id="home-content">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="bg-color"></div>
                        <div className="row home-cards mb-4">
                            <div className="col-md-4">
                                <Databox type="clients"/>
                            </div>
                            <div className="col-md-4">
                                <Databox type="complaints"/>
                            </div>
                            <div className="col-md-4">
                                <Databox type="enquiries"/>
                            </div>
                        </div>
                        <div className="chart-contanier">
                            
                        </div>
                        <div className="clients-table">
                            <p className="title">Latest additions</p>
                            <Clients />
                        </div>
                    </div>
                </div>  
            </div>
        </div>

    )
}
 
export default Home;


