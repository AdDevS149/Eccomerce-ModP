import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


const PrivateRoutes = () => {
  const location = useLocation()
  const auth = JSON.parse(localStorage.getItem('token'));
  if (auth){
    return auth.token ? <Outlet /> : <Navigate to='signin' state={{from: location}}/>;
  }
};

export default PrivateRoutes;

// const PrivateRoutes = () => {
//   const location = useLocation()
//   const auth = JSON.parse(localStorage.getItem('token'));
//   if (auth){
//     return auth.token ? <Outlet /> : <Navigate to='/signin' state={{from: location}}/>;
//   }
// };