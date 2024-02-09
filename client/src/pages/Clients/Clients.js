import { useEffect, useState } from "react";
import clientsService from "../../services/clients";
import Client from "../../components/Client.js/Client";

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
            <div className="container">
                {clients && <Client clients={clients} />}
            </div>
        </div>
     );
}
 
export default Clients;