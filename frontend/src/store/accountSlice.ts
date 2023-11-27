import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  username: '',
  email: '',
  password: '',
  name: '',
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.name = action.payload.name;
    },
  },
});

export const { registerUser } = accountSlice.actions;
export default accountSlice.reducer;
