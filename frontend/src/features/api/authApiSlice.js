import { apiSlice } from '../api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/public/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    registerUser: builder.mutation({
      query: ({username, email, password}) => {
        return {
          url: '/public/register',
          method: 'POST',
          body: {username, email, password}
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation} = authApiSlice;
