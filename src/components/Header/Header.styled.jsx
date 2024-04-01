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
      align-items: baseline;
      ${({ $noHome }) => ($noHome ? 'justify-content: space-between;' : '')}
      ${({ $noHome }) => ($noHome ? 'width:60%;' : '')}
      column-gap: ${({ $noHome }) => ($noHome ? '' : '92px')};

      .header__wrapper-btn {
        display: flex;
        align-items: center;
        column-gap: 8px;
        .header__btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 14px 40px;

          border: 1px solid rgba(251, 251, 251, 0.4);
          border-radius: 30px;

          font-weight: 500;
          font-size: 16px;

          transition: all 0.3s;

          &:hover {
            background-color: #fbfbfb;
            color: #f03f3b;

            transition: all 0.3s;
          }
        }

        .header__btn-mod {
          background-color: #f03f3b;
          border: none;
        }
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  font-size: 24px;
  font-weight: 500;
`;
