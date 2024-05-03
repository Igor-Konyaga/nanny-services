import { NanniesFavoriteList } from 'components/NanniesFavoriteList/NanniesFavoriteList';
import { StyledFavoritesPage } from './Favorites.styled';
import { Filters } from '../../components/Filters/Filters';

export const Favorites = () => {
  return (
    <StyledFavoritesPage>
      <Filters />
      <NanniesFavoriteList />
    </StyledFavoritesPage>
  );
};
