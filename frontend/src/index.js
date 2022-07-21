import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store  from './app/store';
import App from './App';
// import './index.css';
// import 'antd/dist/antd.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </Provider>
 </React.StrictMode> 
);











// import React from "react";
// import {createRoot} from "react-dom/client";
// import App from "./App";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";

// import productsReducer, { productsFetch } from "./slices/productsSlice";
// import cartReducer, { getTotals } from "./slices/cartSlice";
// import authReducer from "./slices/authSlice";
// import { productsApi } from "./slices/productsApi";
// import UsersSlice from "./slices/UsersSlice";
// import ordersSlice from "./slices/ordersSlice";

// const store = configureStore({
//   reducer: {
//     products: productsReducer,
//     users: UsersSlice,
//     orders: ordersSlice,
//     cart: cartReducer,
//     auth: authReducer,
//     [productsApi.reducerPath]: productsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productsApi.middleware),
// });

// store.dispatch(productsFetch());
// store.dispatch(getTotals());

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
  
// );
