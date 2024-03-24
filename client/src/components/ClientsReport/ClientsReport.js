import React, { useState, useEffect } from "react";
import { getClients } from "../../services/clients";
import PageTitle from "../PageTitle/PageTitle";

const ClientsReport = () => {
    const [clientsData, setClientsData] = useState(null);

    useEffect(() => {
        fetchClientsData()
    }, [])

    const fetchClientsData = async() => {
        try{
            const data = await getClients()
            setClientsData(data)
        } catch(error) {
            console.log("Error fetching clients data:", error)
        }
    }

    const calculateSummaryData = () => {
        if (!clientsData) return null

        const summaryData = {
            totalClients: clientsData.length,
            totalVulnerableClients: clientsData.filter((client) => client.vulnerability === "Disabled" || client.vulnerability === "Veteran").length,
            totalMinors: clientsData.filter((client) => parseInt(client.age, 10) < 18).length,
            totalDisabledClients: clientsData.filter((client) => client.vulnerability === "Disabled").length,
            totalVeteranClients: clientsData.filter((client) => client.vulnerability === "Veteran").length,
            totalClientsUnder18: clientsData.filter((client) => parseInt(client.age, 10) < 18).length,
            totalClients18To60: clientsData.filter((client) => parseInt(client.age, 10) >= 18 && parseInt(client.age, 10) <= 60).length,
            totalClientsAbove60: clientsData.filter((client) => parseInt(client.age, 10) > 60).length,
            mostRecentClientDate: getMostRecentClientDate(),
        }
        return summaryData
    }

    const getMostRecentClientDate = () => {
        if(!clientsData || clientsData.length === 0) return null
        const sortedClients = clientsData.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
        return new Date(sortedClients[0].date).toLocaleDateString()
    }

    const summaryData = calculateSummaryData()

    return (
        <>
            <PageTitle title="Clients Report"/>
            {summaryData ? (
                <div>
                    <p>Total number of clients: {summaryData.totalClients}</p>
                    <p>Total number of vulnerable clients: {summaryData.totalVulnerableClients}</p>
                    <p>Total number of minors: {summaryData.totalMinors}</p>
                    <p>Total number of disabled clients: {summaryData.totalDisabledClients}</p>
                    <p>Total number of veteran clients: {summaryData.totalVeteranClients}</p>
                    <p>Total number of clients under 18: {summaryData.totalClientsUnder18}</p>
                    <p>Total number of clients 18 - 60: {summaryData.totalClients18To60}</p>
                    <p>Total number of clients above 60: {summaryData.totalClientsAbove60}</p>
                    {summaryData.mostRecentClientDate && (
                        <p>Date of last recently added client: {summaryData.mostRecentClientDate}</p>
                    )}
                </div>
            ) : (
                <p>Loading clients data</p>
            )}
        </>
    )
}

export default ClientsReport;