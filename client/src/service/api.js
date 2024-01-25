import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

export const createUser = async(credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/create`, credentials);
        return response.data;
    } catch(err) {
        throw err;
    }
}

export const login = async(form) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/login`, form )
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

export const fetchUserByUsername = async(username) => {
    try {
       const response = await axios.get(`${API_BASE_URL}/users/${username}`);
       return response.data;
    } catch (err) {
        throw err
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

export const fetchAvailableChatrooms = async(user) => {
    const username = user.username;
    const userId = user._id; 
    try {
        const response = await axios.get(`${API_BASE_URL}/chatrooms/${username}`, userId);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export const joinedChatrooms = async(userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/chatrooms/${userId}/joined`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export const joinAvailableChatroom = async(chatroomId, userId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/chatrooms/${chatroomId}`, { "userId": userId });
        return response.data;
    } catch (err) {
        throw err;
    }
}