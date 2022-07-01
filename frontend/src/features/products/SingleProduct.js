// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { Spinner } from '../../components/Spinner';

// import { useGetProductQuery } from './productsSlice';

// const SingleProduct = () => {
//   const { productId } = useParams();
//   const { data: products, isFetching, isSuccess } = useGetProductQuery(productId);
//   let content;
//   if (isFetching) {
//     content = <Spinner text='loading....' />;
//   } else if (isSuccess) {
//     content = (
//       <div>
//         <h2>{products.item}</h2>
//         <h2>{products.price}</h2>

//         <Link to={`/editProduct/${products.id}`}>Edit Product</Link>
//       </div>
//     );
//   }

//   return <section>{content}</section>;
// };

// export default SingleProduct;
