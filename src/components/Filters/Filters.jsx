import React from 'react';
import { useState } from 'react';
import { StyledFilter } from './Filters.styled';
import { ReactComponent as ArrowIcon } from '../../images/icon/arrow-down.svg';
import { useSelector } from 'react-redux';
import { nanniesList } from '../../redux/selectors/selectors';
import { FilterList } from './FilterList/FilterList';

export const Filters = () => {
  const [isVisibleCategoryFiltration, setIsVisibleCategoryFiltration] =
    useState(false);

  const { filtrationCategory } = useSelector(nanniesList);

  const handleClickFiltration = () => {
    setIsVisibleCategoryFiltration(!isVisibleCategoryFiltration);
  };

  return (
    <StyledFilter>
      <label className="label" htmlFor="select">
        Filters
      </label>
      <button
        onClick={handleClickFiltration}
        className="filterBtn"
        type="button"
      >
        {filtrationCategory}
        <ArrowIcon />
      </button>

      {isVisibleCategoryFiltration ? (
        <FilterList
          setIsVisibleCategoryFiltration={setIsVisibleCategoryFiltration}
        />
      ) : (
        ''
      )}
    </StyledFilter>
  );
};
