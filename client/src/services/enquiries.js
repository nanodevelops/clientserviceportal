import axios from "axios";
const backendUrl = "http://localhost:3003";
axios.defaults.baseURL = backendUrl;

const enquiriesEndpoint = "/api/enquiries";

const getEnquiries = () => {
    const request = axios.get(enquiriesEndpoint)
    return request.then((response) => response.data)
}

const getEnquiriesCount = () => {
    const request = axios.get(`${enquiriesEndpoint}/count`)
    return request.then((response) => response.data.count)
}
const createEnquiry = (newEnquiryObject) => {
    const request = axios.post(enquiriesEndpoint, newEnquiryObject)
    return request.then((response) => response.data)
}

const functions = {
    getEnquiries,
    getEnquiriesCount,
    createEnquiry
}

export default functions;