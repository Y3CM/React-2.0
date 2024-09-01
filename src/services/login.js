import axios from "axios";

const URL = "http://localhost:3001/api/login";

export const login = async (email, password) => {
    try {
        const response = await axios.post(URL, {
            email: email,       
            password: password  
        });
        // console.log("response servicio", JSON.stringify(response));
        return response.data;
    } catch (error) {
        console.error('Error al leer la API:', error);
        throw new Error('Error al leer la API: ' + error.message);
    }
};
