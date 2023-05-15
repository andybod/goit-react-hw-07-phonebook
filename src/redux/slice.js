import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [], filter: '' };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(i => i.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { increment, deleteContact, setFilter } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
