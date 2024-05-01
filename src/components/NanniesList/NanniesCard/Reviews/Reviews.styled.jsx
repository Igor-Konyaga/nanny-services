import styled from 'styled-components';

export const StyledReviews = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;

  .reviewsList {
	display: flex;
	flex-direction: column;
	row-gap: 25px;
    .reviewsItem {
      .wrapper {
        display: flex;
        align-items: center;
        column-gap: 12px;

        margin-bottom: 16px;

        .iconName {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 44px;
          height: 44px;

          background: rgba(240, 63, 59, 0.2);
          border-radius: 50%;

          font-weight: 500;
          font-size: 20px;
          line-height: 1;
          color: #f03f3b;
        }

        .wrapperUserName {
          .userName {
            margin-bottom: 4px;
            font-weight: 500;
            font-size: 16px;
            line-height: 1.25;
            color: #11101c;
          }

          .rating {
            display: flex;
            align-items: center;
            column-gap: 8px;

            font-weight: 500;
            font-size: 14px;
            line-height: 1.29;
            color: #11101c;
          }
        }
      }

      .comment {
        font-size: 16px;
        line-height: 1.25;
        color: rgba(17, 16, 28, 0.5);
      }
    }
  }
`;
