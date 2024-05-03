import React from 'react';
import { useState } from 'react';
import { StyledFilter } from './Filters.styled';
import { ReactComponent as ArrowIcon } from '../../images/icon/arrow-down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setFiltrationCategory } from '../../redux/slices/nanniesData';
import { nanniesList } from '../../redux/selectors/selectors';

const categoryList = [
  'A to Z',
  'Z to A',
  'Less than 10$',
  'Greater than 10$',
  'Popular',
  'Not popular',
  'Show all',
];

export const Filters = () => {
  const [isVisibleCategoryFiltration, setIsVisibleCategoryFiltration] =
    useState(false);

  const dispatch = useDispatch();
  const { filtrationCategory } = useSelector(nanniesList);

  const handleClickFiltration = () => {
    setIsVisibleCategoryFiltration(!isVisibleCategoryFiltration);
  };

  const handleClickCategory = e => {
    dispatch(setFiltrationCategory(e.target.dataset.value));
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
        <ul onClick={handleClickCategory} className="categoryList">
          {categoryList.map(category => {
            return (
              <li key={category} data-value={category} className="categoryItem">
                <button data-value={category} type="button">
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </StyledFilter>
  );
};
