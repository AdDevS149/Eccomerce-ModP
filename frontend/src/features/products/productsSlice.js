// import { apiSlice } from '../api/apiSlice';

// export const extendedApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: () => '/products',
//       // providesTags: (result = [], error, arg)=> [
//       //   'Product',
//       //   ...result.map(({id}) => ({type: "Product", id }))
//       // ]
//     }),
//     getProduct: builder.query({
//       query: (productId) => `/products/${productId}`,
//       // providesTags: (result, error, arg) => [{type: 'Product', id: arg}],
//     }),
//     addNewProduct: builder.mutation({
//       query: (initialProduct) => ({
//         url: '/products',
//         method: 'POST',
//         body: { ...initialProduct },
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

// export const { useGetProductsQuery, useGetProductQuery, useAddNewProductMutation, useUpdateProductMutation, useDeleteProductMutation } = extendedApiSlice;
