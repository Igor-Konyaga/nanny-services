import styled from 'styled-components';
import bgImage from '../../images/bg-img.png';

export const StyledHomePage = styled.div`
  padding: 32px;

  .body {
    display: flex;
    flex-direction: column;
    max-width: 1373px;
    height: calc(100vh - 64px);

    position: relative;

    padding: 0 96px 50px;
    margin: 0 auto;

    background-color: #f03f3b;

    background-position: right;
    background-repeat: no-repeat;
    background-size: 699px 736px;
    background-image: url(${bgImage});

    border-radius: 30px;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: rgba(251, 251, 251, 0.4);

      position: absolute;
      top: 88px;
      left: 0;
    }

    .body__content {
      margin-top: auto;
      max-width: 517px;
      color: #fbfbfb;

      .body__title {
        margin-bottom: 28px;
        font-size: 70px;
        font-weight: 500;
        line-height: 1;
      }

      .body__text {
        font-size: 28px;
        margin-bottom: 64px;
      }

      .body__btn {
        width: 230px;


        a {
          display: flex;
          justify-content: space-between;
          align-items: center;

          position: relative;

          padding: 18px 50px;

          border: 1px solid rgba(251, 251, 251, 0.4);
          border-radius: 30px;

          font-size: 20px;
          font-weight: 500;
			 

          .icon {
            transition: all 0.3s;
            transform: rotate(0deg);
          }

          &:hover,
          &:focus {
            .icon {
              transition: all 0.3s;
              transform: rotate(52deg);
            }
          }
        }
      }
    }

    .body__statistics {
      display: flex;
      column-gap: 16px;
      align-self: flex-end;

      margin-right: -46px;

      padding: 32px;
      max-width: 284px;

      border-radius: 20px;
      background-color: #fbfbfb;

      .body__statistics-icon {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 54px;
        height: 54px;

        border-radius: 13px;
        background-color: #f03f3b;
      }

      .body__statitics-content {
        h3 {
          margin-bottom: 6px;
          color: rgba(17, 16, 28, 0.5);
          font-weight: 400;
          font-size: 16px;
        }
        p {
          color: #11101c;
          font-size: 24px;
          font-weight: 700;
        }
      }
    }
  }
`;
