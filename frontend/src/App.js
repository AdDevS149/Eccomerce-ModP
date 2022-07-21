import React from 'react';
import './App.css';
// import { ToastContainer } from "react-toastify";

import { Routes, Route /*Navigate*/ } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
// import Cart from './components/Cart';
import Product from './components/Details/Product';

import Register from './features/auth/register/Register';
import Login from './features/auth/login/Login';
// import UserProfile from './components/Details/UserProfile';

// import CheckoutSuccess from './components/CheckoutSuccess';
// import Order from './components/Details/Order';

import Dashboard from './components/admin/Dashboard';
import Summary from './components/admin/Summary';

import Products from './components/admin/Products';
import ProductsList from './components/admin/lists/ProductsList';
import CreateProduct from './components/admin/CreateProduct';
// import Orders from './components/admin/Orders';
// import Users from './components/admin/Users';
// import UsersList from './components/admin/lists/UsersList'

import NoMatch from './components/NoMatch';
// import EditProduct from './components/admin/EditProduct';
// import EditProduct from './components/admin/EditProduct';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          {/* <Route path='/cart' element={<Cart />} /> */}

          <Route path='/public/register' element={<Register />} />
          <Route path='/public/login' element={<Login />} />
          <Route path='/admin/product/:id' element={<Product />} />
          {/* <Route path='/public/products' element={<Products />} /> */}
          {/* <Route path='/public/user/:id' element={<UserProfile />} /> */}

          {/* Products Routes */}
          {/* <Route path='/checkout-success' element={<CheckoutSuccess />} /> */}
          {/* <Route path='/order/:id' element={<Order />} /> */}

          {/* Admin Routes */}
          <Route path='/admin' element={<Dashboard />}>
            <Route path='summary' element={<Summary />} />
            <Route path='products' element={<Products />}>
            {/* <Route path='edit-product' element={<EditProduct />}/> */}

              <Route index element={<ProductsList />} />
              <Route path='create-product' element={<CreateProduct />} />
            </Route>

            {/* User Routes */}
            {/* <Route path='users' element={<Users />} /> */}
            {/* <Route path='orders' element={<Orders />} /> */}
          </Route>
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
