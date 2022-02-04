import axios from "axios"; 

export const key = "7fe8c9c6d749db200b7880b3c5695a9076da7cce"

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4",
    headers: {
       "Authorization": `Bearer ${key}`
    }
})

export default api

