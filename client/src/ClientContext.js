import { createContext, useContext, useState } from "react";

const ClientContext = createContext()

export function ClientProvider({ children }){
    const [clients, setClients] = useState([])

    const updateClients = (newClient) => {
        setClients(newClient)
    }

    return (
        <ClientContext.Provider value={{ clients, updateClients }}>
            {children}
        </ClientContext.Provider>
    )
}

export function useClientContext(){
    return useContext(ClientContext)
}