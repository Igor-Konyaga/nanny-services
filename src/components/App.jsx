import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'page/Home/Home';
import { Nannies } from 'page/Nannies/Nannies';
import { Favorites } from 'page/Favorites/Favorites';

export const App = () => {
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
