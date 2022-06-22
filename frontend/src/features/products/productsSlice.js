import { apiSlice } from '../api/apiSlice';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
  }),
});

export const { useGetProductsQuery } = extendedApiSlice;

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

// import { createSlice, nanoid } from '@reduxjs/toolkit';

// console.log(nanoid())

// const initialState = [
//   { id: '1', title: 'First Post', content: 'Hello', user: '0' },
//   { id: '2', title: 'Second Post', content: 'More text', user: '2' },
// ];

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     productAdded(state, action) {
//       state.push(action.payload);
//     },
//     prepare(title, content, userId) {
//       return {
//         payload: {
//           id: nanoid(),
//           title,
//           content,
//           user: userId
//         },
//       };
//     },
//   },
//   productUpdated(state, action) {
//     const { id, title, content } = action.payload;
//     const existingProduct = state.find((product) => product.id === id);
//     if (existingProduct) {
//       existingProduct.title = title;
//       existingProduct.content = content;
//     }
//   },
// });

// export const { productAdded, productUpdated } = productsSlice.actions;

// export default productsSlice.reducer;

// import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
// // import { sub } from 'date-fns';
// import { apiSlice } from '../api/apiSlice';

// const productsAdapter = createEntityAdapter({
//   // sortComparer: (a, b) => b.date.localeCompare(a.date)
// });

// const initialState = productsAdapter.getInitialState();

// export const extendedApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: () => '/products',
//     }),
//     getProduct: builder.query({
//       query: (productId) => `/products/${productId}`,
//     }),
//   }),
// });

//   transformResponse: responseData => {
//       let min = 1;
//       const loadedPosts = responseData.map(post => {
//           if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
//           if (!post?.reactions) post.reactions = {
//               thumbsUp: 0,
//               wow: 0,
//               heart: 0,
//               rocket: 0,
//               coffee: 0
//           }
//           return post;
//       });

//       // normalizes data - has an array with just the ids and then has entity array/use id array as a lookup(object)
//       return postsAdapter.setAll(initialState, loadedPosts)
//   },
//   providesTags: (result, error, arg) => [
//       { type: 'Post', id: "LIST" },
//       ...result.ids.map(id => ({ type: 'Post', id }))
//   ]
// }),
//   getPostsByUserId: builder.query({
//       query: id => `/posts/?userId=${id}`,
//       transformResponse: responseData => {
//           let min = 1;
//           const loadedPosts = responseData.map(post => {
//               if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
//               if (!post?.reactions) post.reactions = {
//                   thumbsUp: 0,
//                   wow: 0,
//                   heart: 0,
//                   rocket: 0,
//                   coffee: 0
//               }
//               return post;
//           });
//           return postsAdapter.setAll(initialState, loadedPosts)
//       },
//       providesTags: (result, error, arg) => [
//           ...result.ids.map(id => ({ type: 'Post', id }))
//       ]
//   }),
//   addNewPost: builder.mutation({
//       query: initialPost => ({
//           url: '/posts',
//           method: 'POST',
//           body: {
//               ...initialPost,
//               userId: Number(initialPost.userId),
//               date: new Date().toISOString(),
//               reactions: {
//                   thumbsUp: 0,
//                   wow: 0,
//                   heart: 0,
//                   rocket: 0,
//                   coffee: 0
//               }
//           }
//       }),
//       invalidatesTags: [
//           { type: 'Post', id: "LIST" }
//       ]
//   }),
//   updatePost: builder.mutation({
//       query: initialPost => ({
//           url: `/posts/${initialPost.id}`,
//           method: 'PUT',
//           body: {
//               ...initialPost,
//               date: new Date().toISOString()
//           }
//       }),
//       invalidatesTags: (result, error, arg) => [
//           { type: 'Post', id: arg.id }
//       ]
//   }),
//   deletePost: builder.mutation({
//       query: ({ id }) => ({
//           url: `/posts/${id}`,
//           method: 'DELETE',
//           body: { id }
//       }),
//       invalidatesTags: (result, error, arg) => [
//           { type: 'Post', id: arg.id }
//       ]
//   }),

//   optimistic update
//   addReaction: builder.mutation({
//       query: ({ postId, reactions }) => ({
//           url: `posts/${postId}`,
//           method: 'PATCH',
//           // In a real app, we'd probably need to base this on user ID somehow
//           // so that a user can't do the same reaction more than once
//           body: { reactions }
//       }),
//       async onQueryStarted({ postId, reactions }, { dispatch, queryFulfilled }) {
//           // `updateQueryData` requires the endpoint name and cache key arguments,
//           // so it knows which piece of cache state to update
//           const patchResult = dispatch(
//               extendedApiSlice.util.updateQueryData('getPosts', undefined, draft => {
//                   // The `draft` is Immer-wrapped and can be "mutated" like in createSlice
//                   const post = draft.entities[postId]
//                   if (post) post.reactions = reactions
//               })
//           )
//           try {
//               await queryFulfilled
//           } catch {
//               patchResult.undo()
//           }
//       }
//   })

// export const {
//   useGetProductsQuery,
//   useGetProductQuery,
//   //   useGetPostsByUserIdQuery,
//   //   useAddNewPostMutation,
//   //   useUpdatePostMutation,
//   //   useDeletePostMutation,
//   //   useAddReactionMutation
// } = extendedApiSlice;

// // returns the query result object
// export const selectProductsResult = extendedApiSlice.endpoints.getProducts.select();

// // Creates memoized selector
// const selectProductsData = createSelector(
//   selectProductsResult,
//   (postsResult) => postsResult.data // normalized state object with ids & entities
// );

// //getSelectors creates these selectors and we rename them with aliases using destructuring
// export const {
//   selectAll: selectAllProducts,
//   selectById: selectProductById,
//   //   selectIds: selectPostIds
//   // Pass in a selector that returns the posts slice of state
// } = productsAdapter.getSelectors((state) => selectProductsData(state) ?? initialState);
