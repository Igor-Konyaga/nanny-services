import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 34px 0;
  position: relative;

  &.active {
	transform: translate(0, -1px);
    &::before {
      content: '';
      display: block;
      width: 8px;
      height: 8px;

      border-radius: 50%;
      background-color: #fff;

      position: absolute;
      bottom: 18px;
      left: 50%;

		transform: translate(-50%, 0);
    }
  }
`;
