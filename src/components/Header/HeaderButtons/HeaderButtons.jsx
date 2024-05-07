import { Button } from 'components/Button/Button';
import { StyledWrapperButtons } from './HeaderButtons.styled';

export const HeaderButtons = ({
  setOpenModalLogIn,
  setOpenModalRegistration,
}) => {
  const customStyle = 'background-color: #F03F3B; ';

  return (
    <StyledWrapperButtons>
      <Button type="button" event={() => setOpenModalLogIn(true)}>
        Log In
      </Button>
      <Button
        styleProps={customStyle}
        type="button"
        event={() => setOpenModalRegistration(true)}
      >
        Registration
      </Button>
    </StyledWrapperButtons>
  );
};
