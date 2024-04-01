import { StyledNav, StyledNavLink } from './Navigation.styled';

export const Navigation = ({ $noHome }) => {
  return (
    <StyledNav>
      <StyledNavLink to={'/'}>Home</StyledNavLink>
      <StyledNavLink to={'nannies'}>Nannies</StyledNavLink>
      {$noHome ? <StyledNavLink to={'favorites'}>Favorites</StyledNavLink> : ''}
    </StyledNav>
  );
};
