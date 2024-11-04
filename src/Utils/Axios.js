import axios from "axios";


const base_url=import.meta.env.VITE_BACKEND_URL

const Instance=axios.create({
    baseURL:base_url,
    withCredentials:true
})

export default Instance