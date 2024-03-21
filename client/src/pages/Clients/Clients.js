import { useEffect, useState } from "react";
import clientsService from "../../services/clients";
import Client from "../../components/Client/Client";
import PageTitle from "../../components/PageTitle/PageTitle";

const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        clientsService.getClients()
        .then((initialClients) => {
            setClients(initialClients)
        })
        .catch((err) => {
            alert(err)
        })
    }, [setClients])
    return ( 
        <div>
            <PageTitle title="Clients"/>
            <div className="container container-fluid">
                {clients && <Client clients={clients} />}
            </div>
        </div>
     );
}
 
export default Clients;