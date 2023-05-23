import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './ContactSlice';
import { filterSlice } from './FilterSlice';

export const store = configureStore({
  reducer: { contacts: contactSlice.reducer, filter: filterSlice.reducer },
});