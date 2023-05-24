import { createAsyncThunk } from "@reduxjs/toolkit"
import { getContacts, addNewContact, deleteContactById } from "services/fetchContacts"


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
      const response = await getContacts();
      return response;
    }
  );
export const postNewContact = createAsyncThunk(
    'contacts/addContact',
    async (contact) => {
      const response = await addNewContact(contact);
      return response;
    }
  );
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
      const response = await deleteContactById(id);
      return response;
    }
  );
