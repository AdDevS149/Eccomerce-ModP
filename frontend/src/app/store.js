import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/auth/authSlice';
// import { productsApi } from '../services/productApi';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  // need to rtk query to cache resutts, etc
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  // change to false when go into production
  devTools: true,
});
