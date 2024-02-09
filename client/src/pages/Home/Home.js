import React from "react";
import Databox from "../../components/Databox/Databox";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Clients from "../Clients/Clients";;
import "./Home.scss";

const Home = () => {
    const [totalClientsCount, setTotalClientsCount] = useState(0);
    const [totalComplaintsCount, setTotalComplaintsCount] = useState(0);
    const [totalEnquiriesCount, setTotalEnquiriesCount] = useState(0);

    useEffect(() => {
        const fetchTotalClientsCount = async() => {
            try{
                const response = await clientsService.getClients();
                const clients = response.data;
                const totalCount = clients.length;
                setTotalClientsCount(totalCount);
            }catch(error){
                console.error("Error fetching clients:", error)
            }
        }
        const fetchTotalComplaintsCount = async() => {
            try{
                const response = await complaintsService.getComplaints();
                const complaints = response.data;
                const totalCount =   complaints.length;
                setTotalComplaintsCount(totalCount);

            }catch(error){
                console.error("Error fetching complaints:", error)
            }
        }
        const fetchTotalEnquiriesCount = async() => {
            try{
                const response = await enquiriesService.getEnquiries();
                const enquiries = response.data;
                const totalCount = enquiries.length;
                setTotalEnquiriesCount(totalCount);
            }catch(error){
                console.error("Error fetching enquiries", error)
            }
        }
        
        fetchTotalClientsCount();
        fetchTotalComplaintsCount();
        fetchTotalEnquiriesCount();
    }, [])

    return(
        <div className="home-container">
            <div className="home-sidebar">
                <Sidebar />
            </div>
            <div className="home-main">
                <Navbar />
                <div className="bg-color"></div>
                <div className="home-databox">
                    <Databox type="Clients" totalCount={totalClientsCount}/>
                    <Databox type="Complaints" totalCount={totalComplaintsCount}/>
                    <Databox type="Enquiries" totalCount={totalEnquiriesCount}/>
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

