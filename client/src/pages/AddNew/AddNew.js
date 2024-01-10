import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        clientsService
        .getClients()
        .then((allClients) => {
            setClients(allClients)
        })
        .catch((err) => alert(err))
    }, [])


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

        // Check for duplicate records
        // const alreadyExists = clients.some(
        //     (client) => client.firstName.toLowerCase() === newClientObject.firstName.toLowerCase() || client.lastName.toLowerCase() === newClientObject.lastName.toLowerCase()
        // )
        
        // if(alreadyExists){
        //     const client = clients.find((c) => c.firstName)
        // }

        clientsService.createClient(newClientObject)
        .then(returnedClient => {
            setClients(clients.concat(returnedClient))
            setSuccessMessage(`New Client ${returnedClient.firstName} ${returnedClient.lastName} added`)
            setTimeout(() => {
                setSuccessMessage(null)
            }, 3000)
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