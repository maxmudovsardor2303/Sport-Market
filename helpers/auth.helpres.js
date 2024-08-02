
export const saveAccessToken = (access_token) => {
    localStorage.set("access_token", access_token);
};

export const getAccessToken = () => {
    return localStorage.get("access_token");
};
