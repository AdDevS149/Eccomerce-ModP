import './App.css'
import ProductsList from './features/products/ProductsList';
import Cart from './components/Cart'
// import Login from './features/auth/Login';
import NoMatch from './components/NoMatch';
// import AddPostForm from './features/products/AddProductForm';
// import SinglePostPage from './features/products/SingleProductPage';
// import EditPostForm from './features/products/EditProductForm';
// import UsersList from './features/users/UsersList';
// import UserPage from './features/users/UserPage';
import Layout from './components/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './features/auth/Register';

import {useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {loadUser} from './features/auth/authSlice';
import Login from './features/auth/Login';
import CheckoutSuccess from './components/CheckoutSuccess';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<ProductsList/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout-success' element={<CheckoutSuccess />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
  

        {/* <Route path='product'>
          <Route index element={<AddPostForm />} />
          <Route path=':productId' element={<SinglePostPage />} />
          <Route path='edit/:productId' element={<EditPostForm />} />
        </Route> */}

        {/* <Route path='user'>
          <Route index element={<UsersList />} />
          <Route path=':userId' element={<UserPage />} />
        </Route> */}

        {/* Catch all - replace with 404 component if you want */}
        {/* <Route path='nomatch' element={<NoMatch />} /> */}
        {/* <Route path='*' element={<Navigate to='/nomatch' replace />} /> */}
        <Route path='*' element={<NoMatch/>} />
      </Route>
    </Routes>
  );
}

export default App;