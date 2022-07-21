import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useGetPublicProductsQuery } from '../features/api/productApiSlice';
import { addToCart } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';

const Products = () => {
  // const {id} = useParams()
  const { data: products, isLoading, isSuccess, isError, error } = useGetPublicProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(products));
    navigate('/cart');
  };

  let content;

  if (isLoading) {
    content = <h2>Loading...</h2>;
  } else if (isSuccess) {
    content = products?.map((product) => (
      <div key={product._id} className='product'>
        <h3>{product.name}</h3>
        {/* <Link to={`/products/${product_id}}`}> */}
        <Link to={`/product/${product._id}`}>
          <img src={product.image?.url} alt={product.name} />
        </Link>

        <div className='details'>
          <span>{product.desc}</span>
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
      <h2>Great Products!</h2>
      <div className='products'>{content}</div>
    </div>
  );
};

export default Products;
