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

    return (
        <>
            <PageTitle title="Clients Report"/>
            {clientsData ? (
                <div>
                    <p>Total number of clients: {clientsData.length}</p>
                </div>
            ) : (
                <p>Loading clients data</p>
            )}
        </>
    )
}

export default ClientsReport;