import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);


    if (!email || !password) {
      console.error('Por favor, completa todos los campos');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/sessions', {
        email,
        password,
      });
      console.log('Server response:', response.data);
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/property')
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Password:', password);


    if (!email || !password) {
      console.error('Por favor, complete todos os campos');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/user', {
        name,
        email,
        password,
      });
      console.log('Server response:', response.data);
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/property')
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <UserContext.Provider value={{ email, password, name, setName, setEmail, setPassword, submitLogin: handleLogin, submitRegister: handleRegister }}>
      {children}
    </UserContext.Provider>
  )
}
