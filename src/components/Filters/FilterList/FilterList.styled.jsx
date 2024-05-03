import styled from 'styled-components';

export const StyledFilterList = styled.ul`
  position: absolute;
  top: 80px;
  left: 0;

  padding: 8px 0;
  width: 100%;

  background-color: #ffffff;
  color: rgba(17, 16, 28, 0.3);
  border-radius: 14px;

  z-index: 5;
  .categoryItem {
    &:hover {
      color: #11101c;
      transition: all 0.3s;
    }
    .categoryBtn {
      padding: 6px 18px;

      width: 100%;
      font-size: 18px;
      text-align: start;
    }
  }
`;
