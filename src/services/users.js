import axios from "axios";

const URL = "http://localhost:3001/api/users";


export const getUsers  = async () => {

    try {
        const response = await axios.post(URL)
       //console.log (" response servicio   " + JSON.stringify(response))
        return (response.data)
    } catch (error) {
        console.error('Error al leer la API:', error);
        throw new Error('Error al leer la API: ' + error.message);
    }
}