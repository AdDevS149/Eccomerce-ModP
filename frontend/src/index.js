import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './index.css';
import App from './App';

// import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { store } from './app/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ToastContainer />
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
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


// // import { Provider } from 'react-redux';
// // import { store } from './app/store';

// import {ApiProvider} from '@reduxjs/toolkit/query/react'
// import {apiSlice} from './features/api/productApiSlice'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ApiProvider api={apiSlice}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ApiProvider>
// );

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { store } from './app/store';
// import { Provider } from 'react-redux';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import { fetchPosts } from './features/products/productsSlice';

