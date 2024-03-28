import { StyledNav, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to={'/'}>Home</StyledNavLink>
      <StyledNavLink to={'nannies'}>Nannies</StyledNavLink>
      <StyledNavLink to={'favorites'}>Favorites</StyledNavLink>
    </StyledNav>
  );
};
