import * as Yup from 'yup';

const regx = {
  name: /^[a-zA-Z]{2,20}$/,
  password: /^[a-zA-Z0-9_-]{6,18}$/,
};

const name = Yup.string()
  .required('Enter a name')
  .matches(
    regx.name,
    'The name must be between 2 and 20 characters in English!'
  );

export const schemas = {
  custom: Yup.object().shape({
    name,
  }),
};

export const initialValuesRegistration = { name: '', email: '', password: '' };
export const initialValuesLogIn = { email: '', password: '' };
