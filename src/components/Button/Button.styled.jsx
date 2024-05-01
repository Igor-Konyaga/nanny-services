import styled from 'styled-components';

export const StyledBtn = styled.button`
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
  

  ${({ $styleProps }) => ($styleProps ? $styleProps : '')}
`;
