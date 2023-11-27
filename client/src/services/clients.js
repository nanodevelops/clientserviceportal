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

const createClient = (newClientObject) => {
    const request = axios.post(clientsEndpoint, newClientObject)
    return request.then((response) => response.data)
}

const functions = {
    getClients,
    getClient,
    createClient
}

export default functions;