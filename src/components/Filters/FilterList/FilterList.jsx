import { setFiltrationCategory } from '../../../redux/slices/nanniesData';
import { StyledFilterList } from './FilterList.styled';
import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';

const categoryList = [
  'A to Z',
  'Z to A',
  'Less than 10$',
  'Greater than 10$',
  'Popular',
  'Not popular',
  'Show all',
];

export const FilterList = ({ setIsVisibleCategoryFiltration }) => {
  const dispatch = useDispatch();

  const handleClickCategory = e => {
    dispatch(setFiltrationCategory(e.target.dataset.value));
  };

  

  useEffect(() => {
    const handelClick = e => {
      if (
        e.target.localName === 'button' ||
        e.target.localName === 'svg' ||
        e.target.localName === 'path'
      ) {
        return;
      }
      setIsVisibleCategoryFiltration(false);
    };

    document.addEventListener('click', handelClick);

    return () => {
      document.removeEventListener('click', handelClick);
    };
  }, [setIsVisibleCategoryFiltration]);

  return (
    <StyledFilterList onClick={handleClickCategory}>
      {categoryList.map(category => {
        return (
          <li
            onClick={() => setIsVisibleCategoryFiltration(false)}
            className="categoryItem"
            key={category}
            data-value={category}
          >
            <button className="categoryBtn" data-value={category} type="button">
              {category}
            </button>
          </li>
        );
      })}
    </StyledFilterList>
  );
};
