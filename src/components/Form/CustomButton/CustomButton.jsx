import { StyledBtn } from './CustomButton.styled';

export const CustomButton = ({ children, typeBtn }) => {
  return <StyledBtn type={typeBtn}>{children}</StyledBtn>;
};
