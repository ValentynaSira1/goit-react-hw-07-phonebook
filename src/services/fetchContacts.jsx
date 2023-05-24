import axios from 'axios';

const URL = 'https://646ccfca7b42c06c3b2c12e8.mockapi.io/contacts';

export const getContacts = async () => {
  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addNewContact = async contact => {
  try {
    const response = await axios.post(URL, contact);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContactById = async id => {
  try {
    const response = await axios.delete(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};