import axios from 'axios';

export const loginUser = async (username, password) => {
  const { data } = await axios.post('/api/login', { username, password });
  console.log('Login successful:', data);
};

// Register function
export const registerUser = async (username, password) => {

      const { data } = await axios.post('/api/register', { username, password });
      console.log('Registration successful:', data);
    
  };