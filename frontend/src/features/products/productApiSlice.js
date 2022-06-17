// src/services/productApi.js
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../../app/api/apiSlice';

// export const productsApiSlice = createApi({
//   reducerPath: 'products',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:4000',
//   }),
export const productsApiSlice = apiSlice.injectEndpoints
({

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
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

export const { useGetProductsQuery, 
  useAddProductMutation, 
  useUpdateProductMutation, 
  useDeleteProductMutation 
} = productsApiSlice;
