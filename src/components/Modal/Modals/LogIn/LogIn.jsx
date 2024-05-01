import { CustomForm } from 'components/Form/Form';
import { StyledLogIn } from './LogIn.styled';
import { app } from '../../../../firebase/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../../redux/slices/auth';

export const LogIn = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = async ({ name, email, password }, { resetForm }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const userData = {
        id: user.uid,
        email: user.email,
        token: user.accessToken,
        isAuthorized: true,
      };

      dispatch(setAuth(userData));

      localStorage.setItem('userDataAuth', JSON.stringify(userData));

      navigate('/nannies');
    } catch (error) {
      console.log(error.message);
    } finally {
      resetForm();
    }
  };
  return (
    <StyledLogIn>
      <h2>Log In</h2>
      <p>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <CustomForm handleSubmit={handleSubmitForm} />
    </StyledLogIn>
  );
};
