import React from 'react';
import { StyledBtn } from './Button.styled';

export const Button = ({ children, type, event, styleProps }) => {
  return (
    <StyledBtn $styleProps={styleProps} onClick={event} type={type}>
      {children}
    </StyledBtn>
  );
};
