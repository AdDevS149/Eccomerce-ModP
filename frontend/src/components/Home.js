// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// import { addToCart } from "../slices/cartSlice";
// import { useGetAllProductsQuery } from "../slices/productsApi";
// import { useGetProductQuery } from "../features/products/productsSlice";

const Home = () => {
//   const {
//     data: products = [],
//     isLoading,
//     isFetching,
//     isSuccess,
//     isError,
//     error,
//   } = useGetProductsQuery()






  // const { items: data, status } = useSelector((state) => state.products);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const { data, error, isLoading } = useGetAllProductsQuery();

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  //   navigate("/cart");
  // };

  return (
    <div>Home Product Page Test</div>
    // <div className="home-container">
    //   {status === "success" ? (
    //     <>
    //       <h2>New Arrivals</h2>
    //       <div className="products">
    //         {data &&
    //           data?.map((product) => (
    //             <div key={product._id} className="product">
    //               <h3>{product.name}</h3>
    //               <Link to={"/product/" + product._id}>
    //                 <img src={product.image?.url} alt={product.name} />
    //               </Link>

    //               <div className="details">
    //                 <span>{product.desc}</span>
    //                 <span className="price">${product.price}</span>
    //               </div>
    //               <button onClick={() => handleAddToCart(product)}>
    //                 Add To Cart
    //               </button>
    //             </div>
    //           ))}
    //       </div>
    //     </>
    //   ) : status === "pending" ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <p>Unexpected error occurred...</p>
    //   )}
    // </div>
  );
};

export default Home;
