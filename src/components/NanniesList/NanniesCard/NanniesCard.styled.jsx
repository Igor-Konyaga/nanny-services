import styled from 'styled-components';

export const StyledCard = styled.li`
  display: flex;
  column-gap: 24px;
  padding: 24px;

  background-color: #fbfbfb;
  border-radius: 24px;

  .wrapperImg {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 120px;
    height: 120px;

    padding: 12px;

    border: 2px solid rgba(240, 63, 59, 0.2);
    border-radius: 30px;

    .isOnline {
      display: block;
      width: 14px;
      height: 14px;

      position: absolute;
      top: 9px;
      right: 14px;

      border-radius: 50%;
      background-color: #fbfbfb;

      &::before {
        content: '';
        display: block;
        width: 9.3px;
        height: 9.3px;

        position: absolute;
        top: 50%;
        right: 50%;

        transform: translate(50%, -50%);

        border-radius: 50%;
        background-color: #38cd3e;
      }
    }

    img {
      border-radius: 15px;
    }
  }

  .nanniesInfo {
    width: 100%;
    .nanniesInfoHeader {
      display: flex;
      justify-content: space-between;

      margin-bottom: 24px;
      .wrapperTitle {
        p {
          margin-bottom: 8px;
          color: #8a8a89;
          font-size: 16px;
          line-height: 1.5;
        }
        h2 {
          font-weight: 500;
          font-size: 24px;
          line-height: 1;
          color: #11101c;
        }
      }

      .wrapperInfoHeader {
        align-self: flex-start;
        display: flex;
        align-items: center;
        column-gap: 48px;

        .headerInfoList {
          display: flex;
          column-gap: 32px;

          .headerInfoItem {
            display: flex;
            align-items: center;
            column-gap: 8px;

            position: relative;

            font-weight: 500;
            font-size: 16px;
            line-height: 1.5;
            color: #11101c;

            &:not(:last-child) {
              &::before {
                content: '';
                display: block;
                height: 16px;
                width: 1px;

                position: absolute;
                top: auto;
                right: -16px;

                background-color: rgba(17, 16, 28, 0.2);
              }
            }
          }
        }

        .heartBtn {
          font-size: 0;
        }
      }
      .heartBtn {
        .isFavorite {
          fill: #f03f3b;
          path {
            stroke: #f03f3b;
          }
        }
      }
    }

    .nanniesInfoMain {
      margin-bottom: 14px;
      .infoMainList {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        margin-bottom: 24px;

        .infoMainItem {
          padding: 8px 16px;

          background-color: #f3f3f3;
          color: #8a8a89;
          border-radius: 24px;

          font-weight: 500;
          font-size: 16px;
          line-height: 1.5;

          span {
            color: #11101c;
          }
          .age {
            text-decoration: underline;
          }
        }
      }

      .about {
        font-size: 16px;
        line-height: 1.25;
        color: rgba(17, 16, 28, 0.5);
      }
    }
    .readMoreBtn {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      text-decoration: underline;
      text-decoration-skip-ink: none;
      color: #11101c;
    }
    .makeBtn {
      padding: 14px 28px;
      min-width: 215px;

      color: #fbfbfb;
      background: #f03f3b;
      border-radius: 300px;

      font-weight: 500;
      font-size: 16px;
      line-height: 1.25;
      letter-spacing: -0.01em;
    }
  }
`;
