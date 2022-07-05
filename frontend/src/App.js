import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import NavBar from './components/Navbar'
import NoMatch from "./components/NoMatch";
import Cart from "./components/Cart";

import "react-toastify/dist/ReactToastify.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/authSlice";
import CheckoutSuccess from "./components/CheckoutSuccess";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/CreateProduct";
import ProductsList from "./components/admin/lists/ProductsList";
import Product from "./components/Details/Product";
import UserProfile from "./components/Details/UserProfile";
import Order from "./components/Details/Order";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/admin" element={<Dashboard />}>
              <Route path="products" element={<Products />}>
                <Route index element={<ProductsList />} />
                <Route path="create-product" element={<CreateProduct />} />
              </Route>
                <Route path="summary" element={<Summary />} />
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;







// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import { useEffect } from 'react';
// import { loadUser } from './action/userAction';
// import store from './store';
// import Layout from './components/Layout';
// import Signin from './users/Signin';
// import Signup from './users/Signup';

// import AdminDashboard from './admin/AdminDashboard';
// import CreateProductAdmin from './admin/CreateProductAdmin';
// import EditProductAdmin from './admin/EditProductAdmin';
// import AdminShowOrders from './admin/AdminShowOrders';
// import AdminShowCategory from './admin/AdminShowCategory';
// import AdminCreateCategory from './admin/AdminCreateCategory';
// import AdminEditProductCategory from './admin/AdminEditProductCategory';
// import AdminUsersList from './admin/AdminUsersList';
// import AdminEditUser from './admin/AdminEditUser';

// import UserDashboard from './users/UserDashboard';
// import UserOrderHistory from './users/UserOrderHistory';
// import UserDashboardEdit from './users/UserDashboardEdit';

// import AddToCart from './cart/AddToCart';

// import ShippingCard from './cart/ShippingCard';
// import Payment from './cart/PaymentCart';
// import OrderSuccess from './cart/OrderSuccess';

// import ViewProduct from './product/ViewProduct';
// import PrivateRoutes from './components/PrivateRoutes';
// import PrivateAdminRoutes from './components/PrivateAdminRoutes';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import PageNav from './components/PageNav';

// const App = () => {
//   useEffect(() => {
//     store.dispatch(loadUser());
//   }, []);

//   return (
//     <>
//       <ToastContainer />
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={<PageNav />} />
//           <Route path='/search/:keyword' element={<PageNav />} />
//           <Route index='/admin/dashboard' element={<AdminDashboard />} />
//           <Route path='/signin' element={<Signin />} />
//           <Route path='/signup' element={<Signup />} />

//           <Route path='/product/:productid' element={<ViewProduct />} />

//           {/* //Admin Prod/Cat Routes */}

//           <Route element={<PrivateAdminRoutes />}>
//             <Route path='/admin/dashboard' element={<AdminDashboard />} />
//             <Route path='/admin/product/create' element={<CreateProductAdmin />} />
//             <Route path='/admin/dashboard/orders' element={<AdminShowOrders />} />
//             <Route path='/admin/product/edit/:id' element={<EditProductAdmin />} />
//             <Route path='/admin/product/categories' element={<AdminShowCategory />} />
//             <Route path='/admin/category/create' element={<AdminCreateCategory />} />
//             <Route path='/admin/product/category/edit/:id' element={<AdminEditProductCategory />} />
//             {/* Admin of Users Routes */}
//             <Route path='/admin/users' element={<AdminUsersList />} />
//             <Route path='/admin/user/edit/:id' element={<AdminEditUser />} />
//           </Route>

//           {/* Product cart and payments */}
//           <Route path='/cart' element={<AddToCart />} />

//           {/* PRIVATE ROUTES */}
//           <Route element={<PrivateRoutes />}>
//             <Route path='/user/dashboard' element={<UserDashboard />} />
//             <Route path='/user/dashboard/edit/:id' element={<UserDashboardEdit />} />
//             <Route path='/shipping' element={<ShippingCard />} />
//             <Route path='/payment' element={<Payment />} />
//             <Route path='/success' element={<OrderSuccess />} />
//             <Route path='/user/dashboard/orders' element={<UserOrderHistory />} />
//           </Route>
//         </Route>
//       </Routes>
//     </>
//   );
// };

// export default App;
