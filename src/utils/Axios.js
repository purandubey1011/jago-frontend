import axios from 'axios';

const instance = axios.create({
    baseURL: "https://jago-backend.onrender.com/",
    // baseURL: "http://localhost:3000/",
    headers: {
        "Content-Type": "application/json",
    },
});


export default instance;