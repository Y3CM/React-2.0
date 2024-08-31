import { getProductos } from "../services/productos";
import React, { useState, useEffect } from 'react';
import ProductoCard from './CardProductos.jsx'; 

export default function Productos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const data = await getProductos();
                setProductos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []); 

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container">
            <h3 style={{margin:"20px 0 20px 0"}}>Productos<span className="badge bg-success">New</span></h3> 
            <div className="row">
                {productos.map((producto, index) => (
                    <ProductoCard 
                        key={index} 
                        producto={producto} 
                    />
                ))}
            </div>
        </div>
    );
}
