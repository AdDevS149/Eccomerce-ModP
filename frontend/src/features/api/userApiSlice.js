import { apiSlice } from '../api/apiSlice';

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'admin/users',
      providesTags: ['User']
    }),
    getUser: builder.query({
      query: userId => `/admin/user/find/${userId}`,
    }),
    createUser: builder.mutation({
      query: (initialUser) => ({
        url: '/users',
        method: 'POST',
        body: initialUser,
      }),
      invalidatesTags: ['User']
    }),
    // updateUser: builder.mutation({
    //   query: (product) => ({
    //     url: `/users/${user._id}`,
    //     method: 'PUT',
    //     body: product,
    //   }),
    // }),
    editUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user._id}`,
        method: 'PUT',
        body: user,
      }),
    }),
    deleteUser: builder.mutation({
      query: ({ _id }) => ({
        url: `/users/${_id}`,
        method: 'DELETE',
      }),
    }),
    
  }),
});




export const { useGetUsersQuery, useGetUserQuery, useCreateUserMutation, useUpdateUserMutation, useEditUserMutation } = userApiSlice;
