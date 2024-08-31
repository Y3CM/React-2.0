import axios from "axios";

const URL = "http://localhost:3001/api/categorias";


export const getCategorias  = async () => {

    try {
        const response = await axios.get(URL)
       //console.log (" response servicio   " + JSON.stringify(response))
        return (response.data)
    } catch (error) {
        console.error('Error al leer la API:', error);
        throw new Error('Error al leer la API: ' + error.message);
    }
}