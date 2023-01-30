import Router from 'next/router';
import type React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/redux/store';

interface Props {}

const RouteHandler: React.FC<Props> = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      Router.push('/public/login');
    } else {
      Router.push('/private/dashboard');
    }
  }, [isLoggedIn]);
};

export default RouteHandler;
