import { NanniesFavoriteList } from 'components/NanniesFavoriteList/NanniesFavoriteList';
import { StyledFavoritesPage } from './Favorites.styled';
import { Filters } from '../../components/Filters/Filters';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetFiltrationCategory } from '../../redux/slices/nanniesData';

export const Favorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetFiltrationCategory());
  }, [dispatch]);

  return (
    <StyledFavoritesPage>
      <Filters />
      <NanniesFavoriteList />
    </StyledFavoritesPage>
  );
};
