import { apiSlice } from './apiSlice';

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublicProducts: builder.query({
      query: () => '/public/products',
      providesTags: ['Product'],
    }),
    getPublicProduct: builder.query({
      query: (productId) => `/admin/product/${productId}`,
    }),
    // createProduct: builder.mutation({
    //   query: (initialProduct) => ({
    //     url: 'admin/products',
    //     method: 'POST',
    //     body: initialProduct,
    //   }),
    //   invalidatesTags: ['Product'],
    // }),
    editProduct: builder.mutation({
      query: (product) => ({
        url: `/public/product/${product.product._id}`,
        method: 'PUT',
        body: product,
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
    useGetPublicProductsQuery, 
    useGetPublicProductQuery,
    useEditProductMutation,
  
} = productApiSlice;
  // useGetPublicProductQuery, useCreateProductMutation, useUpdateProductMutation, useEditProductMutation 