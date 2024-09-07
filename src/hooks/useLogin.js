import { useState } from "react";
import { login } from "../services/login.js";

const useLogin = (onLoginSuccess) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await login(email, password);
       localStorage.setItem("token", response.token); // Guardar el token en localStorage
       onLoginSuccess();
       navigate("/");
      onLoginSuccess();
    } catch (error) {
      setError("Credenciales incorrectas o error al iniciar sesión.");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleLogin,
  };
};

export default useLogin;
