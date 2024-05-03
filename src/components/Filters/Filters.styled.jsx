import styled from 'styled-components';

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  position: relative;

  max-width: 226px;
  margin-bottom: 32px;

  .label {
    color: #8a8a89;

    font-size: 14px;
    font-weight: 500;
  }

  .filterBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 14px 18px;

    background-color: #f03f3b;
    color: #fbfbfb;
    border-radius: 14px;

    font-size: 18px;
    font-weight: 500;
  }
`;
