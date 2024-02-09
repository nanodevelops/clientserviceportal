import axios from "axios";
const backendUrl = "http://localhost:3003";
axios.defaults.baseURL = backendUrl;

const complaintsEndpoint = "/api/complaints";

const getComplaints = () => {
    const request = axios.get(complaintsEndpoint)
    return request.then((response) => response.data)
}

const createComplaint = (newComplaintObject) => {
    const request = axios.post(complaintsEndpoint, newComplaintObject)
    return request.then((response) => response.data)
}

const functions = {
    getComplaints,
    createComplaint
}

export default functions;