import React, { useState } from "react";
import ClientForm from "../../components/ClientForm/ClientForm";
import clientsService from "../../services/clients";
import { useClientContext } from "../../ClientContext";

const AddNew = () => {
    const {updateClients} = useClientContext;
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
        <>
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