import http from "@/api/interceptors";

export const getData = async (params) => {
    try {
        const response = await http.get("client/all", { params });
        return response.data;  
    } catch (error) {
        console.log(error);
    }
};
