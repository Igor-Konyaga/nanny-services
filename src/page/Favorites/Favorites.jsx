import { NanniesFavoriteList } from 'components/NanniesFavoriteList/NanniesFavoriteList';
import { StyledFavoritesPage } from './Favorites.styled';

export const Favorites = () => {
  return (
    <StyledFavoritesPage>
      <NanniesFavoriteList />
    </StyledFavoritesPage>
  );
};
