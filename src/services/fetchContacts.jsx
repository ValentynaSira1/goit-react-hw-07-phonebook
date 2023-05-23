import axios from 'axios';

const URL = 'https://646ccfca7b42c06c3b2c12e8.mockapi.io/contacts';

export const getContacts = async () => {
  try {
    const contacts = await axios.get(URL);
    return contacts.data;
  } catch (error) {
    console.log(error);
  }
};

export const addNewContact = async contact => {
  try {
    const contacts = await axios.post(URL, contact);
    return contacts.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContactById = async id => {
  try {
    const contacts = await axios.delete(`${URL}/${id}`);
    return contacts.data;
  } catch (error) {
    console.log(error);
  }
};