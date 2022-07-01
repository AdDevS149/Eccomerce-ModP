import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from './components/Layout'
import ProductsList 


// import Home from "./components/Home";
// import NavBar from "./components/NavBar";
// import NotFound from "./components/NotFound";
// import Cart from "./components/Cart";

// import "react-toastify/dist/ReactToastify.css";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { loadUser } from "./slices/authSlice";
// import CheckoutSuccess from "./components/CheckoutSuccess";
// import Dashboard from "./components/admin/Dashboard";
// import Products from "./components/admin/Products";
// import Users from "./components/admin/Users";
// import Orders from "./components/admin/Oders";
// import Summary from "./components/admin/Summary";
// import CreateProduct from "./components/admin/CreateProduct";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadUser(null));
  // }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        {/* <NavBar /> */}
        <div className="content-container">
          <Routes>

  <Route path="/" element={<Layout />}>


  <Route index element={<ProductsList />} />

  </Route>









            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/checkout-success" element={<CheckoutSuccess />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/admin" element={<Dashboard />}> */}
              {/* <Route path="summary" element={<Summary />} /> */}
              {/* <Route path="products" element={<Products />}> */}
                {/* <Route path="create-product" element={<CreateProduct />} /> */}
              {/* </Route> */}
              {/* <Route path="users" element={<Users />} /> */}
              {/* <Route path="orders" element={<Orders />} /> */}
            {/* </Route> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;









// import { useDispatch, useSelector } from 'react-redux';
// import './App.css';
// import Menu from './components/Menu';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import { listProducts } from './action/productAction';
// import React, { useEffect, useState } from 'react';
// // import {useParams} from 'react-router-dom'
// import Card from './components/Card';
// import Loading from './components/Loading';
// import 'antd/dist/antd.css';
// import { Pagination } from 'antd';
// import { useMatch } from 'react-router-dom';

// const App = ({ match }) => {
//   const keyword = useMatch.keyword;

//   const [pageNumber, setPageNumber] = useState(1);

//   const dispatch = useDispatch();
//   const productList = useSelector((state) => state.productList);
//   const { loading, products, count, page, error } = productList;

//   useEffect(() => {
//     dispatch(listProducts(pageNumber, keyword));
//   }, [dispatch, pageNumber, page, keyword]);

//   return (
//     <>
//       <Menu />

//       <Header />

//       <div className='container  justify-content-center mb-50'>
//         {/* <h2>Latest Product</h2> */}

//         <div className='row' style={{ paddingTop: '102px' }}>
//           {loading ? (
//             <Loading />
//           ) : products && products.length === 0 ? (
//             <>
//               <h2>{`No result found for your search query: "${keyword}"`}</h2>
//             </>
//           ) : (
//             products && products.map((product) => <Card key={product._id} product={product} id={product._id} countStock={product.countStock} rating={product.rating} numReviews={product.numReviews} />)
//           )}
//         </div>

//         <div className='container text-center pt-5'>
//           <Pagination current={pageNumber} total={typeof keyword !== 'undefined' ? products.length : count} onChange={(value) => setPageNumber(value)} pageSize={8} />
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default App;

// // import { BrowserRouter,Routes, Route } from 'react-router-dom';
// // import {useEffect} from  'react'
// // import App from '../App'
// // import Signin from '../user/Signin'
// // import Signup from '../user/Signup'
// // import createProduct from '../product/createProduct'
// import AdminDashboard from './admin/AdminDashboard'
// // import AdminUsersList from '../admin/AdminUsersList'
// // import AdminEditUser from '../admin/AdminEditUser'
// // import CreateProductAdmin from './admin/CreateProductAdmin'
// // import AdminCreateCategory from '../admin/AdminCreateCategory'
// // import AdminShowCategory from '../admin/AdminShowCategory'
// // import AdminEditProductCategory from '../admin/AdminEditProductCategory'
// // import EditProductAdmin from '../admin/EditProductAdmin'
// // import AddToCart from '../cart/AddToCart'
// // import UserDashboard from '../user/UserDashboard';
// // import UserDashboard from './pages/user/UserDashboard';
// // import UserDashboardEdit from '../user/UserDashboardEdit'
// // import PrivateAdminRoute from '../component/PrivateAdminRoute';
// // import PrivateRoutes from './components/PrivateRoutes';
// // import ViewProduct  from '../product/ViewProduct'

// // import {loadUser} from '../action/userAction'
// // import store from '../store'
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import  ShippingCard  from '../cart/ShippingCard'
// // import Payment from '../cart/PaymentCart'
// // import OrderSuccess from '../cart/OrderSuccess'
// // import UserOrderHistory from '../user/UserOrderHistory'
// // import AdminShowOrders from '../admin/AdminShowOrders'

// import Menu from './components/Menu'

// import './App.css';

// import Layout from './components/Layout';
// // import Home from './pages/Home';
// import SignUp from './features/register/SignUp';
// import SignIn from './features/auth/SignIn';
// import NoMatch from './components/NoMatch';

// // import CreateProduct from "./admin/CreateProduct"

// // import Login from './features/auth/Login'
// // import CreateProductAdmin from './admin/CreateProductAdmin';

// const App = () => {

//   return (
//   <div className="App">
//   <BrowserRouter>
//    );
// };

// export default App;
//     <Menu />
//     <div className="content-container">
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         {/* <Route path="/" element={<Home />} /> */}

//         {/* <Route path="/cart" element={<Cart />} /> */}
//         {/* <Route path="/checkout-success" element={<CheckoutSuccess />} /> */}
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/admin" element={<AdminDashboard />}>
//           {/* <Route path="summary" element={<Summary />} /> */}
//           {/* <Route path="products" element={<Products />}> */}
//             {/* <Route path="create-product" element={<CreateProduct />} /> */}
//           </Route>
//           {/* <Route path="users" element={<Users />} /> */}
//           {/* <Route path="orders" element={<Orders />} /> */}
//         {/* </Route> */}
//         <Route path="*" element={<NoMatch />} />
//       </Routes>
//     </div>
//   </BrowserRouter>
// </div>

// );
// };

// export default App;

//   // return (
//   //   <Routes>
//   //     <Route path='/' element={<Layout />}>
//   //       <Route index element={<Home />} />
//   //       <Route path='/signup' element={<SignUp />} />
//   //       <Route path='/signin' element={<SignIn />} />
//   //       <Route path='/admin' element={<AdminDashboard />}>

//   //       </Route>

//   //       {/* ADMIN ROUTES */}

//   //       <Route path='*' element={<NoMatch />} />

//   //       <Route path='/admin/dashboard/product/create' element={<CreateProductAdmin />} />
//   //       <Route path='/user/dashboard' element={<UserDashboard />} />
//   //       <Route element={<PrivateRoutes />}></Route>

//   //       {/* ADMIN ROUTES */}

//   //       <Route path='/admin' element={<AdminDashboard />}>
//   //       <Route path='summary' element={<CreateProductAdmin />} />
//   //         {/* <Route path='/admin/dashboard' element={<CreateProduct/>}>
//   //           {/* <Route path='create-product' element={<CreateProduct />} /> */}
//   //     </Route> */}

//   //     {/* //           <Route path='products/:productId' element={<Products />}> */}
//   //     </Route>
//   //     {/* </Route> */}
//   //   </Routes>

// // import './App.css';
// // import ProductsList from './features/products/ProductsList';
// // import Cart from './components/Cart';
// // // import Login from './features/auth/Login';
// // import NoMatch from './components/NoMatch';
// // // import AddPostForm from './features/products/AddProductForm';
// // // import SinglePostPage from './features/products/SingleProductPage';
// // // import EditPostForm from './features/products/EditProductForm';
// // // import UsersList from './features/users/UsersList';
// // // import UserPage from './features/users/UserPage';
// // import Layout from './components/Layout';
// // import { Routes, Route, Navigate } from 'react-router-dom';
// // import Register from './features/auth/Register';

// // import { useEffect } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { loadUser } from './features/auth/authSlice';
// // import Login from './features/auth/Login';
// // import CheckoutSuccess from './components/CheckoutSuccess';
// // // import Admin from './components/Dashboard';
// // import Products from './features/admin/Products';
// // import Summary from './features/admin/Summary';
// // // import AddProductForm from './features/admin/CreateProduct';
// // import Dashboard from './features/admin/Dashboard';
// // import CreateProduct from './features/admin/CreateProduct';
// // // import SingleProduct  from './features/products/SingleProduct'
// // import Home from './components/pages/Home';

// // function App() {
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     dispatch(loadUser(null));
// //   }, [dispatch]);

// //   return (
// //     <Routes>
// //       <Route path='/' element={<Layout />}>
// //         <Route index element={<ProductsList />} />
// //         <Route path='/cart' element={<Cart />} />
// //         <Route path='/checkout-success' element={<CheckoutSuccess />} />
// //         <Route path='/register' element={<Register />} />
// //         <Route path='/login' element={<Login />} />
// //         <Route path='/home' element={<Home />} />
// //         {/* <Route path='/single/:productId' element={<SingleProduct/>}/> */}

// //         <Route path='/admin' element={<Dashboard />}>
// //           <Route path='summary' element={<Summary />} />
// //           <Route path='products' element={<Products />}>
// //             <Route path='create-product' element={<CreateProduct />} />
// //           </Route>

// //           {/* <Route path='products/:productId' element={<Products />}> */}

// //           {/* </Route> */}
// //         </Route>

// //         {/* <Route path='product'>
// //           <Route index element={<AddPostForm />} />
// //           <Route path=':productId' element={<SinglePostPage />} />
// //           <Route path='edit/:productId' element={<EditPostForm />} />
// //         </Route> */}

// //         {/* <Route path='user'>
// //           <Route index element={<UsersList />} />
// //           <Route path=':userId' element={<UserPage />} />
// //         </Route> */}

// //         {/* Catch all - replace with 4z04 component if you want */}
// //         {/* <Route path='nomatch' element={<NoMatch />} /> */}
// //         {/* <Route path='*' element={<Navigate to='/nomatch' replace />} /> */}
// //         <Route path='*' element={<NoMatch />} />
// //       </Route>
// //     </Routes>
// //   );
// // }

// // export default App;
