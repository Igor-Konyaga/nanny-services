import styled from 'styled-components';

export const StyledWrapperList = styled.div`
  display: flex;
  flex-direction: column;

  .listNannies {
    display: flex;
    flex-direction: column;
    row-gap: 32px;

    margin-bottom: 64px;
  }
  .loadMoreBtn {
    padding: 14px 40px;
    max-width: 159px;
    margin: 0 auto;

    color: #fbfbfb;
    background: #f03f3b;
    border-radius: 300px;

    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }
`;
