import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ $noHome }) => ($noHome ? '#f03f3b' : 'transparent')};

  .header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: ${({ $noHome }) => ($noHome ? '1214px' : '1184px')};
    margin: 0 auto;
    padding: ${({ $noHome }) => ($noHome ? '0 15px' : '')};

    color: #fbfbfb;

    .header__wrapper-nav {
      display: flex;
      align-items: center;
      ${({ $noHome }) => ($noHome ? 'justify-content: space-between;' : '')}
      ${({ $noHome }) => ($noHome ? 'width:60%;' : '')}
      column-gap: ${({ $noHome }) => ($noHome ? '' : '92px')};
    }
  }
`;

export const StyledLink = styled(Link)`
  font-size: 24px;
  font-weight: 500;
`;
