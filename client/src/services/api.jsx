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
  // const user = JSON.parse(localStorage.getItem('user'));
  const response = await api.post("/property",{
    name,state,cultivated_area,total_area,city
  }
  );
  return response.data;
};

export const updatePropertys = async (id,name,state,cultivated_area,total_area,city) => {
  const response = await api.put(`/property/${id}`,{
    name,state,cultivated_area,total_area,city});
  return response.data;
};

export const deletePropertys = async (id) => {
  const response = await api.delete(`/property/${id}`)
  return response.data;
};

export const getBatch = async (id) => {
  const response = await api.get(`/batch/property/${id}`)
  return response.data;
};

export const createBatch = async (id, name, activity, geographic_coordinates) => {
  const response = await api.post(`/batch/property/${id}`,
  {
    name,
    activity,
    geographic_coordinates,
  })
  return response.data;
};

export const updateBatch = async (batch_id, property_id, name, activity) => {
  const response = await api.put(`/batch/${batch_id}/property/${property_id}`,
  {
    name,
    activity,
  })
  return response.data;
};

export const deleteBatch = async (batch_id, property_id) => {
  const response = await api.delete(`/batch/${batch_id}/property/${property_id}`)
  return response.data;
};
