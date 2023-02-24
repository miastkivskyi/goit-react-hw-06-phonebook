import { createSlice } from '@reduxjs/toolkit';
import { initialStateUser } from '../redux/state';

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser.contacts,
  reducers: {
    addUser(state, { payload }) {
      state.push(payload);
    },
    deleteUser: (store, { payload }) =>
      store.filter(item => item.id !== payload),
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export const UserReducer = userSlice.reducer;
