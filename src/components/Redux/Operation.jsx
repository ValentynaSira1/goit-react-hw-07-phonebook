import { createAsyncThunk } from "@reduxjs/toolkit"
import { getContacts, addNewContact, deleteContactById } from "services/fetchContacts"


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContact',
    async () => {
      const contacts = await getContacts()
      return contacts
    }
  )
export const postNewContact = createAsyncThunk(
    'contacts/addContact',
    async (contact) => {
      const contacts = await addNewContact(contact)
      return contacts
    }
  )
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
      const contacts = await deleteContactById(id)
      return contacts
    }
  )
