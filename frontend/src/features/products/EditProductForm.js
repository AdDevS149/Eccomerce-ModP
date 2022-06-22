// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// import { productUpdated } from './productsSlice'

// const EditProductForm = ({ match }) => {
//   const { productId } = match.params

//   const product = useSelector(state =>
//     state.products.find(product => product.id === productId)
//   )

//   const [title, setTitle] = useState(product.title)
//   const [content, setContent] = useState(product.content)

//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const onTitleChanged = e => setTitle(e.target.value)
//   const onContentChanged = e => setContent(e.target.value)

//   const onSaveProductClicked = () => {
//     if (title && content) {
//       dispatch(productUpdated({ id: productId, title, content }))
//       navigate(`/products/${productId}`)
//     }
//   }

//   return (
//     <section>
//       <h2>Edit Product</h2>
//       <form>
//         <label htmlFor="productTitle">Product Title:</label>
//         <input
//           type="text"
//           id="productTitle"
//           name="productTitle"
//           placeholder="What's on your mind?"
//           value={title}
//           onChange={onTitleChanged}
//         />
//         <label htmlFor="productContent">Content:</label>
//         <textarea
//           id="productContent"
//           name="productContent"
//           value={content}
//           onChange={onContentChanged}
//         />
//       </form>
//       <button type="button" onClick={onSaveProductClicked}>
//         Save Product
//       </button>
//     </section>
//   )
// }

// export default EditProductForm










// // import { useState } from 'react'
// // import { useSelector } from 'react-redux'
// // import { selectPostById } from './postsSlice'
// // import { useParams, useNavigate } from 'react-router-dom'

// // import { selectAllUsers } from "../users/usersSlice";
// // import { useUpdatePostMutation, useDeletePostMutation } from "./postsSlice";

// // const EditPostForm = () => {
// //     const { postId } = useParams()
// //     const navigate = useNavigate()

// //     const [updatePost, { isLoading }] = useUpdatePostMutation()
// //     const [deletePost] = useDeletePostMutation()

// //     const post = useSelector((state) => selectPostById(state, Number(postId)))
// //     const users = useSelector(selectAllUsers)

// //     const [title, setTitle] = useState(post?.title)
// //     const [content, setContent] = useState(post?.body)
// //     const [userId, setUserId] = useState(post?.userId)

// //     if (!post) {
// //         return (
// //             <section>
// //                 <h2>Post not found!</h2>
// //             </section>
// //         )
// //     }

// //     const onTitleChanged = e => setTitle(e.target.value)
// //     const onContentChanged = e => setContent(e.target.value)
// //     const onAuthorChanged = e => setUserId(Number(e.target.value))

// //     const canSave = [title, content, userId].every(Boolean) && !isLoading;

// //     const onSavePostClicked = async () => {
// //         if (canSave) {
// //             try {
// //                 await updatePost({ id: post.id, title, body: content, userId }).unwrap()

// //                 setTitle('')
// //                 setContent('')
// //                 setUserId('')
// //                 navigate(`/post/${postId}`)
// //             } catch (err) {
// //                 console.error('Failed to save the post', err)
// //             }
// //         }
// //     }

// //     const usersOptions = users.map(user => (
// //         <option
// //             key={user.id}
// //             value={user.id}
// //         >{user.name}</option>
// //     ))

// //     const onDeletePostClicked = async () => {
// //         try {
// //             await deletePost({ id: post.id }).unwrap()

// //             setTitle('')
// //             setContent('')
// //             setUserId('')
// //             navigate('/')
// //         } catch (err) {
// //             console.error('Failed to delete the post', err)
// //         }
// //     }

// //     return (
// //         <section>
// //             <h2>Edit Post</h2>
// //             <form>
// //                 <label htmlFor="postTitle">Post Title:</label>
// //                 <input
// //                     type="text"
// //                     id="postTitle"
// //                     name="postTitle"
// //                     value={title}
// //                     onChange={onTitleChanged}
// //                 />
// //                 <label htmlFor="postAuthor">Author:</label>
// //                 <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
// //                     <option value=""></option>
// //                     {usersOptions}
// //                 </select>
// //                 <label htmlFor="postContent">Content:</label>
// //                 <textarea
// //                     id="postContent"
// //                     name="postContent"
// //                     value={content}
// //                     onChange={onContentChanged}
// //                 />
// //                 <button
// //                     type="button"
// //                     onClick={onSavePostClicked}
// //                     disabled={!canSave}
// //                 >
// //                     Save Post
// //                 </button>
// //                 <button className="deleteButton"
// //                     type="button"
// //                     onClick={onDeletePostClicked}
// //                 >
// //                     Delete Post
// //                 </button>
// //             </form>
// //         </section>
// //     )
// // }

// // export default EditPostForm