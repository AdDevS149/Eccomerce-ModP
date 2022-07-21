import styled from 'styled-components';

import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../../slices/cartSlice';
import { useDispatch } from 'react-redux';

import { useGetAdminProductQuery } from '../../features/api/adminProductApiSlice';
import { Spinner } from '../Spinner';

const Product = () => {
  // const { productId } = useParams();
  const params = useParams()


  const { data: product, isFetching, isSuccess } = useGetAdminProductQuery(params.id);

  console.log('product-detail', product)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  let content;

  if (isFetching) {
    content = <Spinner text='Loading...' />;
  } else if (isSuccess) {
    content = (
      <StyledProduct>
        <ProductContainer>
          <ImageContainer>
            <img src={product.image?.url} alt='product' />
          </ImageContainer>
          <ProductDetails>
            <p>
              <span>Brand:</span> {product.brand}
            </p>
            <p>
              <span>Description:</span> {product.desc}
            </p>
            <Price>${product.price?.toLocaleString()}</Price>
            <button className='product-add-to-cart' onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
          </ProductDetails>
        </ProductContainer>
      </StyledProduct>
    );
  }

  return <section>{content}</section>;
};

export default Product;

const StyledProduct = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
`;

const ProductContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  padding: 2rem;
`;

const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 100%;
  }
`;

const ProductDetails = styled.div`
  flex: 2;
  margin-left: 2rem;

  h3 {
    font-size: 35px;
  }

  p span {
    font-weight: bold;
  }
`;

const Price = styled.div`
  margin: 1rem 0;
  font-weight: bold;
  font-size: 25px;
`;

// // // import { useEffect, useState } from 'react';
// // import styled from 'styled-components';
// // // import axios from 'axios';
// // // import { url } from '../../slices/api';
// // import { useNavigate, useParams} from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// // import { addToCart } from '../../slices/cartSlice';

// // import { useGetProductQuery } from '../../features/api/productApiSlice';

// // const Product = () => {
// //   const {productId} = useParams();
// // // const{productId} = match.params
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const { data: product, isFetching, isSuccess } = useGetProductQuery();

// //   console.log('myprod', product)

// //   const handleAddToCart = (product) => {
// //     dispatch(addToCart(product));
// //     navigate('/cart');
// //   };

// //   let content;

// //   if (isFetching) {
// //     content = <h2>Loading...</h2>;
// //   } else if (isSuccess) {
// //     content =
// //         product.map(item =>  (

// //             <>
// //             <ImageContainer>
// //               <img src={product.image?.url} alt='product' />
// //             </ImageContainer>
// //             <ProductDetails>
// //             <h3>{product}</h3>
// //               <h3>{product.name}</h3>
// //               <p>
// //                 <span>Name:</span> {product.desc}
// //               </p>
// //               <p>
// //                 <span>Description:</span> {product.desc}
// //               </p>
// //               <Price>${product.price?.toLocaleString()}</Price>
// //               <button className='product-add-to-cart' onClick={() => handleAddToCart(product)}>
// //                 Add To Cart
// //               </button>
// //             </ProductDetails>
// //           </>

// //         //map through to make work'

// //         // try to include the post component

// //     )
// //   }

// //   return (
// //     <StyledProduct>
// //       <ProductContainer>{content}</ProductContainer>
// //     </StyledProduct>
// //   );
// // };

// // export default Product;

// // const StyledProduct = styled.div`
// //   margin: 3rem;
// //   display: flex;
// //   justify-content: center;
// // `;

// // const ProductContainer = styled.div`
// //   max-width: 500px;
// //   width: 100%;
// //   height: auto;
// //   display: flex;
// //   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
// //   border-radius: 5px;
// //   padding: 2rem;
// // `;

// // const ImageContainer = styled.div`
// //   flex: 1;

// //   img {
// //     width: 100%;
// //   }
// // `;

// // const ProductDetails = styled.div`
// //   flex: 2;
// //   margin-left: 2rem;

// //   h3 {
// //     font-size: 35px;
// //   }

// //   p span {
// //     font-weight: bold;
// //   }
// // `;

// // const Price = styled.div`
// //   margin: 1rem 0;
// //   font-weight: bold;
// //   font-size: 25px;
// // `;
