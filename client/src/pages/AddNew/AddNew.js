import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientForm from "../../components/ClientForm/ClientForm";
import clientsService from "../../services/clients";
import Notification from "../../components/Notification/Notification";

const AddNew = () => {
    const [clients, setClients] = useState([])
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
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
    const handleAgeChange = (e) => {
        setAge(e.target.value)
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
    const handleSubmit = (event) => {
        event.preventDefault()

        const newClientObject = {
            firstName,
            lastName,
            age,
            gender,
            contact,
            email,
            address,
            visitPurpose,
            entryTime,
            exitTime,
            vulnerability
        }

        clientsService.createClient(newClientObject)
        .then(returnedClient => {
            setClients(clients.concat(returnedClient))
            setSuccessMessage(`New Client ${returnedClient.firstName} ${returnedClient.lastName} added`)
            setTimeout(() => {
                setSuccessMessage(null)
            }, 10000)
            setFirstName("")
            setLastName("")
            setAge("")
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
                onAgeChange={handleAgeChange}
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