import React from 'react';

const ProductoCard = ({ producto }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
                <img 
                    src={producto.imagen} 
                    className="card-img-top" 
                    alt={producto.nombre}
                />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <a href={producto.enlace} className="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
    );
};

export default ProductoCard;
