import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

export async function createUser(credentials) {
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, credentials);
        return response.data;
    } catch(err) {
        throw err;
    }
}
