import { configureStore} from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';


import authReducer from '../features/auth/login/authSlice';
import cartReducer, {getTotals} from '../slices/cartSlice'
import UsersSlice from '../slices/UsersSlice';
import ordersSlice from '../slices/ordersSlice'
import productsReducer, {productsFetch} from '../slices/productsSlice'
// import productsReducer from '../features/api/useGetPublicProductsQuery'



export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cart: cartReducer,
    users: UsersSlice,
    orders: ordersSlice,
    products: productsReducer,

  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// store.dispatch(getTotals())
// store.dispatch(productsFetch())