import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  position: relative;

  margin-bottom: ${({ $mgBt }) => ($mgBt ? $mgBt : '')};

  input {
    padding: 16px 18px;
    width: 100%;

    border: 1px solid rgba(17, 16, 28, 0.1);
    border-radius: 12px;

    font-size: 16px;
  }

  .form__btn-eye {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  .form__error {
    display: block;
  }
`;
