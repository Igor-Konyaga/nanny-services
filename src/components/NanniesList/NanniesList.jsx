import React from 'react';
import { StyledWrapperList } from './NanniesList.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { nanniesList } from '../../redux/selectors/selectors';
import { NanniesCard } from './NanniesCard/NanniesCard';

export const NanniesList = () => {
  const { nanniesData } = useSelector(nanniesList);
  const { favoriteNannies } = useSelector(nanniesList);

  const dataLimit = 3;
  const [limit, setLimit] = useState(dataLimit);

  const handleLoadMore = () => {
    setLimit(prevLimit => prevLimit + dataLimit);
  };

  const isFavoriteNanny = nanny => {
    return favoriteNannies.some(
      favoriteNanny => favoriteNanny.name === nanny.name
    );
  };

  const validArr = Array.isArray(nanniesData) && nanniesData.length > 0;

  return (
    <StyledWrapperList>
      <ul className="listNannies">
        {validArr
          ? nanniesData.slice(0, limit).map(nanny => {
              return (
                <NanniesCard
                  isFavoriteNanny={isFavoriteNanny(nanny)}
                  key={nanny.name}
                  nanny={nanny}
                />
              );
            })
          : ''}
      </ul>

      {limit < nanniesData.length ? (
        <button className="loadMoreBtn" onClick={handleLoadMore}>
          Load More
        </button>
      ) : (
        ''
      )}
    </StyledWrapperList>
  );
};
