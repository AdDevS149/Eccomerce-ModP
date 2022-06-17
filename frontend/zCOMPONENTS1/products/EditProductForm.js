// import Modal from "../../Modal"
// import {useState} from 'react'
// import {useUpdateProductMutation} from '../../services/productApi'

// function EditProduct({open, onClose, toEditTitle, toEditDescription, id}) {

//   const [title, setTitle] = useState(toEditTitle)
//   const [description, setDescription] = useState(toEditDescription)
//   const [updateProduct] = useUpdateProductMutation()

//   const handleUpdateProduct = (e) => {
//     e.preventDefault()
//     const product = {
//       title,
//       description,
//       featured: false,
//       id
//     }
//     updateProduct(product)
//     onClose()
//   }

//   return (
//     <Modal modalLable='Edit Product' onClose={onClose} open={open}>
//       <form className='editProduct' name='updateProduct' onSubmit={handleUpdateProduct}>
//         <input
//           type='text'
//           name='title'
//           onChange={(e) => setTitle(e.target.value.toUpperCase())} 
//           value={title}/>
//         <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
//         <button type='submit'>Edit</button>
//       </form>
//     </Modal>
//   )
// }

// export default EditProduct




// // import { useState } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { selectPostById, updatePost, deletePost } from './productsSlice'
// // import { useParams, useNavigate } from 'react-router-dom'

// // import { selectAllUsers } from "../users/usersSlice";

// // const EditProductForm = () => {
// //     const { postId } = useParams()
// //     const navigate = useNavigate()

// //     const post = useSelector((state) => selectPostById(state, Number(postId)))
// //     const users = useSelector(selectAllUsers)

// //     const [title, setTitle] = useState(post?.title)
// //     const [content, setContent] = useState(post?.body)
// //     const [userId, setUserId] = useState(post?.userId)
// //     const [requestStatus, setRequestStatus] = useState('idle')

// //     const dispatch = useDispatch()

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

// //     const canSave = [title, content, userId].every(Boolean) && requestStatus === 'idle';

// //     const onSavePostClicked = () => {
// //         if (canSave) {
// //             try {
// //                 setRequestStatus('pending')
// //                 dispatch(updatePost({ id: post.id, title, body: content, userId, reactions: post.reactions })).unwrap()

// //                 setTitle('')
// //                 setContent('')
// //                 setUserId('')
// //                 navigate(`/post/${postId}`)
// //             } catch (err) {
// //                 console.error('Failed to save the post', err)
// //             } finally {
// //                 setRequestStatus('idle')
// //             }
// //         }
// //     }

// //     const usersOptions = users.map(user => (
// //         <option
// //             key={user.id}
// //             value={user.id}
// //         >{user.name}</option>
// //     ))

// //     const onDeletePostClicked = () => {
// //         try {
// //             setRequestStatus('pending')
// //             dispatch(deletePost({ id: post.id })).unwrap()

// //             setTitle('')
// //             setContent('')
// //             setUserId('')
// //             navigate('/')
// //         } catch (err) {
// //             console.error('Failed to delete the post', err)
// //         } finally {
// //             setRequestStatus('idle')
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

// // export default EditProductForm