// import { 
//     useGetProductsQuery,
//     useAddProductMutation, 
//     useUpdateProductMutation,
//     useDeleteProductMutation  
// } from '../../features/api/productApiSlice';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';



// function ProductsList() {
//   const [newProduct, setNewProduct] = useState('');


//   const { data: products, isLoading, isSuccess, isError, error } = useGetProductsQuery();

//   const [addProduct] = useAddProductMutation()
//   const [updateProduct] = useUpdateProductMutation()
//   const [deleteProduct] = useDeleteProductMutation()

//   const handleSubmit = (e) => {
//     e.preventDefault();
//      addProduct({  
//         title: newProduct,
//         // price: newProduct,

//         featured: false, 
//         price: 1000
//      })
//     setNewProduct('');
//   };

//   const newItemSection = (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor='new-todo'>Enter a new todo item</label>
//       <div className='new-todo'>
//         <input type='text' id='new-todo' value={newProduct} onChange={(e) => setNewProduct(e.target.value)} placeholder='Enter new product' />
//       </div>
//       <button className='submit'>
//         <FontAwesomeIcon icon={faUpload} />
//       </button>
//     </form>
//   );

//   let content;

//   if (isLoading) {
//     content = <p>Loading...</p>;
//   } else if (isSuccess) {
//     content = JSON.stringify(products);
//   } else if (isError) {
//     content = <p>{error}</p>;
//   }
//   if (isLoading) {
//       // include spinner component later
//       content = <p>Loading...</p>
//   } else if (isSuccess) {
//       content = products.map(product => { //JSON.stringify(product)
//         console.log(product)
//           return (
//               <article key={product.id}>
//                   <div className="todo">
//                   <h1>{product.urlName}</h1>
//                   <h1>{product.price}</h1>
//                   <h1>{product.description}</h1>
//                   {/* <h1>{product.q}</h1>
//                   <h1>{product.p}</h1> */}
//                       <input
//                           type="checkbox"
//                           checked={product.completed}
//                           id={product.id}
//                           onChange={() => updateProduct({ ...product, completed: !product.completed })}
//                       />
//                       <label htmlFor={product.id}>{product.price}</label>
//                   </div>
//                   <button className="trash" onClick={() => deleteProduct({ id: product.id })}>
//                       <FontAwesomeIcon icon={faTrash} />
//                   </button>
//               </article>
//           )
//       })
//   } else if (isError) {
//       content = <p>{error}</p>
//   }

//   return (
//     <main>
//       <h1>Product List</h1>
//       {newItemSection}
//       {content}
//     </main>
//   );
// }

// export default ProductsList;

// // const ProductsList = () => {
// //   return (
// //     <div>ProductsList</div>
// //   )
// // }

// // export default ProductsList

// // // import { useSelector } from "react-redux";
// // // import { selectAllProducts } from "./productsSlice";
// // // // import PostProduct from "./PostProduct";
// // // // import TimeAgo from "./TimeAgo";
// // // // import ReactionButtons from "./ReactionButtons";

// // // const ProductsList = () => {
// // //     const products = useSelector(selectAllProducts)
// // //     console.log(products)

// // //     // const orderedProducts = products.slice().sort((a, b) => b.date.localeCompare(a.date))

// // //     // const renderedProducts = orderedProducts.map(product => (
// // //     const renderedProducts = products.map(product => (

// // //         <article key={product.id}>
// // //             <h3>{product.title}</h3>
// // //             <p>{product.content.substring(0, 100)}</p>
// // //             <p className="productCredit">
// // //                 {/* <PostAuthor userId={post.userId} /> */}
// // //                 {/* <TimeAgo timestamp={product.date} /> */}
// // //             </p>
// // //             {/* <ReactionButtons product={product} /> */}
// // //         </article>
// // //     ))

// // //     return (
// // //         <section>
// // //             <h2>Products</h2>
// // //             {renderedProducts}
// // //         </section>
// // //     )
// // // }
// // // export default ProductsList
