import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'page/Home/Home';
import { Nannies } from 'page/Nannies/Nannies';
import { Favorites } from 'page/Favorites/Favorites';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/slices/auth';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userDataAuth'));

    if (userData) {
      dispatch(setAuth(userData));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<SharedLayout />}>
        <Route path="nannies" element={<Nannies />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};
