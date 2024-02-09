import { Link } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";

const Client = ({ clients }) => {
    return ( 
        <>
            <div className="container">
                <PageTitle title="Clients"/>
                <table className="table table-sm table-hover">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Vulnerability</th>
                            <th scope="col">Visit Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, index) => (
                            <tr key={index}>
                                <th scope="col">{index + 1}</th>
                                <td>
                                    <Link to={`/clients/${client.id}`}>
                                        <span>{client.firstName}</span><span>{client.lastName}</span> 
                                    </Link>
                                </td>
                                <td>{client.address}</td>
                                <td>{client.vulnerability}</td>
                                <td>{client.visitPurpose}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
     );
}
 
export default Client;
