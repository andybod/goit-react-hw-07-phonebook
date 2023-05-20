import axios from 'axios';

axios.defaults.baseURL = 'https://646178d6185dd9877e3d5a01.mockapi.io';

export const postContact = async ({ name, phone }) => {
  const { data } = await axios.post('/contacts', {
    name,
    phone,
  });
  return data;
};

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
