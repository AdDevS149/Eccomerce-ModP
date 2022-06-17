import Modal from "../../Modal"
import {useState} from 'react'
import {useAddProductMutation} from '../../services/productApi'

function AddProduct({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [addProduct] = useAddProductMutation()

  const handleAddProduct = (e) => {
    e.preventDefault()
    const product = {
      title,
      description,
      featured: false,
    //   id: Math.random()
    }
    addProduct(product)
    onClose()
  }

  return (
    <Modal modalLable='Add Product' onClose={onClose} open={open}>
      <form className='addProduct' name='addProduct' onSubmit={handleAddProduct}>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Enter title'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task decription'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddProduct



// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';


// import { addNewProduct } from './productsSlice';
// import { selectAllUsers } from '../users/usersSlice';
// import { useNavigate } from 'react-router-dom';

// const AddProductForm = () => {
//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [userId, setUserId] = useState('');
//   const [addRequestStatus, setAddRequestStatus] = useState('idle');

//   const users = useSelector(selectAllUsers);

//   const onTitleChanged = (e) => setTitle(e.target.value);
//   const onContentChanged = (e) => setContent(e.target.value);
//   const onAuthorChanged = (e) => setUserId(e.target.value);

//   const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

//   const onSavePostClicked = () => {
//     if (canSave) {
//       try {
//         setAddRequestStatus('pending');
//         dispatch(addNewProduct({ title, body: content, userId })).unwrap();

//         setTitle('');
//         setContent('');
//         setUserId('');
//         navigate('/');
//       } catch (err) {
//         console.error('Failed to save the post', err);
//       } finally {
//         setAddRequestStatus('idle');
//       }
//     }
//   };

//   const usersOptions = users.map((user) => (
//     <option key={user.id} value={user.id}>
//       {user.name}
//     </option>
//   ));

//   return (
//     <section>
//       <h2>Add a New Post</h2>
//       <form>
//         <label htmlFor='postTitle'>Post Title:</label>
//         <input type='text' id='postTitle' name='postTitle' value={title} onChange={onTitleChanged} />
//         <label htmlFor='postAuthor'>Author:</label>
//         <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
//           <option value=''></option>
//           {usersOptions}
//         </select>
//         <label htmlFor='postContent'>Content:</label>
//         <textarea id='postContent' name='postContent' value={content} onChange={onContentChanged} />
//         <button type='button' onClick={onSavePostClicked} disabled={!canSave}>
//           Save Post
//         </button>
//       </form>
//     </section>
//   );
// };
// export default AddProductForm;
