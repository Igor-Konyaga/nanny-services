import { StyledLogOut } from './LogOut.styled';
import { ReactComponent as Icon } from '../../../images/icon/user-icon.svg';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeAuth } from '../../../redux/slices/auth';
import { useNavigate } from 'react-router-dom';

export const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector(state => state.auth.email);
  const userName = userEmail.split('@')[0];

  const handleLogOut = () => {
    dispatch(removeAuth());
    localStorage.removeItem('userDataAuth');
    navigate('/');
  };

  return (
    <StyledLogOut>
      <div className="wrapperInfoUser">
        <Icon />
        <p>{userName}</p>
      </div>
      <Button event={handleLogOut} type="button">
        Log out
      </Button>
    </StyledLogOut>
  );
};
