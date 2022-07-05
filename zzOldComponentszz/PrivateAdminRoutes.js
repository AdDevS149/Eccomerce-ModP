import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const PrivateAdminRoutes = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);


  if (isAuthenticated) {
    if (user.role === 0) {
      toast.error('You must be an Admin to access this resource!');
    }

    if (user.role === 1) {
      return isAuthenticated && user.role === 1 ? <Outlet /> : <Navigate to='/admin/dashboard' />;
    }
  }
  return <Navigate to='/signin' />;
};

export default PrivateAdminRoutes;
