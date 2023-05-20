import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:5001',
    headers: {"Content-Type": 'text/xml'}
})