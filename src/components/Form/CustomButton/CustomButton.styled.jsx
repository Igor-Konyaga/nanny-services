import styled from 'styled-components';

export const StyledBtn = styled.button`
  padding: 16px 24px;
  width: 100%;

  border-radius: 30px;
  color: #fbfbfb;
  background-color: #f03f3b;

  font-size: 16px;
  font-weight: 500;

  transition: all 0.3s;

  &:focus,
  &:hover {
    transition: all 0.3s;

    transform: scale(1.03);
  }
`;
