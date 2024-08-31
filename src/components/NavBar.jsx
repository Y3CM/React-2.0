
import React, { useState, useEffect } from 'react';
import { getCategorias } from '../services/categorias.js'; 
const NavBar = () => {
    const [categorias, setCategorias] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const data = await getCategorias();
                setCategorias(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchCategorias();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="/CORA.png" alt="CORA" style={{ height: '40px', width: 'auto' }} /></a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link active dropdown-toggle" 
                                href="#" 
                                id="navbarDropdown" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {categorias.length > 0 ? (
                                    categorias.map((categoria, index) => (
                                        <li key={index}>
                                            <a className="dropdown-item" href={`#${categoria.categoria}`}>
                                                {categoria.categoria}
                                            </a>
                                        </li>
                                    ))
                                ) : (
                                    <li><a className="dropdown-item" href="#">No categories available</a></li>
                                )}
                                {error && (
                                    <li><a className="dropdown-item" href="#">Error loading categories</a></li>
                                )}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#"  aria-disabled="false">Blog</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Buscar" 
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

