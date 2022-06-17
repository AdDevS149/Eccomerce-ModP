// import { apiSlice } from '../api/apiSlice';

// // extended slice instead of putting in builder of api/api/Slice
// ///////// coupled with Auth
// // injectendpoints from api/api/Slice (extended)
// export const productsApiSlice = apiSlice.injectEndpoints({
//     endpoints: builder => ({
//         getProducts: builder.query({
//             query: () => ({
//                 url: '/products',
//                 method: 'GET',
//                 // body: { ...credentials }
//             })
//         }),
//     })
// })

// export const {
//     useLoginMutation
// } = productsApiSlice
// src/services/productApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
  }),
  endpoints: (builder) => ({
    products: builder.query({
      query: () => '/products',
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: rest,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productApi;
