import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../../services/api';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    
    if (formData.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      const result = await authService.register({
        nombre: formData.nombre,
        email: formData.email,
        password: formData.password
      });

      if (result.success) {
        alert('Registro exitoso');
        navigate('/login');
      } else {
        alert(result.message || 'Error en el registro');
      }
    } catch (error) {
      alert('Error de conexión con el servidor');
    }
  };

  return (
    <div className="form-container">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Ingresa tu nombre completo"
          />
        </div>

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
            placeholder="Mínimo 6 caracteres"
            minLength="6"
          />
        </div>

        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Repite tu contraseña"
          />
        </div>

        <button type="submit" className="btn btn--primary">
          Crear cuenta
        </button>
      </form>

      <p>
        ¿Ya tienes cuenta? <Link to="/login">Entrar</Link>
      </p>
    </div>
  );
};

export default Register;