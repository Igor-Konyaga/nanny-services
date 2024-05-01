import { Button } from 'components/Button/Button';
import { StyledWrapperButtons } from './HeaderButtons.styled';

export const HeaderButtons = ({
  setOpenModalLogIn,
  setOpenModalRegistration,
}) => {
  const custonStyle = 'background-color: #F03F3B; ';

  return (
    <StyledWrapperButtons>
      <Button type="button" event={() => setOpenModalLogIn(true)}>
        Log In
      </Button>
      <Button
        styleProps={custonStyle}
        type="button"
        event={() => setOpenModalRegistration(true)}
      >
        Registration
      </Button>
    </StyledWrapperButtons>
  );
};
