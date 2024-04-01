import { StyledRegistration } from './Registration.styled';
import { CustomForm } from 'components/Form/Form';

export const Registration = () => {
  return (
    <StyledRegistration>
      <h2>Registration</h2>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>

      <CustomForm registration />
    </StyledRegistration>
  );
};
