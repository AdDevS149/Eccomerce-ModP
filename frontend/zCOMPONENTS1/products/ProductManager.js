// import Product from './Product';
// import AddProduct from './AddProductForm';
// import { useState } from 'react';
// import { useProductsQuery } from '../../services/productApi';

// function Home() {
//   const [openAddModal, setOpenAddModal] = useState(false);
//   const { data, error, isLoading, isSuccess } = useProductsQuery();

//   return (
//     <div className='productManager'>
//       <header>Product Manager</header>
//       <div className='productManager__container'>
//         <button onClick={() => setOpenAddModal(true)}>Add product +</button>
//         <div className='productManager__products'>
//           <div className='isErrorIsLoading'>
//             {error && <p>An error occured</p>}
//             {isLoading && <p>Loading...</p>}
//           </div>
//           {isSuccess && (
//             <>
//               {data.map((product) => (
//                 <Product id={product.id} key={product.id} price={product.price} title={product.title} description={product.description} />
//               ))}
//             </>
//           )}
//         </div>
//       </div>

//       {openAddModal && <AddProduct onClose={() => setOpenAddModal(false)} open={openAddModal} />}
//     </div>
//   );
// }

// export default Home;

// // // src/TaskManager.js
// // import { useState } from 'react';
// // import { useProductsQuery } from '../../services/productApi';
// // // import AddProduct from ;

// // function Products() {
// //   const [openAddModal, setOpenAddModal] = useState(false);
// //   const { data, error, isLoading, isSuccess } = useProductsQuery();

// //   // src/TaskManager.js

// //   return (
// //     <div className='taskManager'>
// //       <header>Product Manager</header>
// //       <div className='taskManager__container'>
// //         <button onClick={() => setOpenAddModal(true)}>Add product +</button>
// //         <div className='taskManager__tasks'>
// //           <div className='isErrorIsLoading'>
// //             {error && <p>An error occured</p>}
// //             {isLoading && <p>Loading...</p>}
// //           </div>
// //           {isSuccess && (
// //             <>
// //               {data.map((product) => (
// //                 <Product id={product.id} key={product.id} completed={product.price} title={product.title} description={product.description} />
// //               ))}
// //             </>
// //           )}
// //         </div>
// //       </div>

// //       {openAddModal && <AddProduct onClose={() => setOpenAddModal(false)} open={openAddModal} />}
// //     </div>
// //   );
// // }

// // export default Products;
