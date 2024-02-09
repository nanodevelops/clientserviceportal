import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientForm from "../../components/ClientForm/ClientForm";
import clientsService from "../../services/clients";
import complaintsService from "../../services/complaints";
import enquiriesService from "../../services/enquiries";
import Notification from "../../components/Notification/Notification";


const AddNew = () => {
    const [clients, setClients] = useState([])
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [visitPurpose, setVisitPurpose] = useState("");
    const [entryTime, setEntryTime] = useState("");
    const [exitTime, setExitTime] = useState("");
    const [vulnerability, setVulnerability] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value)
    } 
    const handleContactChange = (e) => {
        setContact(e.target.value)
    } 
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    } 
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    } 
    const handleVisitPurposeChange = (e) => {
        setVisitPurpose(e.target.value)
    } 
    const handleEntryTimeChange = (e) => {
        setEntryTime(e.target.value)
    } 
    const handleExitTimeChange = (e) => {
        setExitTime(e.target.value)
    } 
    const handleVulnerabilityChange = (e) => {
        setVulnerability(e.target.value)
    } 
    const handleSubmit = async (event) => {
        event.preventDefault()

        const newClientObject = {
            firstName,
            lastName,
            gender,
            contact,
            email,
            address,
            visitPurpose,
            entryTime,
            exitTime,
            vulnerability
        }

        await clientsService.createClient(newClientObject)
        .then(async returnedClient => {
            setClients(clients.concat(returnedClient))
            setSuccessMessage(`New Client ${returnedClient.firstName} ${returnedClient.lastName} added`)
            setTimeout(() => {
                setSuccessMessage(null)
            }, 1090000)

            if(visitPurpose.toLowerCase() === "complaint"){
                await complaintsService.createComplaint({
                    client: returnedClient.id,
                    vulnerability
                })
                .then((response) => {
                    console.log("Complaint created:", response)
                })
                .catch((err) => {
                    console.error("Error creating complaint:", err)
                })
            }else if(visitPurpose.toLowerCase() === "enquiry"){
                await enquiriesService.createEnquiry({
                    client: returnedClient.id,
                    vulnerability
                })
                .then((response) => {
                    console.log("Enquiry created", response)
                })
                .catch((err) => {
                    console.error("Error creating enquiry", err)
                })
            }

            setFirstName("")
            setLastName("")
            setGender("")
            setContact("")
            setEmail("")
            setAddress("")
            setVisitPurpose("")
            setEntryTime("")
            setExitTime("")
            setVulnerability("")
            navigate("/")
        })
        .catch((err) => {
            setErrorMessage(err.response.data.error)
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        })
    }

    return ( 
        <>
            <Notification successMessage={successMessage} errorMessage={errorMessage} />
            <ClientForm 
                onFormSubmit={handleSubmit}
                onFirstNameChange={handleFirstNameChange}
                onLastNameChange={handleLastNameChange}
                onGenderChange={handleGenderChange}
                onContactChange={handleContactChange}
                onEmailChange={handleEmailChange}
                onAddressChange={handleAddressChange}
                onVisitPurposeChange={handleVisitPurposeChange}
                onEntryTimeChange={handleEntryTimeChange}
                onExitTimeChange={handleExitTimeChange}
                onVulnerabilityChange={handleVulnerabilityChange}
            />
        </>
     );
}
 
export default AddNew;