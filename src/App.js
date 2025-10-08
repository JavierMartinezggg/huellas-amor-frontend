import React, { useState } from 'react';

// Componente Login
function Login({ onSwitchToRegister }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login funcionando ');
  };

  return (
    <div style={styles.container}>
      <h2>Iniciar Sesión - Huellas de Amor</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Entrar
        </button>
      </form>
      <p style={styles.text}>
        ¿No tienes cuenta? 
        <span onClick={onSwitchToRegister} style={styles.link}>
          Regístrate aquí
        </span>
      </p>
    </div>
  );
}

// Componente Register
function Register({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    
    alert('Registro funcionand');
  };

  return (
    <div style={styles.container}>
      <h2>Registrarse - Huellas de Amor</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="password"
            name="password"
            placeholder="Contraseña (mínimo 6 caracteres)"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Crear cuenta
        </button>
      </form>
      <p style={styles.text}>
        ¿Ya tienes cuenta? 
        <span onClick={onSwitchToLogin} style={styles.link}>
          Entrar aquí
        </span>
      </p>
    </div>
  );
}

// Componente principal App
function App() {
  const [currentView, setCurrentView] = useState('login');

  return (
    <div>
      <h1 style={styles.header}>Cuidado para tu mascota</h1>
      {currentView === 'login' ? (
        <Login onSwitchToRegister={() => setCurrentView('register')} />
      ) : (
        <Register onSwitchToLogin={() => setCurrentView('login')} />
      )}
    </div>
  );
}

// Estilos
const styles = {
  header: {
    textAlign: 'center',
    color: '#333',
    marginTop: '20px'
  },
  container: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '30px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  formGroup: {
    marginBottom: '15px'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
    boxSizing: 'border-box'
  },
  button: {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    backgroundColor: '#ff6600',
    color: '#fff',
    cursor: 'pointer',
    marginTop: '10px'
  },
  text: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#555'
  },
  link: {
    color: '#ff6600',
    fontWeight: '600',
    cursor: 'pointer',
    marginLeft: '5px'
  }
};

export default App;