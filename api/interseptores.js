import axios from "axios";
import { getAccessToken } from "@/helpers/auth.helpres";

const API_URL = "https://store.go-clothes.uz/v1";  
const http = axios.create({
    baseURL: API_URL
});

const addAuthorizationHeader = (config) => {
    const access_token = getAccessToken();
    if (access_token) {
        config.headers["Authorization"] = access_token;
    }
    return config;
};

http.interceptors.request.use(addAuthorizationHeader);

export default http;
