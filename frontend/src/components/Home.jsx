
import { useGetProductsQuery } from '../features/products/productApiSlice'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {addToCart} from '../features/products/cartSlice'


const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const addToCartHandler = (product) => {
dispatch(addToCart(product))
navigate('/cart')

  }
console.log(data)
  return (
    <div className='home-container'>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Had an error...</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className='products'>
            {data?.map((product) => (
              <div key={product.id} className='product'>
                <h3>{product.item}</h3>
                <img src={product.image} alt={product.item} />
                <div className='details'>
                  <span>{product.description}</span>
                  <span className='price'>${product.price}</span>
                </div>
                <button onClick={() => addToCartHandler(product)}>Add To Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
