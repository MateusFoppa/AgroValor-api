import axios from "axios";
import { getShowUserProfile } from "../../services/api";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext()

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [updateUser, setUpdateUser] = useState(localStorage.getItem('user') ?? '');


  useEffect(() => {
    (async () => {
      try {
        const UserRequest = await getShowUserProfile()

        const requests = [UserRequest]

        const [userResponse] = await Promise.all(requests)

        setUser(userResponse)

      } catch (error) {
        console.error(error)
        setUser('')
      }
    })()
  }, [updateUser, email])

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Por favor, complete os campos');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/sessions', {
        email,
        password,
      });
      const { user, token } = response.data;
      localStorage.clear();
      setUpdateUser(user);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success('Aguarde! Entrando no AgroValor');
      setTimeout(() => {
        navigate('/property');
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      toast.error('Por favor, complete os campos');
      return;
    }

    try {
      await axios.post('http://localhost:5000/user', {
        name,
        email,
        password,
      });
      const response = await axios.post('http://localhost:5000/sessions', {
        email,
        password,
      });
      const { user, token } = response.data;
      localStorage.clear();
      setUpdateUser(user);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success('Aguarde! Entrando no AgroValor');
      setTimeout(() => {
        navigate('/property');
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  };
  return (
    <UserContext.Provider value={{ user, setUpdateUser, email, password, name, setName, setEmail, setPassword, submitLogin: handleLogin, submitRegister: handleRegister }}>
      {children}
    </UserContext.Provider>
  )
}
