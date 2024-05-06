import React from 'react';
import { StyledWrapperList } from './NanniesList.styled';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { nanniesList } from '../../redux/selectors/selectors';
import { NanniesCard } from './NanniesCard/NanniesCard';
import { filtrationData } from 'services/filters';

export const NanniesList = () => {
  const dataLimit = 3;
  const [limit, setLimit] = useState(dataLimit);

  const { nanniesData } = useSelector(nanniesList);
  const { favoriteNannies, filtrationCategory } = useSelector(nanniesList);

  useEffect(() => {
    setLimit(dataLimit);
  }, [filtrationCategory]);

  const data = filtrationData(filtrationCategory, nanniesData);

  const handleLoadMore = () => {
    setLimit(prevLimit => prevLimit + dataLimit);
  };

  const isFavoriteNanny = nanny => {
    return favoriteNannies.some(
      favoriteNanny => favoriteNanny.name === nanny.name
    );
  };

  const validArr = Array.isArray(data) && data.length > 0;

  return (
    <StyledWrapperList>
      <ul className="listNannies">
        {validArr
          ? data.slice(0, limit).map((nanny, index) => {
              return (
                <NanniesCard
                  index={index % 3 + 1}
                  isFavoriteNanny={isFavoriteNanny(nanny)}
                  key={nanny.name}
                  nanny={nanny}
                />
              );
            })
          : ''}
      </ul>

      {limit < data.length ? (
        <button className="loadMoreBtn" onClick={handleLoadMore}>
          Load More
        </button>
      ) : (
        ''
      )}
    </StyledWrapperList>
  );
};
