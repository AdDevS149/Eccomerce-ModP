import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import {store} from './app/store';
// import { Provider } from 'react-redux';
// import { extendedApiSlice } from './features/products/productsSlice';
// import { usersApiSlice } from './features/users/usersSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store'

// store.dispatch(extendedApiSlice.endpoints.getProducts.initiate());
// store.dispatch(usersApiSlice.endpoints.getUsers.initiate());
// store.dispatch(loadUser(null))

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
