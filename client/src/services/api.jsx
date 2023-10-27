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

export const createPropertys = async (name, state, cultivated_area, total_area, city) => {
  // const user = JSON.parse(localStorage.getItem('user'));
  const response = await api.post("/property", {
    name, state, cultivated_area, total_area, city
  }
  );
  return response.data;
};

export const updatePropertys = async (id, name, state, cultivated_area, total_area, city) => {
  const response = await api.put(`/property/${id}`, {
    name, state, cultivated_area, total_area, city
  });
  return response.data;
};

export const deletePropertys = async (id) => {
  const response = await api.delete(`/property/${id}`)
  return response;
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
  return response;
};

export const getExpense = async (batch_id) => {
  const response = await api.get(`expense/batch/${batch_id}`)
  return response.data;
};

export const createExpense = async (
  batch_id,
  category,
  item,
  unit_of,
  quantity,
  value_unit,
  value_total,
  data_pgto,) => {
  const response = await api.post(`/expense/batch/${batch_id}`,
    {
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      data_pgto,
    })
  return response.data;
};

export const updateExpense = async (
  batch_id,
  expense_id,
  category,
  item,
  unit_of,
  quantity,
  value_unit,
  value_total,
  data_pgto,) => {
  const response = await api.put(`/expense/${expense_id}/batch/${batch_id}`,
    {
      expense_id,
      batch_id,
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      data_pgto,
    })
  return response.data;
};

export const deleteExpense = async (batch_id, expense_id) => {
  const response = await api.delete(`/expense/${expense_id}/batch/${batch_id}`)
  return response;
};

export const getProduction = async (batch_id) => {
  const response = await api.get(`production/batch/${batch_id}`)
  return response.data;
};

export const createProduction = async (
  batch_id,
  category,
  item,
  unit_of,
  quantity,
  value_unit,
  value_total,
  receipt_date,) => {
  const response = await api.post(`/production/batch/${batch_id}`,
    {
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      receipt_date,
    })
  return response.data;
};

export const updateProduction = async (
  batch_id,
  production_id,
  category,
  item,
  unit_of,
  quantity,
  value_unit,
  value_total,
  receipt_date,) => {
  const response = await api.put(`/production/${production_id}/batch/${batch_id}`,
    {
      production_id,
      batch_id,
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      receipt_date,
    })
  return response.data;
};

export const deleteProduction = async (batch_id, production_id) => {
  const response = await api.delete(`/production/${production_id}/batch/${batch_id}`)
  return response;
};
