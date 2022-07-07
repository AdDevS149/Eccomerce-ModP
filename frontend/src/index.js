import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { extendedApiSlice } from './features/products/productsSlice';
// import { usersApiSlice } from './features/users/usersApiSlice';

import { store } from './app/store';
import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

store.dispatch(extendedApiSlice.endpoints.getProducts.initiate());
// store.dispatch(usersApiSlice.endpoints.getUsers)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

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

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
