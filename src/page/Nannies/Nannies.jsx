import { useDispatch } from 'react-redux';
import { StyledNanniesPage } from './Nannies.styled';
import { useEffect } from 'react';
import { getNanniesData } from '../../services/services';
import { NanniesList } from 'components/NanniesList/NanniesList';
import { synchronizationLS } from '../../redux/slices/nanniesData';

export const Nannies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNanniesData(dispatch);

    const favotitesNanny = JSON.parse(localStorage.getItem('favorites')) || [];

    dispatch(synchronizationLS(favotitesNanny));
  }, [dispatch]);

  return (
    <StyledNanniesPage>
      <NanniesList />
    </StyledNanniesPage>
  );
};
