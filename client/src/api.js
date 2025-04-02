
import axios from "axios";

const API_URL = "http://localhost:5000/api/menus";

export const getMenus = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createMenu = async (menu) => {
    const response = await axios.post(API_URL, menu);
    return response.data;
};

