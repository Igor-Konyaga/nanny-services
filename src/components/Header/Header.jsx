import { useState } from 'react';
import { StyledHeader, StyledLink } from './Header.styled';
import { Navigation } from './Navigation/Navigation';
import { useSelector } from 'react-redux';
import { Modals } from 'components/Modal/Modals/Modals';
import { HeaderButtons } from './HeaderButtons/HeaderButtons';
import { LogOut } from './LogOut/LogOut';

export const Header = ({ $noHome }) => {
  const authentication = useSelector(state => state.auth.token);

  const [openModalLogIn, setOpenModalLogIn] = useState(false);
  const [openModalRegistration, setOpenModalRegistration] = useState(false);

  return (
    <StyledHeader $noHome={$noHome}>
      <div className="header__container">
        <StyledLink to={'/'}>Nanny.Services</StyledLink>
        <div className="header__wrapper-nav">
          <Navigation $noHome={$noHome} />

          {authentication ? (
            <LogOut />
          ) : (
            <HeaderButtons
              setOpenModalLogIn={setOpenModalLogIn}
              setOpenModalRegistration={setOpenModalRegistration}
            />
          )}
        </div>
      </div>

      <Modals
        openModalLogIn={openModalLogIn}
        setOpenModalLogIn={setOpenModalLogIn}
        openModalRegistration={openModalRegistration}
        setOpenModalRegistration={setOpenModalRegistration}
      />
    </StyledHeader>
  );
};
