import { StyledInputContainer } from './Input.styled';
import { Field, ErrorMessage as Error } from 'formik';
import { useState } from 'react';
import { ReactComponent as Openly } from '../../../images/icon/openly.svg';
import { ReactComponent as Closed } from '../../../images/icon/closed.svg';

export const Input = ({ name, id, placeholder, type, $mgBt }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <StyledInputContainer $mgBt={$mgBt}>
      <Field
        name={name}
        id={id}
        placeholder={placeholder}
        type={visiblePassword ? 'text' : type}
      />
      <Error name={name}>
        {error => <span className="form__error">{error}</span>}
      </Error>
      <button
        onClick={() => setVisiblePassword(!visiblePassword)}
        className="form__btn-eye"
        type="button"
      >
        {name === 'password' && (visiblePassword ? <Openly /> : <Closed />)}
      </button>
    </StyledInputContainer>
  );
};
