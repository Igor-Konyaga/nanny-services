import React from 'react';
import { StyledWrapperList } from './NanniesList.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { nanniesList } from '../../redux/selectors/selectors';
import { NanniesCard } from './NanniesCard/NanniesCard';
import { sortedData } from 'services/filters';

export const NanniesList = () => {
  const dataLimit = 3;
  const [limit, setLimit] = useState(dataLimit);

  const { nanniesData } = useSelector(nanniesList);
  const { favoriteNannies, filtrationCategory } = useSelector(nanniesList);

  const data = sortedData(filtrationCategory, nanniesData) || nanniesData;

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
          ? data.slice(0, limit).map(nanny => {
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
