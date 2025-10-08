const API_URL = 'http://localhost/huellas-amor';

export const authService = {
  register: async (userData) => {
    try {
      const response = await fetch(`${API_URL}/register.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });
      return await response.json();
    } catch (error) {
      return { success: false, message: 'Error de conexión' };
    }
  },

  login: async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/login.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      });
      return await response.json();
    } catch (error) {
      return { success: false, message: 'Error de conexión' };
    }
  }
};