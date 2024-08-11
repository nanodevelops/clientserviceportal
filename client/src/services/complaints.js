import axios from "axios";
const backendUrl = "http://localhost:3003";
axios.defaults.baseURL = backendUrl;

const complaintsEndpoint = "/api/complaints";

const getComplaints = () => {
    const request = axios.get(complaintsEndpoint)
    return request.then((response) => response.data)
}
const getComplaintsCount = () => {
    const request = axios.get(`${complaintsEndpoint}/count`)
    return request.then((response) => response.data.count)
}
const createComplaint = (newComplaintObject) => {
    const request = axios.post(complaintsEndpoint, newComplaintObject)
    return request.then((response) => response.data)
}

const functions = {
    getComplaints,
    getComplaintsCount,
    createComplaint
}

export default functions;