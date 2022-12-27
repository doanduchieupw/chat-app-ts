import { Loader } from '@mantine/core';
import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../utils/hooks';

const ProtectedRoute: FC<React.PropsWithChildren> = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  console.log(user, loading);

  if (!user && !loading) return <Navigate to='/login' state={{ from: location }} replace />;
  if (loading) return <Loader />;
  return <>{children}</>;
};

export default ProtectedRoute;
