import { useDispatch } from 'react-redux';
import { StyledNanniesPage } from './Nannies.styled';
import { useEffect } from 'react';
import { getNanniesData } from '../../services/getDataFirebase';
import { NanniesList } from 'components/NanniesList/NanniesList';
import { synchronizationLS } from '../../redux/slices/nanniesData';
import { Filters } from '../../components/Filters/Filters';

export const Nannies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNanniesData(dispatch);

    const favotitesNanny = JSON.parse(localStorage.getItem('favorites')) || [];

    dispatch(synchronizationLS(favotitesNanny));
  }, [dispatch]);

  return (
    <StyledNanniesPage>
      <Filters />
      <NanniesList />
    </StyledNanniesPage>
  );
};
