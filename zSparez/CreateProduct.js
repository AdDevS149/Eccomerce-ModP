// // import { useState } from 'react';
// // // import { useSelector } from 'react-redux';
// // // import { Link } from 'react-router-dom';
// // // import { selectAllUsers } from '../users/usersSlice';
// // // import { useNavigate } from 'react-router-dom';
// import { Spinner } from '../../components/Spinner';
// import styled from 'styled-components';
// import { PrimaryButton } from './CommonStyled';
// import { useAddNewProductMutation } from '../products/productsSlice';

// const CreateProduct = () => {
// const [addNewProduct, { isLoading }] = useAddNewProductMutation();

//   const [productImg, setProductImg] = useState('');
//   const [urlName, setUrlName] = useState('');
//   const [item, setItem] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [featured, setFeatured] = useState(false);
//   const [qty, setQty] = useState('');
//   const [inStock, setInStock] = useState('');

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

// // // ///////////////////////////////////////////////////
  
//   const onUrlNameChanged = (e) => setUrlName(e.target.value);
//   const onItemChanged = (e) => setItem(e.target.value);
//   const onPriceChanged = (e) => setPrice(e.target.value);
//   const onDescriptionChanged = (e) => setDescription(e.target.value);
//   const onFeaturedChanged = (e) => setFeatured(e.target.value);
//   const onQtyChanged = (e) => setQty(e.target.value);
//   const onInStockChanged = (e) => setInStock(e.target.value);
  
//   // const onImageChanged = (e) => setImage(e.target.value);


//   const canSave = [urlName, item, price, description, featured, qty, inStock].every(Boolean) && !isLoading;

//   const handleSubmit = async () => {
//     if (canSave) {
//       try {
//         await addNewProduct({ urlName, item, price, description, featured, qty, inStock }).unwrap();


//         setUrlName('');
//         setItem('');
//         // setImage('');
//         setPrice('');
//         setDescription('');
//         setFeatured('');
//         setQty('');
//         setInStock('');
//       } 
//       catch (err) {
//         console.error('Failed to save post:', err);
//         // toast.error("no go ")
//       }
//     }
//   };

//   const spinner = isLoading ? <Spinner size='30px' /> : null
// console.log(urlName)

//   return (
//     <StyledCreateProduct>
//       <StyledForm onSubmit={handleSubmit}>
//         <h2>Create A Product</h2>
//         <input 
//         id="imgUpload"
//         type='file' 
//         accept='image/*' 
//         onChange={productImageUploadHandler} 
//         required />

// {/* // //     {/* <select onChange={(e) => setFeatured(e.target.value)} required>  
// // //           <option value="">Select Brand</option>
// // //           <option value="false">False</option>
// // //           <option value="true">True</option>
// // //         </select> */} */}

//         <input
//           autoFocus
//            // id='urlName'
//           type='text'
//           value={urlName}
//           placeholder='UrlName'
//           // name='urlName'
//            onChange={onUrlNameChanged}
//            required
//          />

//         <input
//   autoFocus
//           type='text'
//           // id='item'
//           placeholder='Item'
//           // name='item'
//           value={item}
//           onChange={onItemChanged}
//         />
//         {/* <input
//           className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
//           type='text'
//           id='image'
//           placeholder='Image'
//           name='image'
//           value={image}
//           onChange={onImageChanged}
//         /> */}

//         <input
//           type='number'
//           // id='price'
//           placeholder='Price'
//           // name='price'
//           value={price}
//           onChange={onPriceChanged}
//         />

//         <input
//           type='text'
//           // id='description'
//           placeholder='Description'
//           // name='description'
//           value={description}
//           onChange={onDescriptionChanged}
//         />

//         {/* <label htmlFor='featured' className='block text-xs font-medium text-gray-900'>
//           Featured
//         </label> */}
//         <input
//           className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
//           type='boolean'
//           // id='featured'
//           placeholder='Featured'
//           // name='featured'
//           value={featured}
//           onChange={onFeaturedChanged}
//         />

//         {/* <select onChange={(e) => setFeatured(e.target.value)} required>

//         <option value="">Select if featured Item</option>
//         <option value="true">True</option>
//         <option value="false">False</option>
//         </select> */}

//         <input
//           type='number'
//           id='qty'
//           placeholder='Quantity'
//           name='qty'
//           value={qty}
//           onChange={onQtyChanged}
//         />

//         <input
//           type='number'
//           id='productInStock'
//           placeholder='Quantity In Stock'
//           name='productInStock'
//           value={inStock}
//           onChange={onInStockChanged}
//         />
//         <PrimaryButton type='submit' disable={!canSave}>
//           Add Product
//         </PrimaryButton>
//         {spinner}

//         {/* <button type='button' onClick={onSavePostClicked} disabled={!canSave}>
//           Save Post
//         </button> */}
//       </StyledForm>
//       <ImagePreview>
//         {productImg ? (
//           <>
//             <img src={productImg} alt='my product img' />
//           </>
//         ) : (
//           <p>Image preview will appear here!</p>
//         )}
//       </ImagePreview>
//     </StyledCreateProduct>
//   );
// };
// export default CreateProduct;

// // // const StyledForm = styled.form`å
// // //   display: flex;
// // //   flex-direction: column;
// // //   max-width: 300px;
// // //   margin-top: 2rem;
// // //   select,
// // //   input {
// // //     padding: 7px;
// // //     min-height: 30px;
// // //     outline: none;
// // //     border-radius: 5px;
// // //     border: 1px solid rgb(182, 182, 182);
// // //     margin: 0.3rem 0;
// // //     &:focus {
// // //       border: 2px solid rgb(0, 208, 255);
// // //     }
// // //   }
// // //   select {
// // //     color: rgb(95, 95, 95);
// // //   }
// // // `;

// // // const StyledCreateProduct = styled.div`
// // //   display: flex;
// // //   justify-content: space-between;
// // // `;

// // // const ImagePreview = styled.div`
// // //   margin: 2rem 0 2rem 2rem;
// // //   padding: 2rem;
// // //   border: 1px solid rgb(183, 183, 183);
// // //   max-width: 300px;
// // //   width: 100%;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;
// // //   padding: 2rem;
// // //   color: rgb(78, 78, 78);
// // //   img {
// // //     max-width: 100%;
// // //   }
// // // `;
