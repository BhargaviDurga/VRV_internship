import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, allowedRoles }) => {
  const user = useAuth();

  if (!user) return <Navigate to="/" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/not-found" />;

  return children;
};

export default PrivateRoute;
