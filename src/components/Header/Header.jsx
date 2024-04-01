import { useState } from 'react';

import { StyledHeader, StyledLink } from './Header.styled';
import { Navigation } from './Navigation/Navigation';
import { Modal } from 'components/Modal/Modal';
import { LogIn } from 'components/Modal/LogIn/LogIn';
import { Registration } from 'components/Modal/Registration/Registration';

export const Header = ({ $noHome }) => {
  const [openModalLogIn, setOpenModalLogIn] = useState(false);
  const [openModalRegistration, setOpenModalRegistration] = useState(false);

  return (
    <StyledHeader $noHome={$noHome}>
      <div className="header__container">
        <StyledLink to={'/'}>Nanny.Services</StyledLink>
        <div className="header__wrapper-nav">
          <Navigation $noHome={$noHome}/>
          <div className="header__wrapper-btn">
            <button
              onClick={() => setOpenModalLogIn(true)}
              className="header__btn"
              type="button"
            >
              Log In
            </button>
            <button
              onClick={() => setOpenModalRegistration(true)}
              className="header__btn header__btn-mod"
              type="button"
            >
              Registration
            </button>
          </div>
        </div>
      </div>
      {openModalLogIn && (
        <Modal openModal={setOpenModalLogIn}>
          <LogIn />
        </Modal>
      )}
      {openModalRegistration && (
        <Modal openModal={setOpenModalRegistration}>
          <Registration />
        </Modal>
      )}
    </StyledHeader>
  );
};
