import axios from "axios";
const backendUrl = "http://localhost:3003";

axios.defaults.baseURL = backendUrl

const clientsEndpoint = "/api/clients";

const getClients = () => {
    const request = axios.get(clientsEndpoint)
    return request.then((response) => response.data)
}

const getClient = (id) => {
    const request = axios.get(`${clientsEndpoint}/${id}`)
    return request.then((response) => response.data)
}

const getClientsCount = () => {
    const request = axios.get(`${clientsEndpoint}/count`)
    return request.then((response) => response.data.count)
}

const createClient = (newClientObject) => {
    const request = axios.post(clientsEndpoint, newClientObject)
    return request.then((response) => response.data)
}

const functions = {
    getClients,
    getClient,
    getClientsCount,
    createClient
}

export { getClients };

export default functions;