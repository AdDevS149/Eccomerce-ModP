// import { useState } from 'react';
// // import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// // import { selectAllUsers } from '../users/usersSlice';
// // import { useNavigate } from 'react-router-dom';
// // import { useAddNewProductMutation } from './productsSlice';

// const AddPostForm = () => {
//   //   const [addNewPost, { isLoading }] = useAddNewProductMutation();
//   const [productImg, setProductImg] = useState('');
//   const [urlName, setUrlName] = useState('');
//   const [item, setItem] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [featured, setFeatured] = useState("");
//   const [qty, setQty] = useState('');
//   const [inStock, setInStock] = useState('');

//   console.log(productImg);
//   //   const navigate = useNavigate();

//   //   const [title, setTitle] = useState('');
//   //   const [content, setContent] = useState('');
//   //   const [userId, setUserId] = useState('');

//   //   const users = useSelector(selectAllUsers);

//   //   const onTitleChanged = (e) => setTitle(e.target.value);
//   //   const onContentChanged = (e) => setContent(e.target.value);
//   //   const onAuthorChanged = (e) => setUserId(e.target.value);

//   //   const canSave = [title, content, userId].every(Boolean) && !isLoading;

//   //   const onSavePostClicked = async () => {
//   //     if (canSave) {
//   //       try {
//   //         await addNewPost({ title, body: content, userId }).unwrap();

//   //         setTitle('');
//   //         setContent('');
//   //         setUserId('');
//   //         navigate('/');
//   //       } catch (err) {
//   //         console.error('Failed to save the product', err);
//   //       }
//   //     }
//   //   };

//   //   const usersOptions = users.map((user) => (
//   //     <option key={user.id} value={user.id}>
//   //       {user.name}
//   //     </option>
//   //   ));

//   const productImageUploadHandler = (e) => {
//     const file = e.target.files[0];
//     console.log(file);
//     TransformFile(file);
//   };
//   const TransformFile = (file) => {
//     // reader - built in Javascript
//     const reader = new FileReader();

//     if (file) {
//       reader.readAsDataURL(file);
//       reader.onloadend = () => setProductImg(reader.result);
//     } else {
//       //case open the product to update, but then cancel
//       setProductImg('');
//     }
//   };

//   return (
//     <section>
//       <h2>Add a New Product</h2>
//       <form>
//         {/* <label htmlFor='productTitle'>Image:</label> */}
//         <input type='file' accept='image/' id='productTitle' name='productTitle' onChange={productImageUploadHandler} required />

//         <div className='relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
//           {/* <label htmlFor='urlName' className='block text-xs font-medium text-gray-900'>
//             UrlName
//           </label> */}
//           <input
//             autoFocus
//             id='urlName'
//             type='text'
//             value={urlName}
//             placeholder='UrlName'
//             required
//             className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
//             name='urlName'
//             onChange={(e) => {
//               setUrlName(e.target.value);
//             }}
//           />
//         </div>

//         <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
//           {/* <label htmlFor='item' className='block text-xs font-medium text-gray-900'>
//             Item
//           </label> */}
//           <input
//             className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
//             type='text'
//             id='item'
//             placeholder='Item'
//             name='item'
//             value={item}
//             onChange={(e) => {
//               setItem(e.target.value);
//             }}
//           />
//         </div>

//         {/* <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
//           <label htmlFor='image' className='block text-xs font-medium text-gray-900'>
//             Image
//           </label>
//           <input
//             className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
//             type='text'
//             id='image'
//             placeholder='Image'
//             name='image'
//             value={image}
//             onChange={(e) => {
//               setImage(e.target.value);
//             }}
//           />
//         </div> */}

//         <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
//           {/* <label htmlFor='price' className='block text-xs font-medium text-gray-900'>
//             Price
//           </label> */}
//           <input
//             className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
//             type='number'
//             id='price'
//             placeholder='Price'
//             name='price'
//             value={price}
//             onChange={(e) => {
//               setPrice(e.target.value);
//             }}
//           />
//         </div>

//         <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
//           {/* <label htmlFor='description' className='block text-xs font-medium text-gray-900'>
//             Description
//           </label> */}
//           <input
//             className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
//             type='text'
//             id='description'
//             placeholder='Description'
//             name='description'
//             value={description}
//             onChange={(e) => {
//               setDescription(e.target.value);
//             }}
//           />
//         </div>

//         <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
//           {/* <label htmlFor='featured' className='block text-xs font-medium text-gray-900'>
//             Featured
//           </label> */}
//           <input
//             className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
//             type='boolean'
//             id='featured'
//             placeholder='Featured?'
//             name='featured'
//             value={featured}
//             onChange={(e) => {
//               setFeatured(e.target.value);
//             }}
//           />
//         </div>
//         {/* <select onChange={(e) => setFeatured(e.target.value)} required>
//           <option value=''>Select if featured Item</option>
//           <option value='true'>True</option>
//           <option value='false'>False</option>
//         </select> */}

//         <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
//           {/* <label htmlFor='qty' className='block text-xs font-medium text-gray-900'>
//             Quantity
//           </label> */}
//           <input
//             className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
//             type='number'
//             id='qty'
//             placeholder='Quantity'
//             name='qty'
//             value={qty}
//             onChange={(e) => {
//               setQty(e.target.value);
//             }}
//           />
//         </div>

//         <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
//           {/* <label htmlFor='productInStock' className='block text-xs font-medium text-gray-900'>
//             In Stock
//           </label> */}
//           <input
//             className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
//             type='number'
//             id='productInStock'
//             placeholder='Quantity In Stock'
//             name='productInStock'
//             value={inStock}
//             onChange={(e) => {
//               setInStock(e.target.value);
//             }}
//           />
//         </div>

//         <div>
//           {productImg ? (
//             <>
//               <img src={productImg} alt='my product img' />
//             </>
//           ) : (
//             <p>Image preview will appear here!</p>
//           )}
//         </div>
//         <Link to='/all'>
//           {/* <button type='submit' onClick={addProduct}> */}
//           <button type='submit'>Add Product</button>
//         </Link>
//         {/* <input type='text' id='productTitle' name='productTitle' value={title} onChange={onTitleChanged} />
        
//         <label htmlFor='productAuthor'>Author:</label>
//         <select id='productAuthor' value={userId} onChange={onAuthorChanged}>
//           <option value=''></option> */}
//         {/* {usersOptions} */}
//         {/* </select> */}
//         {/* <label htmlFor='productContent'>Content:</label> */}
//         {/* <textarea id='productContent' name='productContent' value={content} onChange={onContentChanged} /> */}
//         {/* <button type='button' onClick={onSavePostClicked} disabled={!canSave}>
//           Save Post
//         </button> */}
//       </form>
//     </section>
//   );
// };
// export default AddPostForm;
