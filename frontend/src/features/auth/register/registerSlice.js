import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    username: null,
    email: null,
    password: null,
  },
  reducers: {

    // bring in from apiSlice which connects to internet 
    registerUser: (state, action) => {
      const { username, email, password } = action.payload;
      state.username = username;
      state.email = email;
      state.password = password;
    },
  },
});

export const { registerUser } = registerSlice.actions;
export default registerSlice.reducer;

export const selectCurrentUsername = (state) => state.register.username;
export const selectCurrentEmail = (state) => state.register.email;
export const selectCurrentPassword = (state) => state.register.password;
