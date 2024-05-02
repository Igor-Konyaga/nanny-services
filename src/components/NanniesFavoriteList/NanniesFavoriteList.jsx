import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { StyledFavoriteList } from './NanniesFavoriteList.styled';
import { nanniesList } from '../../redux/selectors/selectors';
import { NanniesCard } from 'components/NanniesList/NanniesCard/NanniesCard';
import { synchronizationLS } from '../../redux/slices/nanniesData';

export const NanniesFavoriteList = () => {
  const dataLimit = 3;
  const [limit, setLimit] = useState(dataLimit);
  const { favoriteNannies } = useSelector(nanniesList);

  const dispatch = useDispatch();

  useEffect(() => {
    const favotitesNanny = JSON.parse(localStorage.getItem('favorites')) || [];

    dispatch(synchronizationLS(favotitesNanny));
  }, [dispatch]);

  const validArr = Array.isArray(favoriteNannies) && favoriteNannies.length > 0;

  const handleLoadMore = () => {
    setLimit(prevLimit => prevLimit + dataLimit);
  };

  return (
    <StyledFavoriteList>
      <ul className="listNannies">
        {validArr
          ? favoriteNannies.slice(0, limit).map(nanny => {
              return (
                <NanniesCard isFavoriteNanny key={nanny.name} nanny={nanny} />
              );
            })
          : ''}
      </ul>

      {limit < favoriteNannies.length ? (
        <button className="loadMoreBtn" onClick={handleLoadMore}>
          Load More
        </button>
      ) : (
        ''
      )}
    </StyledFavoriteList>
  );
};
