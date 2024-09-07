import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import NavBar from './NavBar.jsx';

const HomePage = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? (
                <>
                    <h1>Welcome to the Home Page!</h1>
                    {/* El NavBar debe ser visible solo cuando el usuario esté autenticado */}
                    <NavBar />
                </>
            ) : (
                <>
                    <h1>Welcome to Our Application!</h1>
                    <p>Please <Link to="/login">log in</Link> to access more features.</p>
                </>
            )}
        </div>
    );
};

export default HomePage;
