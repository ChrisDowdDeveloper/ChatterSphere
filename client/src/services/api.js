import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

export const createUser = async(credentials) => {
    console.log("submit called");
    console.log(credentials);
    try {
        const response = await axios.post(`${API_BASE_URL}/users/create`, credentials);
        return response.data;
    } catch(err) {
        throw err;
    }
}

export const login = async(userEmail, password) => {
    try {
        const credentials = { username: userEmail, password: password };
        const response = await axios.post(`${API_BASE_URL}/users/login`, credentials )
        return response.data;
    } catch(err) {
        throw err;
    }
}

export const fetchUser = async() => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        return response.data;
    } catch(err) {
        throw err;
    }
}

export const fetchChatrooms = async() => {
    try {
        const response = await axios.get(`${API_BASE_URL}/chatrooms`);
        return response.data;
    } catch(err) {
        throw err;
    }
}