import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', // optional
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  tagTypes: ['Product', 'User'],
  endpoints: (builder) => ({}),
});


// getPosts: builder.query({
//   query: () => '/products',
//   // providesTags: ['Product'],
// }),
// getPost: builder.query({
//   query: (productId) => `/product/${productId}`,
// }),
// addNewProduct: builder.mutation({
//   query: (initialProduct) => ({
//     url: '/product',
//     method: 'POST',
//     body: initialProduct,
//   }),
//   invalidatesTags: ['Product'],
// }),
//   }),
// })

// export const {
//   useGetProductsQuery,
//   // useGetProductQuery,
//   // useAddNewProductMutation,
// } = apiSlice

// // Import the RTK Query methods from the React-specific entry point
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Define our single API slice object
// export const productApi = createApi({
//   reducerPath: 'api', // optional already by default
//   baseQuery: fetchBaseQuery({ baseUrl: '/http://localhost:4000' }),
//   // tagTypes: ['products'],
//   endpoints: (builder) => ({
//     products: builder.query({
//       query: () => '/products'
//     }),
//     addProduct: builder.mutation({
//       query: (product) => ({
//         url: '/products',
//         method: 'POST',
//         body: product,
//       }),
//     }),
//     updateProduct: builder.mutation({
//       query: ({ id, ...rest }) => ({
//         url: `/products/${id}`,
//         method: 'PUT',
//         body: rest,
//       }),
//     }),
//     deleteProduct: builder.mutation({
//       query: (id) => ({
//         url: `/products/${id}`,
//         method: 'DELETE',
//       }),
//     }),
//   }),
// });

// export const { useProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productApi;

// export const {useGetProductsQuery} = apiSlice;
// // fetchBaseQuery compared with axios

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import { setCredentials, logOut } from '../../features/auth/authSlice';

// // this is similiar to axios
// const baseQuery = fetchBaseQuery({
//   baseUrl: 'http://localhost:4000',
//   // allows to send back only the http only secure cookie
//   credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token;
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// // wrapping base token so that if fails or expires can get basically a refreshToken
// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   // if runs above wiith no errors skip dow the result and return
//   // other run the refresh token logic
//   let result = await baseQuery(args, api, extraOptions);

//   // send 403 if accessToken has expired
//   if (result?.error?.originalStatus === 403) {
//     console.log('sending refresh token');
//     // send refresh token to get new access token
//     const refreshResult = await baseQuery('/refresh', api, extraOptions);
//     console.log(refreshResult);
//     if (refreshResult?.data) {
//       // user should already be in state if already logged in
//       const user = api.getState().auth.user;
//       //store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data, user }));
//       //retry the  original query with new access token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logOut());
//     }
//   }

//   return result;
// };

// export const apiSlice = createApi({
//   baseQuery: baseQueryWithReauth,
//   // use extended api slices to identity different features seperately
//   endpoints: (builder) => ({}),
// });
