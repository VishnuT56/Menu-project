
import axios from "axios";


export const getMenus = async () => {
    const response = await axios.get(process.env.API_URL);
    return response.data;
};

export const createMenu = async (menu) => {
    const response = await axios.post(process.env.API_URL, menu);
    return response.data;
};

