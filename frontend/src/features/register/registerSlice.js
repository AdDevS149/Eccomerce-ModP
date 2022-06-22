// import { createSlice } from '@reduxjs/toolkit';

// const registerSlice = createSlice({
//   name: 'register',
//   initialState: { user: null, pwd: null, token: null},
//   reducers: {
//     setCredentials: (state, action) => {
//       const { user, pwd, accessToken  } = action.payload;
//       state.user = user
//       state.pwd = pwd;
//       state.token = accessToken
      
//     },
//     // logOut: (state, action) => {
//     //   state.user = null;
//     //   state.token = null;
//     // },
//   },
// });

// export const {setCredentials} = registerSlice.actions

// export default registerSlice.reducer

// export const selectCurrentUser = (state) => state.register.user
// export const selectCurrentPwd = (state) => state.register.pwd
// export const selectCurrentToken = (state) => state.register.token