import { StyledHeader, StyledLink } from './Header.styled';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header__container">
        <StyledLink to={'/'}>Nanny.Services</StyledLink>
        <div className="header__wrapper-nav">
          <Navigation />
          <div className="header__wrapper-btn">
            <button className="header__btn" type="button">
              Log In
            </button>
            <button className="header__btn header__btn-mod" type="button">
              Registration
            </button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
