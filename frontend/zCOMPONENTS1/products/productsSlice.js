// import {apiSlice} from '../../app/api/apiSlice'

// export const 



// import {
//     createSlice,
//     nanoid,
// //     createAsyncThunk,
// //     createSelector,
// //     createEntityAdapter
// } from "@reduxjs/toolkit"
// import PostProduct from "./PostProduct"
// // import { sub } from 'date-fns';
// // import axios from "axios";

// const initialState = [
//     {id: "1", title: "Learning etc", content: "i hear goo things"},
//     {id: "2", title: "More slices", content: "i not so good tings"}
// ]

// const productsSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {
//         productAdded: {
//             reducer(state, action) {
//                 // payload is the form data sent
//                 state.push(action.payload)
//             },
//             prepare(title, content, userId) {
//                 return {
//                     payload: {
//                         id: nanoid(),
//                         title,
//                         content,
//                         // date: new Date().toISOString(),
//                         // userId,
//                         // reactions: {
//                         //     thumbsUp: 0,
//                         //     wow: 0,
//                         //     heart: 0,
//                         //     rocket: 0,
//                         //     coffee: 0
//                         // }
//                     }}}}
//                 }
    
//         })

// export const selectAllProducts = (state) => state.products;

// export const { productAdded, } = productsSlice.actions

// export default  productsSlice.reducer

// const POSTS_URL = 'http://localhost:4000/api/products';

// const postsAdapter = createEntityAdapter({
//     sortComparer: (a, b) => b.date.localeCompare(a.date)
// })

// const initialState = postsAdapter.getInitialState({
//     status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
//     error: null,
//     count: 0
// })

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//     const response = await axios.get(POSTS_URL)
//     return response.data
// })

// export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
//     const response = await axios.post(POSTS_URL, initialPost)
//     return response.data
// })

// export const updatePost = createAsyncThunk('posts/updatePost', async (initialPost) => {
//     const { id } = initialPost;
//     // try-catch block only for development/testing with fake API
//     // otherwise, remove try-catch and add updatePost.rejected case
//     try {
//         const response = await axios.put(`${POSTS_URL}/${id}`, initialPost)
//         return response.data
//     } catch (err) {
//         //return err.message;
//         return initialPost; // only for testing Redux!
//     }
// })

// export const deletePost = createAsyncThunk('post/deletePost', async (initialPost) => {
//     const { id } = initialPost;

//     const response = await axios.delete(`${POSTS_URL}/${id}`)
//     if (response?.status === 200) return initialPost;
//     return `${response?.status}: ${response?.statusText}`;
// })

// const postsSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {
//         reactionAdded(state, action) {
//             const { postId, reaction } = action.payload
//             const existingPost = state.entities[postId]
//             if (existingPost) {
//                 existingPost.reactions[reaction]++
//             }
//         },
//         increaseCount(state, action) {
//             state.count = state.count + 1
//         }
//     },
//     extraReducers(builder) {
//         builder
//             .addCase(fetchPosts.pending, (state, action) => {
//                 state.status = 'loading'
//             })
//             .addCase(fetchPosts.fulfilled, (state, action) => {
//                 state.status = 'succeeded'
//                 // Adding date and reactions
//                 let min = 1;
//                 const loadedPosts = action.payload.map(post => {
//                     post.date = sub(new Date(), { minutes: min++ }).toISOString();
//                     post.reactions = {
//                         thumbsUp: 0,
//                         wow: 0,
//                         heart: 0,
//                         rocket: 0,
//                         coffee: 0
//                     }
//                     return post;
//                 });

//                 // Add any fetched posts to the array
//                 postsAdapter.upsertMany(state, loadedPosts)
//             })
//             .addCase(fetchPosts.rejected, (state, action) => {
//                 state.status = 'failed'
//                 state.error = action.error.message
//             })
//             .addCase(addNewPost.fulfilled, (state, action) => {
//                 action.payload.userId = Number(action.payload.userId)
//                 action.payload.date = new Date().toISOString();
//                 action.payload.reactions = {
//                     thumbsUp: 0,
//                     wow: 0,
//                     heart: 0,
//                     rocket: 0,
//                     coffee: 0
//                 }
//                 console.log(action.payload)
//                 postsAdapter.addOne(state, action.payload)
//             })
//             .addCase(updatePost.fulfilled, (state, action) => {
//                 if (!action.payload?.id) {
//                     console.log('Update could not complete')
//                     console.log(action.payload)
//                     return;
//                 }
//                 action.payload.date = new Date().toISOString();
//                 postsAdapter.upsertOne(state, action.payload)
//             })
//             .addCase(deletePost.fulfilled, (state, action) => {
//                 if (!action.payload?.id) {
//                     console.log('Delete could not complete')
//                     console.log(action.payload)
//                     return;
//                 }
//                 const { id } = action.payload;
//                 postsAdapter.removeOne(state, id)
//             })
//     }
// })

// //getSelectors creates these selectors and we rename them with aliases using destructuring

// export default productsSlice.reducer
// export const {
//     selectAll: selectAllPosts,
//     selectById: selectPostById,
//     selectIds: selectPostIds
//     // Pass in a selector that returns the posts slice of state
// } = postsAdapter.getSelectors(state => state.posts)


// export const getPostsStatus = (state) => state.posts.status;
// export const getPostsError = (state) => state.posts.error;
// export const getCount = (state) => state.posts.count;

// export const selectPostsByUser = createSelector(
    // [selectAllPosts, (state, userId) => userId],
//     (posts, userId) => posts.filter(post => post.userId === userId)
// )

// export const { increaseCount, reactionAdded } = postsSlice.actions

