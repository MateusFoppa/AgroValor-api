import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:5000',
})

const token = localStorage.getItem('token');

if (!token) {
  throw new Error('Token de autenticação não encontrado.');
}

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const getPropertys = async () => {
    const response = await api.get("/property/user");
    return response.data;
};

export const createPropertys = async (name,state,cultivated_area,total_area,city) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await api.post("/property",name,state,cultivated_area,total_area,city, user);
  return response.data;
};

export const updatePropertys = async () => {
  const response = await api.post("/property/:id");
  return response.data;
};
