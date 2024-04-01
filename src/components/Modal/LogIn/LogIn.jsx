import { CustomForm } from 'components/Form/Form';
import { StyledLogIn } from './LogIn.styled';

export const LogIn = () => {
  return (
    <StyledLogIn>
      <h2>Log In</h2>
      <p>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <CustomForm />
    </StyledLogIn>
  );
};
