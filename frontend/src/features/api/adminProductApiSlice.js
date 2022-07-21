import { apiSlice } from './apiSlice';

const adminProductApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdminProducts: builder.query({
      query: () => '/admin/products',
      providesTags: ['Product'],
    }),
    getAdminProduct: builder.query({
      query: (productId) => `/admin/product/${productId}`,
    }),
    createAdminProduct: builder.mutation({
      query: (initialProduct) => ({
        url: 'admin/products',
        method: 'POST',
        body: initialProduct,
      }),
      invalidatesTags: ['Product'],
    }),
    editAdminProduct: builder.mutation({
      query: (product) => ({
        url: `/admin/products/${product.id}`,
        method: 'PUT',
        body: product
      }),
    }),
    // deleteProduct: builder.mutation({
    //   query: ({ _id }) => ({
    //     url: `/admin/products/${_id}`,
    //     method: 'DELETE',
    //   }),
    // }),
  }),
});

export const { 
  useGetAdminProductsQuery, 
  useGetAdminProductQuery, useCreateAdminProductMutation, useEditAdminProductMutation 
} = adminProductApiSlice;
