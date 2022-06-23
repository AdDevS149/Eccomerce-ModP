import { useDispatch /*useSelector*/ } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import Spinner  from '../../components/Spinner';
import { addToCart } from '../cart/cartSlice';
import { useGetProductsQuery } from './productsSlice';

const ProductsList = () => {
  //   const { items: products, status } = useSelector((state) => state.products);
  // const auth = useSelector((state) => state.auth);

  // console.log(auth)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: products, isLoading, isSuccess, isError, error } = useGetProductsQuery();
  // console.log('Api', isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  let content;

  if (isLoading) {
    content = <p>"Loading...</p>;
  } else if (isSuccess) {
    content = products.map((product) => (
      <div key={product._id} className='product'>
        <h3>{product.item}</h3>
        <img src={product.image} alt={product.item} />
        <div className='details'>
          <span>{product.description}</span>
          <span className='price'>${product.price}</span>
        </div>
        <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
      </div>
    ));
  } else if (isError) {
    content = <div>{error.toString}</div>;
  }

  return (
    <div className='home-container'>
      <h2>Products</h2>

      <div className='products'>{content}</div>
    </div>
  );
};

export default ProductsList;
