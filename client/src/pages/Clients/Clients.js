import { useEffect, useState } from "react";
import clientsService from "../../services/clients";
import Client from "../../components/Client/Client";

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
            <div className="container container-fluid">
                {clients && <Client clients={clients} />}
            </div>
        </div>
     );
}
 
export default Clients;