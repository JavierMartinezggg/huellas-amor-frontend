import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../../services/api';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await authService.login({
        email: formData.email,
        password: formData.password
      });

      if (result.success) {
        alert('Inicio de sesión exitoso');
        navigate('/');
      } else {
        alert(result.message || 'Error en el inicio de sesión');
      }
    } catch (error) {
      alert('Error de conexión con el servidor');
    }
  };

  return (
    <div className="form-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="ejemplo@correo.com"
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <button type="submit" className="btn btn--primary">
          Entrar
        </button>
      </form>

      <p>
        ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default Login;