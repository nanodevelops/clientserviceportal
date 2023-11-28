import { useState } from "react";
import clientsService from "../../services/clients";
import { useClientContext } from "../../ClientContext";

const ClientForm = () => {
    const { updateClients } = useClientContext;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [visitPurpose, setVisitPurpose] = useState("");
    const [entryTime, setEntryTime] = useState("");
    const [exitTime, setExitTime] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [vulnerability, setVulnerability] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()

        const newClientObject = {
            firstName,
            lastName,
            contact,
            email,
            visitPurpose,
            entryTime,
            exitTime,
            address,
            gender,
            age,
            vulnerability
        }

        clientsService.createClient(newClientObject).then(returnedClient => {
            updateClients((previousClients) => [...previousClients, returnedClient])
            setFirstName("")
            setLastName("")
            setContact("")
            setEmail("")
            setVisitPurpose("")
            setEntryTime("")
            setExitTime("")
            setAddress("")
            setGender("")
            setAge("")
            setVulnerability("")
        })
    }

    return (
        <div className="client-form">
            <div className="container">
                <h2>Add New Client</h2>
                <form onSubmit={handleSubmit} className="row">
                    <div className="col">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input 
                            type="text" required 
                            className="form-control" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input 
                            type="text" required 
                            className="form-control" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                    </div>
                </form>
            </div>
        </div>
    )
    
}

export default ClientForm;
