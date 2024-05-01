import { useDispatch } from 'react-redux';
import { app } from '../../../../firebase/firebase';
import { StyledRegistration } from './Registration.styled';
import { CustomForm } from 'components/Form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setAuth } from '../../../../redux/slices/auth';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitForm = async ({ name, email, password }, { resetForm }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userData = {
        id: user.uid,
        email: user.email,
        token: user.accessToken,
        isAuthorized: true,
      };

      dispatch(setAuth(userData));

      localStorage.setItem('userDataAuth', JSON.stringify(userData));

      navigate('./nannies');
    } catch (error) {
      console.log(error);
    } finally {
      resetForm();
    }
  };

  return (
    <StyledRegistration>
      <h2>Registration</h2>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>

      <CustomForm registration handleSubmit={handleSubmitForm} />
    </StyledRegistration>
  );
};
